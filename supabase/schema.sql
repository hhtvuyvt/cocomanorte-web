-- Esquema completo y migraciones de la base de datos de COCOMANORTE (Supabase / PostgreSQL)

-- 1. Tabla de reportes de monitoreo de playas
CREATE TABLE IF NOT EXISTS monitoring_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  date DATE NOT NULL,
  start_time TEXT,
  end_time TEXT,
  beach_name TEXT NOT NULL,
  is_new_unregistered_beach BOOLEAN DEFAULT FALSE,
  custom_beach_name TEXT,
  latitude NUMERIC,
  longitude NUMERIC,
  sector_name TEXT,
  observer_name TEXT NOT NULL,
  community TEXT,
  beach_material_type TEXT,
  approx_length_km NUMERIC,
  approx_width_meters NUMERIC,
  tide_distance_meters NUMERIC,
  elevation_gps_meters NUMERIC,
  slope_type TEXT,
  erosion_evidence TEXT[],
  sedimentation_observation TEXT,
  sea_currents_info TEXT,
  wave_height_meters NUMERIC,
  tide_state TEXT,
  temperature_celsius NUMERIC,
  weather_condition TEXT,
  wind_direction_and_speed TEXT,
  sea_state TEXT,
  vegetation_type TEXT[],
  observed_fauna TEXT,
  sargassum_presence_level TEXT,
  river_mouth_name TEXT,
  water_visual_quality TEXT,
  waste_types_found TEXT[],
  waste_quantity_level TEXT,
  infrastructure_observed TEXT,
  economic_activities_observed TEXT,
  traditional_knowledge_shared TEXT,
  identified_threats TEXT[],
  observations_notes TEXT,
  event_type TEXT NOT NULL DEFAULT 'Sin Avistamiento',
  explicit_active_nests_count INTEGER NOT NULL DEFAULT 0,
  explicit_released_hatchlings_count INTEGER NOT NULL DEFAULT 0,
  user_id UUID REFERENCES auth.users(id) DEFAULT auth.uid()
);

-- Migración idempotente para instalaciones o tablas preexistentes
ALTER TABLE monitoring_reports
  ADD COLUMN IF NOT EXISTS event_type TEXT NOT NULL DEFAULT 'Sin Avistamiento',
  ADD COLUMN IF NOT EXISTS explicit_active_nests_count INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS explicit_released_hatchlings_count INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) DEFAULT auth.uid();

-- Restricciones y validaciones a nivel DB para garantizar calidad de datos
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_active_nests') THEN
    ALTER TABLE monitoring_reports
      ADD CONSTRAINT chk_active_nests CHECK (explicit_active_nests_count >= 0 AND explicit_active_nests_count <= 500);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_released_hatchlings') THEN
    ALTER TABLE monitoring_reports
      ADD CONSTRAINT chk_released_hatchlings CHECK (explicit_released_hatchlings_count >= 0 AND explicit_released_hatchlings_count <= 10000);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_event_coherence') THEN
    ALTER TABLE monitoring_reports
      ADD CONSTRAINT chk_event_coherence CHECK (
        NOT (event_type = 'Liberación de Neonatos' AND explicit_released_hatchlings_count = 0)
      );
  END IF;
END $$;

-- 2. Tabla de estado consolidado de las playas
CREATE TABLE IF NOT EXISTS beaches (
  id TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  zone TEXT NOT NULL,
  length_km NUMERIC,
  status TEXT NOT NULL,
  active_nests INTEGER NOT NULL DEFAULT 0,
  released_hatchlings INTEGER NOT NULL DEFAULT 0,
  last_patrol TEXT,
  threat_level TEXT NOT NULL DEFAULT 'Bajo',
  patrol_leader TEXT
);

-- Row Level Security (RLS)
ALTER TABLE monitoring_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE beaches ENABLE ROW LEVEL SECURITY;

-- Eliminar políticas antiguas inseguras si existen
DROP POLICY IF EXISTS "Inserción pública de reportes" ON monitoring_reports;
DROP POLICY IF EXISTS "Actualización pública de playas" ON beaches;
DROP POLICY IF EXISTS "Lectura pública de reportes" ON monitoring_reports;
DROP POLICY IF EXISTS "Lectura pública de estado de playas" ON beaches;

-- Políticas de lectura pública
CREATE POLICY "Lectura pública de reportes" ON monitoring_reports FOR SELECT USING (true);
CREATE POLICY "Lectura pública de estado de playas" ON beaches FOR SELECT USING (true);

-- Política RLS estricta para Issue #2: Solo usuarios AUTENTICADOS pueden insertar reportes
CREATE POLICY "Inserción sólo por patrulleros autenticados"
  ON monitoring_reports
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

-- La tabla beaches NO tiene política de INSERT/UPDATE pública ni autenticada para clientes REST.
-- El estado de las playas es actualizado únicamente mediante Triggers de PostgreSQL en el servidor.

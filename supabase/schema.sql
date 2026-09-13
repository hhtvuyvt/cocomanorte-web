-- ========================================================
-- ESQUEMA DE BASE DE DATOS SUPABASE - COCOMANORTE
-- Monitoreo Integral de Playas del Chocó
-- ========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Tabla de Playas Registradas
CREATE TABLE IF NOT EXISTS public.beaches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    zone VARCHAR(255) NOT NULL,
    length_km NUMERIC(5,2) DEFAULT 0.0,
    status VARCHAR(100) DEFAULT 'Activa - Temporada de Anidación',
    active_nests INT DEFAULT 0,
    released_hatchlings INT DEFAULT 0,
    last_patrol VARCHAR(255),
    threat_level VARCHAR(50) DEFAULT 'Bajo',
    patrol_leader VARCHAR(255),
    latitude NUMERIC(9,6),
    longitude NUMERIC(9,6),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabla Principal de Informes de Monitoreo Integral
CREATE TABLE IF NOT EXISTS public.monitoring_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,

    -- 0. Datos Básicos
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    start_time TIME NOT NULL,
    end_time TIME,
    beach_name VARCHAR(255) NOT NULL,
    is_new_unregistered_beach BOOLEAN DEFAULT FALSE,
    custom_beach_name VARCHAR(255),
    latitude NUMERIC(9,6),
    longitude NUMERIC(9,6),
    sector_name VARCHAR(255),
    observer_name VARCHAR(255) NOT NULL,
    community VARCHAR(255) NOT NULL,

    -- 1. Caracterización Física
    beach_material_type VARCHAR(100) NOT NULL,
    approx_length_km NUMERIC(5,2),
    approx_width_meters NUMERIC(6,2),
    tide_distance_meters NUMERIC(6,2),
    elevation_gps_meters NUMERIC(6,2),
    slope_type VARCHAR(50),

    -- 2. Dinámica Costera
    erosion_evidence TEXT[],
    sedimentation_observation TEXT,
    sea_currents_info TEXT,
    wave_height_meters NUMERIC(4,2),
    tide_state VARCHAR(50) NOT NULL,

    -- 3. Condiciones Climáticas
    temperature_celsius NUMERIC(4,1),
    weather_condition VARCHAR(100),
    wind_direction_and_speed VARCHAR(255),
    sea_state VARCHAR(100),

    -- 4. Ecosistemas & Biodiversidad
    vegetation_type TEXT[],
    observed_fauna TEXT NOT NULL,
    sargassum_presence_level VARCHAR(50),

    -- 5, 6 & 7. Recursos Hídricos, Contaminación e Infraestructura
    river_mouth_name VARCHAR(255),
    water_visual_quality VARCHAR(255),
    waste_types_found TEXT[],
    waste_quantity_level VARCHAR(50) NOT NULL,
    infrastructure_observed TEXT,

    -- 8 & 9. Aspectos Sociales y Amenazas
    economic_activities_observed TEXT,
    traditional_knowledge_shared TEXT,
    identified_threats TEXT[],
    observations_notes TEXT
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.beaches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.monitoring_reports ENABLE ROW LEVEL SECURITY;

-- Políticas de Seguridad RLS
-- Permitir lectura pública de informes y playas
CREATE POLICY "Lectura pública de playas" ON public.beaches FOR SELECT USING (true);
CREATE POLICY "Lectura pública de reportes" ON public.monitoring_reports FOR SELECT USING (true);

-- Permitir inserción de reportes y nuevas playas
CREATE POLICY "Inserción pública de reportes de monitoreo" ON public.monitoring_reports FOR INSERT WITH CHECK (true);
CREATE POLICY "Inserción pública de nuevas playas" ON public.beaches FOR INSERT WITH CHECK (true);

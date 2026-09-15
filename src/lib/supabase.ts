import type { ComprehensiveMonitoringReport, Beach } from "../data/beachMonitoring";

// Metadatos de entorno para la conexión con Supabase
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl !== "https://tu-proyecto.supabase.co" &&
    !supabaseUrl.includes("tu-proyecto")
);

/**
 * Inserta un reporte de monitoreo en la tabla remota de Supabase si está configurada.
 */
export async function insertReportToSupabase(report: ComprehensiveMonitoringReport): Promise<boolean> {
  if (!isSupabaseConfigured) {
    console.info("💡 Supabase no está configurado. El reporte se guardará en almacenamiento local.");
    return false;
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/monitoring_reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        date: report.date,
        start_time: report.startTime,
        end_time: report.endTime,
        beach_name: report.beachName,
        is_new_unregistered_beach: report.isNewUnregisteredBeach,
        custom_beach_name: report.customBeachName,
        latitude: report.latitude,
        longitude: report.longitude,
        sector_name: report.sectorName,
        observer_name: report.observerName,
        community: report.community,
        beach_material_type: report.beachMaterialType,
        approx_length_km: report.approxLengthKm,
        approx_width_meters: report.approxWidthMeters,
        tide_distance_meters: report.tideDistanceMeters,
        elevation_gps_meters: report.elevationGpsMeters,
        slope_type: report.slopeType,
        erosion_evidence: report.erosionEvidence,
        sedimentation_observation: report.sedimentationObservation,
        sea_currents_info: report.seaCurrentsInfo,
        wave_height_meters: report.waveHeightMeters,
        tide_state: report.tideState,
        temperature_celsius: report.temperatureCelsius,
        weather_condition: report.weatherCondition,
        wind_direction_and_speed: report.windDirectionAndSpeed,
        sea_state: report.seaState,
        vegetation_type: report.vegetationType,
        observed_fauna: report.observedFauna,
        sargassum_presence_level: report.sargassumPresenceLevel,
        river_mouth_name: report.riverMouthName,
        water_visual_quality: report.waterVisualQuality,
        waste_types_found: report.wasteTypesFound,
        waste_quantity_level: report.wasteQuantityLevel,
        infrastructure_observed: report.infrastructureObserved,
        economic_activities_observed: report.economicActivitiesObserved,
        traditional_knowledge_shared: report.traditionalKnowledgeShared,
        identified_threats: report.identifiedThreats,
        observations_notes: report.observationsNotes,
        event_type: report.eventType || "Sin Avistamiento",
        explicit_active_nests_count: report.explicitActiveNestsCount ?? 0,
        explicit_released_hatchlings_count: report.explicitReleasedHatchlingsCount ?? 0,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error al enviar reporte a Supabase:", error);
    return false;
  }
}

/**
 * Actualiza o inserta el estado de una playa en la tabla `beaches` de Supabase.
 */
export async function updateBeachStatusInSupabase(beach: Beach): Promise<boolean> {
  if (!isSupabaseConfigured) return false;

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/beaches?name=eq.${encodeURIComponent(beach.name)}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        status: beach.status,
        threat_level: beach.threatLevel,
        active_nests: beach.activeNests,
        released_hatchlings: beach.releasedHatchlings,
        last_patrol: beach.lastPatrol,
        patrol_leader: beach.patrolLeader,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error al actualizar estado de la playa en Supabase:", error);
    return false;
  }
}

/**
 * Obtiene los reportes directamente desde la base de datos de Supabase.
 */
export async function fetchReportsFromSupabase(): Promise<ComprehensiveMonitoringReport[] | null> {
  if (!isSupabaseConfigured) return null;

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/monitoring_reports?select=*&order=created_at.desc`, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    });

    if (!response.ok) return null;

    const data = await response.json();
    return data.map((item: any) => ({
      id: item.id,
      date: item.date,
      startTime: item.start_time,
      endTime: item.end_time,
      beachName: item.beach_name,
      isNewUnregisteredBeach: item.is_new_unregistered_beach,
      customBeachName: item.custom_beach_name,
      latitude: item.latitude,
      longitude: item.longitude,
      sectorName: item.sector_name,
      observerName: item.observer_name,
      community: item.community,
      beachMaterialType: item.beach_material_type,
      approxLengthKm: item.approx_length_km,
      approxWidthMeters: item.approx_width_meters,
      tideDistanceMeters: item.tide_distance_meters,
      elevationGpsMeters: item.elevation_gps_meters,
      slopeType: item.slope_type,
      erosionEvidence: item.erosion_evidence || [],
      sedimentationObservation: item.sedimentation_observation,
      seaCurrentsInfo: item.sea_currents_info,
      waveHeightMeters: item.wave_height_meters,
      tideState: item.tide_state,
      temperatureCelsius: item.temperature_celsius,
      weatherCondition: item.weather_condition,
      windDirectionAndSpeed: item.wind_direction_and_speed,
      seaState: item.sea_state,
      vegetationType: item.vegetation_type || [],
      observedFauna: item.observed_fauna,
      sargassumPresenceLevel: item.sargassum_presence_level,
      riverMouthName: item.river_mouth_name,
      waterVisualQuality: item.water_visual_quality,
      wasteTypesFound: item.waste_types_found || [],
      wasteQuantityLevel: item.waste_quantity_level,
      infrastructureObserved: item.infrastructure_observed,
      economicActivitiesObserved: item.economic_activities_observed,
      traditionalKnowledgeShared: item.traditional_knowledge_shared,
      identifiedThreats: item.identified_threats || [],
      observationsNotes: item.observations_notes,
      eventType: item.event_type || "Sin Avistamiento",
      explicitActiveNestsCount: item.explicit_active_nests_count ?? 0,
      explicitReleasedHatchlingsCount: item.explicit_released_hatchlings_count ?? 0,
    }));
  } catch (error) {
    console.error("Error al consultar reportes de Supabase:", error);
    return null;
  }
}

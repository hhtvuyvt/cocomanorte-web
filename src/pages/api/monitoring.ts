import type { APIRoute } from "astro";
import type { ComprehensiveMonitoringReport } from "../../data/beachMonitoring";
import { insertReportToSupabase, updateBeachStatusInSupabase } from "../../lib/supabase";
import { analyzeBeachStatusFromReport } from "../../utils/beachStatusAnalyzer";
import { getStoredBeaches } from "../../utils/monitoringStorage";

export const POST: APIRoute = async ({ request }) => {
  try {
    const reportData: Partial<ComprehensiveMonitoringReport> = await request.json();

    // 1. Validar campos mínimos obligatorios
    if (!reportData.beachName || !reportData.observerName || !reportData.community || !reportData.date) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Faltan campos obligatorios: playa, observador, comunidad y fecha son requeridos.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const reportId = `rep-api-${Date.now()}`;
    const targetBeachName = reportData.isNewUnregisteredBeach && reportData.customBeachName
      ? reportData.customBeachName.trim()
      : reportData.beachName;

    const fullReport: ComprehensiveMonitoringReport = {
      id: reportId,
      date: reportData.date,
      startTime: reportData.startTime || "00:00",
      endTime: reportData.endTime,
      beachName: targetBeachName,
      isNewUnregisteredBeach: reportData.isNewUnregisteredBeach,
      customBeachName: reportData.customBeachName,
      latitude: reportData.latitude,
      longitude: reportData.longitude,
      sectorName: reportData.sectorName,
      observerName: reportData.observerName,
      community: reportData.community,
      beachMaterialType: reportData.beachMaterialType || "Arena fina",
      approxLengthKm: reportData.approxLengthKm,
      approxWidthMeters: reportData.approxWidthMeters,
      tideDistanceMeters: reportData.tideDistanceMeters,
      elevationGpsMeters: reportData.elevationGpsMeters,
      slopeType: reportData.slopeType,
      erosionEvidence: reportData.erosionEvidence || [],
      sedimentationObservation: reportData.sedimentationObservation,
      seaCurrentsInfo: reportData.seaCurrentsInfo,
      waveHeightMeters: reportData.waveHeightMeters,
      tideState: reportData.tideState || "Media",
      temperatureCelsius: reportData.temperatureCelsius,
      weatherCondition: reportData.weatherCondition,
      windDirectionAndSpeed: reportData.windDirectionAndSpeed,
      seaState: reportData.seaState,
      vegetationType: reportData.vegetationType || [],
      observedFauna: reportData.observedFauna || "Sin avistamientos especiales",
      sargassumPresenceLevel: reportData.sargassumPresenceLevel,
      riverMouthName: reportData.riverMouthName,
      waterVisualQuality: reportData.waterVisualQuality,
      wasteTypesFound: reportData.wasteTypesFound || [],
      wasteQuantityLevel: reportData.wasteQuantityLevel || "Bajo",
      infrastructureObserved: reportData.infrastructureObserved,
      economicActivitiesObserved: reportData.economicActivitiesObserved,
      traditionalKnowledgeShared: reportData.traditionalKnowledgeShared,
      identifiedThreats: reportData.identifiedThreats || [],
      observationsNotes: reportData.observationsNotes,
    };

    // 2. Analizar impacto del reporte sobre el estado de la playa
    const currentBeaches = getStoredBeaches();
    let currentBeach = currentBeaches.find((b) => b.name.toLowerCase() === targetBeachName.toLowerCase());

    const analysis = analyzeBeachStatusFromReport(currentBeach, fullReport);

    const updatedBeach = {
      id: currentBeach ? currentBeach.id : `beach-${Date.now()}`,
      name: targetBeachName,
      zone: currentBeach ? currentBeach.zone : `Sector ${reportData.community}`,
      lengthKm: currentBeach ? currentBeach.lengthKm : (reportData.approxLengthKm || 3.0),
      status: analysis.updatedStatus,
      activeNests: currentBeach ? currentBeach.activeNests + analysis.activeNestsDelta : Math.max(0, analysis.activeNestsDelta),
      releasedHatchlings: currentBeach ? currentBeach.releasedHatchlings + analysis.releasedHatchlingsDelta : Math.max(0, analysis.releasedHatchlingsDelta),
      lastPatrol: analysis.lastPatrolText,
      threatLevel: analysis.updatedThreatLevel,
      patrolLeader: reportData.observerName,
    };

    // 3. Insertar reporte y actualizar playa en Supabase
    const dbReportSuccess = await insertReportToSupabase(fullReport);
    const dbBeachSuccess = await updateBeachStatusInSupabase(updatedBeach);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Informe procesado correctamente por el servidor de monitoreo de COCOMANORTE.",
        syncedWithSupabase: dbReportSuccess && dbBeachSuccess,
        report: fullReport,
        updatedBeach,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error interno al procesar el informe de monitoreo.",
        details: err?.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

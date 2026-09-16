import type { Beach, MonitoringLog, ComprehensiveMonitoringReport } from "../data/beachMonitoring";
import { beachesData, monitoringLogsData } from "../data/beachMonitoring";
import { insertReportToSupabase, fetchReportsFromSupabase } from "../lib/supabase";
import { analyzeBeachStatusFromReport } from "./beachStatusAnalyzer";

const STORAGE_KEYS = {
  BEACHES: "cocomanorte_beaches_v1",
  LOGS: "cocomanorte_logs_v1",
  REPORTS: "cocomanorte_reports_v1",
};

// Reportes de ejemplo predeterminados para consultas históricas iniciales
const initialReports: ComprehensiveMonitoringReport[] = [
  {
    id: "rep-001",
    date: "2025-03-29",
    startTime: "02:30",
    endTime: "05:15",
    beachName: "Playa La Playona",
    observerName: "Carlos Rivas",
    community: "La Playona",
    beachMaterialType: "Arena fina",
    approxLengthKm: 12.5,
    approxWidthMeters: 45,
    tideState: "Baja",
    erosionEvidence: ["Pérdida de arena"],
    observedFauna: "Nido de Tortuga Caná (Dermochelys coriacea) localizado con 94 huevos.",
    wasteQuantityLevel: "Bajo",
    wasteTypesFound: ["Plásticos y botellas"],
    identifiedThreats: ["Turismo no controlado"],
    observationsNotes: "Santuario en buen estado. Se instaló estaca protectora #LP-142.",
    eventType: "Anidación Exitosa",
    explicitActiveNestsCount: 1,
    explicitReleasedHatchlingsCount: 0,
  },
  {
    id: "rep-002",
    date: "2025-03-28",
    startTime: "21:00",
    endTime: "23:45",
    beachName: "Playa Acandí Seco",
    observerName: "María Córdoba",
    community: "Acandí Seco",
    beachMaterialType: "Arena gruesa",
    approxLengthKm: 8.2,
    approxWidthMeters: 30,
    tideState: "Alta",
    erosionEvidence: ["Exposición de raíces", "Caída de árboles"],
    observedFauna: "Eclosión de 82 neonatos de Tortuga Caná. Liberación exitosa hacia el mar.",
    wasteQuantityLevel: "Medio",
    wasteTypesFound: ["Redes de pesca", "Plásticos y botellas"],
    identifiedThreats: ["Erosión costera severa"],
    observationsNotes: "Se recomienda limpieza comunitaria de redes en la zona norte.",
    eventType: "Liberación de Neonatos",
    explicitActiveNestsCount: 0,
    explicitReleasedHatchlingsCount: 82,
  },
];

export function getStoredBeaches(): Beach[] {
  if (typeof window === "undefined") return beachesData;
  const stored = localStorage.getItem(STORAGE_KEYS.BEACHES);
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.BEACHES, JSON.stringify(beachesData));
    return beachesData;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return beachesData;
  }
}

export function getStoredLogs(): MonitoringLog[] {
  if (typeof window === "undefined") return monitoringLogsData;
  const stored = localStorage.getItem(STORAGE_KEYS.LOGS);
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(monitoringLogsData));
    return monitoringLogsData;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return monitoringLogsData;
  }
}

export function getStoredReports(): ComprehensiveMonitoringReport[] {
  if (typeof window === "undefined") return initialReports;
  const stored = localStorage.getItem(STORAGE_KEYS.REPORTS);
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.REPORTS, JSON.stringify(initialReports));
    return initialReports;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return initialReports;
  }
}

export async function getLiveReports(): Promise<ComprehensiveMonitoringReport[]> {
  const remoteReports = await fetchReportsFromSupabase();
  if (remoteReports && remoteReports.length > 0) {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.REPORTS, JSON.stringify(remoteReports));
    }
    return remoteReports;
  }
  return getStoredReports();
}

export interface SaveReportResult {
  report: ComprehensiveMonitoringReport;
  beach: Beach;
  log?: MonitoringLog;
  insertSuccess: boolean;
  errorDetails?: string;
}

export async function saveMonitoringReport(
  reportData: Partial<ComprehensiveMonitoringReport>
): Promise<SaveReportResult> {
  const reports = getStoredReports();
  const beaches = getStoredBeaches();
  const logs = getStoredLogs();

  const reportId = `rep-${Date.now()}`;
  let targetBeachName = reportData.beachName || "Playa No Especificada";

  if (reportData.isNewUnregisteredBeach && reportData.customBeachName) {
    targetBeachName = reportData.customBeachName.trim();
  }

  const newReport: ComprehensiveMonitoringReport = {
    id: reportId,
    date: reportData.date || new Date().toISOString().split("T")[0],
    startTime: reportData.startTime || "00:00",
    endTime: reportData.endTime,
    beachName: targetBeachName,
    isNewUnregisteredBeach: reportData.isNewUnregisteredBeach,
    customBeachName: reportData.customBeachName,
    latitude: reportData.latitude,
    longitude: reportData.longitude,
    sectorName: reportData.sectorName,
    observerName: reportData.observerName || "Monitor Comunitario",
    community: reportData.community || "Consejo Local",
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
    eventType: reportData.eventType || "Sin Avistamiento",
    explicitActiveNestsCount: reportData.explicitActiveNestsCount ?? 0,
    explicitReleasedHatchlingsCount: reportData.explicitReleasedHatchlingsCount ?? 0,
  };

  // Tarea 3 & Criterio de Aceptación: Intentar insertar primeramente en Supabase
  const dbResult = await insertReportToSupabase(newReport);

  if (!dbResult.success) {
    // Si la inserción a la BD falla, NO guardar en estado ni fingir éxito
    let beachFail = beaches.find((b) => b.name.toLowerCase() === targetBeachName.toLowerCase()) || {
      id: "beach-fail",
      name: targetBeachName,
      zone: "Sector Local",
      status: "Activa - Temporada de Anidación" as const,
      activeNests: 0,
      releasedHatchlings: 0,
      threatLevel: "Bajo" as const,
    };
    return {
      report: newReport,
      beach: beachFail,
      insertSuccess: false,
      errorDetails: dbResult.error,
    };
  }

  // Si el insert en Supabase fue exitoso, persistir localmente para reflejar UI
  reports.unshift(newReport);
  localStorage.setItem(STORAGE_KEYS.REPORTS, JSON.stringify(reports));

  let beach = beaches.find(
    (b) => b.name.toLowerCase() === targetBeachName.toLowerCase()
  );

  const analysis = analyzeBeachStatusFromReport(beach, newReport);

  if (!beach) {
    beach = {
      id: `beach-${Date.now()}`,
      name: targetBeachName,
      zone: reportData.community ? `Sector ${reportData.community}` : "Sector Reciente",
      lengthKm: reportData.approxLengthKm || 3.0,
      status: analysis.updatedStatus,
      activeNests: Math.max(0, analysis.activeNestsDelta),
      releasedHatchlings: Math.max(0, analysis.releasedHatchlingsDelta),
      lastPatrol: analysis.lastPatrolText,
      threatLevel: analysis.updatedThreatLevel,
      patrolLeader: reportData.observerName || "Guardia Comunitaria",
      gpsCoordinates:
        reportData.latitude && reportData.longitude
          ? { latitude: reportData.latitude, longitude: reportData.longitude }
          : undefined,
    };
    beaches.push(beach);
  } else {
    beach.status = analysis.updatedStatus;
    beach.threatLevel = analysis.updatedThreatLevel;
    beach.activeNests += analysis.activeNestsDelta;
    beach.releasedHatchlings += analysis.releasedHatchlingsDelta;
    beach.lastPatrol = analysis.lastPatrolText;
    if (reportData.observerName) {
      beach.patrolLeader = reportData.observerName;
    }
  }

  localStorage.setItem(STORAGE_KEYS.BEACHES, JSON.stringify(beaches));

  // Tarea 4: Generar log para la bitácora usando estrictamente eventType (sin parsing de texto libre)
  let newLog: MonitoringLog | undefined;
  if (newReport.eventType && newReport.eventType !== "Sin Avistamiento") {
    newLog = {
      id: `log-${Date.now()}`,
      date: newReport.date,
      time: newReport.startTime,
      beachName: targetBeachName,
      turtleSpecies: "Tortuga Caná (Dermochelys coriacea)",
      eventType: newReport.eventType,
      patrollerName: newReport.observerName,
      notes: newReport.observedFauna,
    };

    logs.unshift(newLog);
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
  }

  return {
    report: newReport,
    beach,
    log: newLog,
    insertSuccess: true,
  };
}

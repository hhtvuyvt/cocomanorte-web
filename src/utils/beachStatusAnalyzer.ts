import type { Beach, ComprehensiveMonitoringReport } from "../data/beachMonitoring";

export interface BeachAnalysisResult {
  updatedStatus: Beach["status"];
  updatedThreatLevel: Beach["threatLevel"];
  activeNestsDelta: number;
  releasedHatchlingsDelta: number;
  lastPatrolText: string;
}

/**
 * Analiza un informe de monitoreo de playa recibido y calcula el nuevo estado,
 * nivel de amenaza, variación de nidos/neonatos y fecha de patrullaje utilizando
 * campos numéricos explícitos y eventos estructurados (sin fallbacks heurísticos ni
 * conteos adivinados).
 */
export function analyzeBeachStatusFromReport(
  currentBeach: Beach | undefined,
  report: Partial<ComprehensiveMonitoringReport>
): BeachAnalysisResult {
  const threats = report.identifiedThreats || [];
  const erosion = report.erosionEvidence || [];
  const wasteLevel = report.wasteQuantityLevel || "Bajo";

  // 1. Calcular Nivel de Amenaza
  let updatedThreatLevel: Beach["threatLevel"] = "Bajo";
  const threatPoints = threats.length + erosion.length + (wasteLevel === "Alto" ? 3 : wasteLevel === "Medio" ? 1 : 0);

  if (threatPoints >= 5 || report.seaState === "Muy agitado" || report.weatherCondition === "Tormenta") {
    updatedThreatLevel = "Alto";
  } else if (threatPoints >= 2 || wasteLevel === "Medio") {
    updatedThreatLevel = "Medio";
  }

  // 2. Determinar Estado de la Playa
  let updatedStatus: Beach["status"] = "Activa - Temporada de Anidación";

  if (threats.includes("Inundaciones costeras") || report.seaState === "Muy agitado" || report.weatherCondition === "Tormenta") {
    updatedStatus = "Alerta - Marejada";
  } else if (updatedThreatLevel === "Alto" && (threats.includes("Extracción ilegal de arena") || threats.includes("Tala de manglar / vegetación"))) {
    updatedStatus = "Restringida";
  } else if (report.eventType === "Sin Avistamiento") {
    updatedStatus = "Baja Actividad";
  }

  // 3. Calcular variación de Nidos Activos y Neonatos derivándolos estrictamente de los números explícitos
  const activeNestsDelta = Math.max(0, Number(report.explicitActiveNestsCount) || 0);
  const releasedHatchlingsDelta = Math.max(0, Number(report.explicitReleasedHatchlingsCount) || 0);

  // 4. Formatear Fecha / Hora del Último Patrullaje
  const reportTime = report.startTime || "Reciente";
  const reportDate = report.date ? `Hoy (${report.date})` : "Hoy";
  const lastPatrolText = `${reportDate}, ${reportTime}`;

  return {
    updatedStatus,
    updatedThreatLevel,
    activeNestsDelta,
    releasedHatchlingsDelta,
    lastPatrolText,
  };
}

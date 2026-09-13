import type { Beach, ComprehensiveMonitoringReport } from "../data/beachMonitoring";

export interface BeachAnalysisResult {
  updatedStatus: Beach["status"];
  updatedThreatLevel: Beach["threatLevel"];
  activeNestsDelta: number;
  releasedHatchlingsDelta: number;
  lastPatrolText: string;
}

/**
 * Analiza un informe de monitoreo de playa recibido y calcula automáticamente el nuevo estado,
 * nivel de amenaza, variación de nidos/neonatos y fecha de patrullaje para mantener el estatus
 * en tiempo semi-real.
 */
export function analyzeBeachStatusFromReport(
  currentBeach: Beach | undefined,
  report: Partial<ComprehensiveMonitoringReport>
): BeachAnalysisResult {
  const threats = report.identifiedThreats || [];
  const erosion = report.erosionEvidence || [];
  const wasteLevel = report.wasteQuantityLevel || "Bajo";
  const faunaText = (report.observedFauna || "").toLowerCase();

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
  } else if (faunaText.includes("sin actividad") || faunaText.includes("no se observaron") || faunaText.includes("ninguna")) {
    updatedStatus = "Baja Actividad";
  }

  // 3. Calcular variación de Nidos Activos y Neonatos
  let activeNestsDelta = 0;
  let releasedHatchlingsDelta = 0;

  if (faunaText.includes("nido") || faunaText.includes("anida") || faunaText.includes("huevo")) {
    activeNestsDelta = 1;
  }

  if (faunaText.includes("eclos") || faunaText.includes("liber") || faunaText.includes("neonato")) {
    releasedHatchlingsDelta = 50;
  }

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

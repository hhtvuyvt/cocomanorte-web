import { describe, it, expect } from "vitest";
import { analyzeBeachStatusFromReport } from "../utils/beachStatusAnalyzer";
import type { Beach } from "../data/beachMonitoring";

describe("analyzeBeachStatusFromReport", () => {
  const sampleBeach: Beach = {
    id: "beach-01",
    name: "Playa La Playona",
    zone: "Sector Santuario Sur",
    lengthKm: 12.5,
    status: "Activa - Temporada de Anidación",
    activeNests: 10,
    releasedHatchlings: 500,
    lastPatrol: "Ayer, 10:00 PM",
    threatLevel: "Bajo",
    patrolLeader: "Comité de Guardias",
  };

  it("reporte sin avistamiento no altera contadores", () => {
    const report = {
      date: "2025-04-01",
      startTime: "23:00",
      eventType: "Sin Avistamiento" as const,
      observedFauna: "No se observaron nidos",
      explicitActiveNestsCount: 0,
      explicitReleasedHatchlingsCount: 0,
      wasteQuantityLevel: "Bajo" as const,
      identifiedThreats: [],
      erosionEvidence: [],
    };

    const result = analyzeBeachStatusFromReport(sampleBeach, report);

    expect(result.activeNestsDelta).toBe(0);
    expect(result.releasedHatchlingsDelta).toBe(0);
    expect(result.updatedStatus).toBe("Baja Actividad");
  });

  it("usa la cantidad explícita aunque el evento sea liberación", () => {
    const report = {
      date: "2025-04-03",
      startTime: "04:15",
      eventType: "Liberación de Neonatos" as const,
      explicitActiveNestsCount: 0,
      explicitReleasedHatchlingsCount: 85,
      observedFauna: "Eclosión de nido y liberación de 85 neonatos.",
    };

    const result = analyzeBeachStatusFromReport(sampleBeach, report);

    expect(result.activeNestsDelta).toBe(0);
    expect(result.releasedHatchlingsDelta).toBe(85);
  });

  it("sin campos explícitos (reporte viejo/huérfano) aporta cero, nunca heurística", () => {
    const report = {
      date: "2025-04-01",
      startTime: "23:00",
      eventType: "Anidación Exitosa" as const,
    };

    const result = analyzeBeachStatusFromReport(sampleBeach, report);

    expect(result.activeNestsDelta).toBe(0);
    expect(result.releasedHatchlingsDelta).toBe(0);
  });

  it("sets status to 'Alerta - Marejada' when storm or coastal flooding threats are present", () => {
    const report = {
      date: "2025-04-02",
      startTime: "02:00",
      seaState: "Muy agitado" as const,
      weatherCondition: "Tormenta" as const,
      identifiedThreats: ["Inundaciones costeras"],
    };

    const result = analyzeBeachStatusFromReport(sampleBeach, report);

    expect(result.updatedStatus).toBe("Alerta - Marejada");
    expect(result.updatedThreatLevel).toBe("Alto");
  });
});

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

  it("does NOT increment active nests or hatchlings when text says 'no se observaron nidos' and eventType is 'Sin Avistamiento'", () => {
    const report = {
      date: "2025-04-01",
      startTime: "23:00",
      eventType: "Sin Avistamiento" as const,
      observedFauna: "no se observaron nidos ni huellas de tortugas marinas en el patrullaje.",
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

  it("increments active nests when eventType is 'Anidación Exitosa' or explicitActiveNestsCount is provided", () => {
    const report = {
      date: "2025-04-01",
      startTime: "23:00",
      eventType: "Anidación Exitosa" as const,
      explicitActiveNestsCount: 2,
      observedFauna: "Se ubicaron y marcaron 2 nidos frescos de Caná.",
    };

    const result = analyzeBeachStatusFromReport(sampleBeach, report);

    expect(result.activeNestsDelta).toBe(2);
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

  it("uses explicitReleasedHatchlingsCount accurately", () => {
    const report = {
      date: "2025-04-03",
      startTime: "04:15",
      eventType: "Liberación de Neonatos" as const,
      explicitReleasedHatchlingsCount: 85,
      observedFauna: "Eclosión de nido y liberación de 85 neonatos.",
    };

    const result = analyzeBeachStatusFromReport(sampleBeach, report);

    expect(result.releasedHatchlingsDelta).toBe(85);
  });
});

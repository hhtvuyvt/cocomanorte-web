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

  it("calculates favorable conditions and increments active nests when a nest is reported", () => {
    const report = {
      date: "2025-04-01",
      startTime: "23:00",
      observedFauna: "Se observó una hembra de Tortuga Caná anidando. Nido marcado.",
      wasteQuantityLevel: "Bajo" as const,
      identifiedThreats: [],
      erosionEvidence: [],
    };

    const result = analyzeBeachStatusFromReport(sampleBeach, report);

    expect(result.updatedThreatLevel).toBe("Bajo");
    expect(result.updatedStatus).toBe("Activa - Temporada de Anidación");
    expect(result.activeNestsDelta).toBe(1);
    expect(result.releasedHatchlingsDelta).toBe(0);
    expect(result.lastPatrolText).toBe("Hoy (2025-04-01), 23:00");
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

  it("increments released hatchlings when hatching or release is reported", () => {
    const report = {
      date: "2025-04-03",
      startTime: "04:15",
      observedFauna: "Eclosión de nido y liberación exitosa de neonatos hacia el mar.",
    };

    const result = analyzeBeachStatusFromReport(sampleBeach, report);

    expect(result.releasedHatchlingsDelta).toBe(50);
  });
});

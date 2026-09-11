export interface Beach {
  id: string;
  name: string;
  zone: string;
  lengthKm: number;
  status: "Activa - Temporada de Anidación" | "Alerta - Marejada" | "Baja Actividad" | "Restringida";
  activeNests: number;
  releasedHatchlings: number;
  lastPatrol: string;
  threatLevel: "Bajo" | "Medio" | "Alto";
  patrolLeader: string;
}

export interface TideForecast {
  time: string;
  type: "Marea Alta (Pleamar)" | "Marea Baja (Bajamar)";
  heightMeters: number;
}

export interface BeachForecast {
  beachId: string;
  beachName: string;
  date: string;
  feasibilityStatus: "Condiciones Favorables" | "Precaución - Marejada / Oleaje" | "No Recomendado - Alerta de Mal Tiempo";
  feasibilityReason: string;
  temperatureCelsius: number;
  rainProbabilityPercent: number;
  windSpeedKmH: number;
  windDirection: string;
  waveHeightMeters: number;
  tides: TideForecast[];
  recommendationForPatrollers: string;
}

export interface ComprehensiveMonitoringReport {
  id: string;
  // Metadata Básica (OBLIGATORIA)
  date: string;
  startTime: string;
  endTime?: string;
  beachName: string;
  sectorName?: string;
  observerName: string;
  community: string;

  // 1. Caracterización física
  beachMaterialType: "Arena fina" | "Arena gruesa" | "Piedra" | "Grava" | "Coral" | "Roca" | "Mezcla de materiales";
  approxLengthKm?: number;
  approxWidthMeters?: number;
  tideDistanceMeters?: number;
  elevationGpsMeters?: number;
  slopeType?: "Muy plana" | "Plana" | "Moderada" | "Pronunciada";

  // 2. Dinámica costera
  erosionEvidence?: string[];
  sedimentationObservation?: string;
  seaCurrentsInfo?: string;
  waveHeightMeters?: number;
  tideState: "Alta" | "Media" | "Baja";

  // 3. Condiciones climáticas
  temperatureCelsius?: number;
  weatherCondition?: "Soleado" | "Nublado" | "Lluvia ligera" | "Lluvia fuerte" | "Tormenta";
  windDirectionAndSpeed?: string;
  seaState?: "Calmado" | "Rizado" | "Marejada" | "Muy agitado";

  // 4. Ecosistemas y biodiversidad
  vegetationType?: string[];
  observedFauna?: string;
  sargassumPresenceLevel?: "Bajo" | "Medio" | "Alto";

  // 5. Recursos hídricos
  riverMouthName?: string;
  waterVisualQuality?: string;

  // 6. Contaminación y Residuos
  wasteTypesFound?: string[];
  wasteQuantityLevel?: "Bajo" | "Medio" | "Alto";

  // 7. Infraestructura
  infrastructureObserved?: string;

  // 8. Caracterización social y cultural
  economicActivitiesObserved?: string;
  traditionalKnowledgeShared?: string;

  // 9. Amenazas principales
  identifiedThreats?: string[];
  observationsNotes?: string;
}

export interface MonitoringLog {
  id: string;
  date: string;
  time: string;
  beachName: string;
  turtleSpecies: "Tortuga Caná (Dermochelys coriacea)" | "Tortuga Carey (Eretmochelys imbricata)" | "Tortuga Cahuama (Caretta caretta)" | "Tortuga Verde (Chelonia mydas)";
  eventType: "Anidación Exitosa" | "Avistamiento de Huella" | "Liberación de Neonatos" | "Eclosión de Nido" | "Intento Fallido";
  eggCount?: number;
  hatchlingCount?: number;
  patrollerName: string;
  notes: string;
}

export const beachesData: Beach[] = [
  {
    id: "beach-01",
    name: "Playa La Playona",
    zone: "Sector Santuario Sur",
    lengthKm: 12.5,
    status: "Activa - Temporada de Anidación",
    activeNests: 142,
    releasedHatchlings: 3850,
    lastPatrol: "Hoy, 04:30 AM",
    threatLevel: "Bajo",
    patrolLeader: "Comité de Guardias de La Playona",
  },
  {
    id: "beach-02",
    name: "Playa Acandí Seco",
    zone: "Sector Norte - Costero",
    lengthKm: 8.2,
    status: "Activa - Temporada de Anidación",
    activeNests: 89,
    releasedHatchlings: 2100,
    lastPatrol: "Ayer, 11:15 PM",
    threatLevel: "Medio",
    patrolLeader: "Comisión Ambiental Acandí",
  },
  {
    id: "beach-03",
    name: "Playa San Francisco",
    zone: "Sector Centro - Estuario",
    lengthKm: 6.0,
    status: "Activa - Temporada de Anidación",
    activeNests: 64,
    releasedHatchlings: 1450,
    lastPatrol: "Hoy, 02:00 AM",
    threatLevel: "Bajo",
    patrolLeader: "Guardia Comunitaria San Francisco",
  },
];

export const beachForecastsData: BeachForecast[] = [
  {
    beachId: "beach-01",
    beachName: "Playa La Playona",
    date: "Hoy (Proyección Jornada Nocturna)",
    feasibilityStatus: "Condiciones Favorables",
    feasibilityReason: "Ventana de marea baja en horario de patrullaje nocturno con mar moderado.",
    temperatureCelsius: 27,
    rainProbabilityPercent: 20,
    windSpeedKmH: 12,
    windDirection: "Norte - Noreste",
    waveHeightMeters: 0.9,
    tides: [
      { time: "05:12 AM", type: "Marea Baja (Bajamar)", heightMeters: 0.3 },
      { time: "11:45 AM", type: "Marea Alta (Pleamar)", heightMeters: 1.8 },
      { time: "05:50 PM", type: "Marea Baja (Bajamar)", heightMeters: 0.2 },
      { time: "11:58 PM", type: "Marea Alta (Pleamar)", heightMeters: 1.9 },
    ],
    recommendationForPatrollers:
      "Apta para recorrido terrestre a pie entre 07:00 PM y 03:00 AM. Utilizar luz roja y llevar hidratación.",
  },
  {
    beachId: "beach-02",
    beachName: "Playa Acandí Seco",
    date: "Hoy (Proyección Jornada Nocturna)",
    feasibilityStatus: "Precaución - Marejada / Oleaje",
    feasibilityReason: "Aumento progresivo del oleaje en sector norte hacia la medianoche.",
    temperatureCelsius: 26,
    rainProbabilityPercent: 45,
    windSpeedKmH: 22,
    windDirection: "Noreste",
    waveHeightMeters: 1.6,
    tides: [
      { time: "05:30 AM", type: "Marea Baja (Bajamar)", heightMeters: 0.4 },
      { time: "12:05 PM", type: "Marea Alta (Pleamar)", heightMeters: 1.9 },
      { time: "06:15 PM", type: "Marea Baja (Bajamar)", heightMeters: 0.3 },
    ],
    recommendationForPatrollers:
      "Realizar el recorrido preferiblemente en el primer turno (06:00 PM a 10:00 PM) antes del pico de pleamar nocturna.",
  },
  {
    beachId: "beach-03",
    beachName: "Playa San Francisco",
    date: "Hoy (Proyección Jornada Nocturna)",
    feasibilityStatus: "Condiciones Favorables",
    feasibilityReason: "Estuario con corriente moderada y sin alertas meteorológicas.",
    temperatureCelsius: 28,
    rainProbabilityPercent: 15,
    windSpeedKmH: 10,
    windDirection: "Este",
    waveHeightMeters: 0.8,
    tides: [
      { time: "05:00 AM", type: "Marea Baja (Bajamar)", heightMeters: 0.3 },
      { time: "11:20 AM", type: "Marea Alta (Pleamar)", heightMeters: 1.7 },
      { time: "05:30 PM", type: "Marea Baja (Bajamar)", heightMeters: 0.2 },
    ],
    recommendationForPatrollers:
      "Condiciones óptimas tanto para patrullaje peatonal como para acceso en embarcación tradicional potrillo.",
  },
];

export const monitoringLogsData: MonitoringLog[] = [
  {
    id: "log-101",
    date: "2025-03-29",
    time: "03:45 AM",
    beachName: "Playa La Playona",
    turtleSpecies: "Tortuga Caná (Dermochelys coriacea)",
    eventType: "Anidación Exitosa",
    eggCount: 94,
    patrollerName: "Carlos Rivas",
    notes: "Hembra adulta de 1.65m de caparazón. Nido protegido y marcado con estaca #LP-142.",
  },
  {
    id: "log-102",
    date: "2025-03-28",
    time: "10:20 PM",
    beachName: "Playa Acandí Seco",
    turtleSpecies: "Tortuga Caná (Dermochelys coriacea)",
    eventType: "Liberación de Neonatos",
    hatchlingCount: 82,
    patrollerName: "María Córdoba",
    notes: "Eclosión natural del nido #AS-088. Neonatos guiados de forma segura hacia el mar.",
  },
  {
    id: "log-103",
    date: "2025-03-28",
    time: "01:10 AM",
    beachName: "Playa San Francisco",
    turtleSpecies: "Tortuga Carey (Eretmochelys imbricata)",
    eventType: "Avistamiento de Huella",
    patrollerName: "José Moreno",
    notes: "Rastro fresco hacia la duna alta. Se confirmó la presencia de puesta de huevos.",
  },
];

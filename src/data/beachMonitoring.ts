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

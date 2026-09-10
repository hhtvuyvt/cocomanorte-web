export interface Community {
  id: string;
  name: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Ecosystem {
  id: string;
  name: string;
  type: string;
  description: string;
  keySpecies: string[];
  conservationStatus: string;
}

export interface ConservationProject {
  title: string;
  focus: string;
  description: string;
  impact: string;
}

export const territoryOverview = {
  title: "Territorio Colectivo COCOMANORTE",
  description:
    "El territorio colectivo de COCOMANORTE abarca zonas costeras, marinas, manglares y bosques secos tropicales en el norte del Chocó biogeográfico. Es un espacio de vida, autonomía y conservación ancestral.",
  totalArea: "Titulación Colectiva de Comunidades Afrodescendientes",
  region: "Norte del Pacífico y Caribe Chocoano",
};

export const communitiesData: Community[] = [
  {
    id: "com-01",
    name: "Comunidad de Acandí Seco / Zonas Costeras",
    location: "Zona Costera y Playas de Anidación",
    description:
      "Comunidad pilar en el monitoreo y protección de las tortugas marinas Caná y Carey durante la temporada de anidación.",
    highlights: ["Conservación marina", "Pesca artesanal sostenible", "Agroecología local"],
  },
  {
    id: "com-02",
    name: "Comunidad de Playona y San Francisco",
    location: "Santuario de Fauna y Playas Ancestrales",
    description:
      "Reconocida por la conservación comunitaria de manglares, estuarios y la protección de fauna silvestre costera.",
    highlights: ["Protección de manglares", "Santuario de tortuga Caná", "Turismo ecológico"],
  },
  {
    id: "com-03",
    name: "Comunidades de la Selva y Cuencas Altas",
    location: "Serranía del Darién y Cuencas Hidrográficas",
    description:
      "Guardianes de los nacimientos de agua, bosques húmedos y la biodiversidad de la Serranía del Darién.",
    highlights: ["Protección de cuencas", "Monitoreo de fauna silvestre", "Saberes medicinales"],
  },
];

export const ecosystemsData: Ecosystem[] = [
  {
    id: "eco-01",
    name: "Playas de Anidación de Tortugas Marinas",
    type: "Ecosistema Marino-Costero",
    description:
      "Playas vírgenes de vital importancia global para el desove de la Tortuga Caná (Dermochelys coriacea), la tortuga marina más grande del mundo.",
    keySpecies: ["Tortuga Caná", "Tortuga Carey", "Cangrejo Azul"],
    conservationStatus: "Zona de Manejo Especial Comunitario",
  },
  {
    id: "eco-02",
    name: "Bosque de Manglar y Estuarios",
    type: "Humedal Costero",
    description:
      "Barrera natural contra la erosión costera, sala de cuna para especies marinas y captura intensiva de carbono azul.",
    keySpecies: ["Manglar Rojo", "Manglar Negro", "Peces de estuario", "Garzas real y morena"],
    conservationStatus: "Protección Comportamental y Ancestral",
  },
  {
    id: "eco-03",
    name: "Serranía del Darién y Bosque Tropical",
    type: "Bosque Húmedo Neotropical",
    description:
      "Refugio de alta biodiversidad con especies endémicas, corredores biológicos para felinos y aves migratorias.",
    keySpecies: ["Jaguar", "Ocelote", "Pava del Darién", "Tucán chocoano"],
    conservationStatus: "Área de Reserva Comunitaria",
  },
];

export const conservationProjects: ConservationProject[] = [
  {
    title: "Monitoreo Comunitario de Tortugas Marinas",
    focus: "Protección de Fauna Amenazada",
    description:
      "Patrullajes nocturnos, marcaje, protección de nidadas y liberación de neonatos en playas con apoyo de la guardia comunitaria.",
    impact: "Más de miles de neonatos protegidos anualmente en alianzas locales.",
  },
  {
    title: "Guardianes del Manglar y Carbono Azul",
    focus: "Reforestación y Cuidado de Humedales",
    description:
      "Jornadas de siembra de plántulas de manglar y limpieza de caños estuarinos para asegurar la productividad pesquera.",
    impact: "Recuperación de hectáreas de manglar degradado y protección pesquera.",
  },
  {
    title: "Monitoreo Participativo con CÁMARAS TRAMPA",
    focus: "Biodiversidad de la Serranía",
    description:
      "Uso de tecnología participativa instalada por jóvenes de la comunidad para registrar grandes mamíferos y aves.",
    impact: "Registro científico de mamíferos amenazados en territorio colectivo.",
  },
];

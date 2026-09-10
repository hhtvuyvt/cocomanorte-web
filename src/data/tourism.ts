export interface Experience {
  id: string;
  title: string;
  category: "Ecoturismo" | "Cultura & Saberes" | "Aventura & Naturaleza" | "Soberanía Alimentaria";
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  recommendedSeason?: string;
}

export interface EthicsRule {
  id: string;
  title: string;
  principle: string;
  description: string;
  icon: string;
}

export const tourismOverview = {
  title: "Turismo Comunitario y Sostenible COCOMANORTE",
  description:
    "Descubre nuestro territorio a través de un turismo con propósito, respetuoso con las tradiciones de las comunidades afrodescendientes y comprometido con la conservación de la biodiversidad del Chocó.",
  principles: [
    "Respeto a la autonomía comunitaria",
    "Conservación de especies de fauna amenazadas",
    "Dinamización de la economía local de las familias",
  ],
};

export const experiencesData: Experience[] = [
  {
    id: "exp-01",
    title: "Ruta de Conservación de la Tortuga Caná",
    category: "Ecoturismo",
    duration: "Noche / 3-4 horas",
    location: "Playas de Anidación Colectivas",
    description:
      "Patrullajes nocturnos acompañados por guías comunitarios acreditados para presenciar el desove responsable de la tortuga marina Caná sin alterar su hábitat.",
    highlights: ["Charla de inducción biológica", "Patrullaje nocturno sin luces blancas", "Liberación supervisada de neonatos"],
    recommendedSeason: "Marzo a Julio",
  },
  {
    id: "exp-02",
    title: "Navegación Ancestral por Manglares y Estuarios",
    category: "Aventura & Naturaleza",
    duration: "Medio día",
    location: "Santuario de Manglares y Caños",
    description:
      "Recorrido en potrillo o embarcaciones tradicionales por los túneles de manglar rojo, con avistamiento de aves migratorias y mamíferos acuáticos.",
    highlights: ["Avistamiento de garzas y martín pescador", "Interpretación de carbono azul", "Refrigerio local en la comunidad"],
    recommendedSeason: "Todo el año",
  },
  {
    id: "exp-03",
    title: "Saberes Ancestrales, Gastronomía y Tradición Afro",
    category: "Cultura & Saberes",
    duration: "Día completo",
    location: "Comunidades Nativas de COCOMANORTE",
    description:
      "Intercambio cultural guiado por matronas y sabedores locales. Aprende sobre medicina tradicional, cocina en leña con coco fresco y cantos de labranza.",
    highlights: ["Taller gastronómico con coco y pescado local", "Muestra de plantas medicinales", "Música e historias de memoria histórica"],
    recommendedSeason: "Todo el año",
  },
  {
    id: "exp-04",
    title: "Senderismo Ecológico por la Serranía del Darién",
    category: "Aventura & Naturaleza",
    duration: "5-6 horas",
    location: "Sendero de Montaña y Cascadas",
    description:
      "Caminata guiada a través del bosque húmedo tropical observando flora nativa, aves endémicas y pozos naturales de agua cristalina.",
    highlights: ["Bañada en cascadas vírgenes", "Identificación de árboles centenarios", "Guianza por cazadores reconvertidos en guardabosques"],
    recommendedSeason: "Diciembre a Abril",
  },
];

export const ethicsCodeData: EthicsRule[] = [
  {
    id: "eth-01",
    title: "Fotografía y Privacidad Comunitario",
    principle: "Respeto a la Imagen",
    description: "Pide siempre permiso antes de tomar fotografías a los habitantes, sabedores o niños de la comunidad.",
    icon: "📷",
  },
  {
    id: "eth-02",
    title: "Protección a la Fauna Silvestre",
    principle: "Cero Alteración",
    description: "En las playas de anidación no utilices linternas de luz blanca ni flash. No toques ni manipules los nidos ni las tortugas.",
    icon: "🐢",
  },
  {
    id: "eth-03",
    title: "Manejo de Residuos",
    principle: "Basura Cero en el Territorio",
    description: "Regresa contigo todos los residuos plásticos y no biodegradables que generes durante tu estancia.",
    icon: "♻️",
  },
  {
    id: "eth-04",
    title: "Consumo Local y Justo",
    principle: "Economía Circular Comunitario",
    description: "Apoya a los guías, cocineras tradicionales y artesanos locales pagando precios justos sin regatear.",
    icon: "🌱",
  },
];

export const bookingInfo = {
  notice:
    "Para garantizar un turismo sostenible y no masivo, todas las visitas deben coordinarse con anticipación a través del Comité de Turismo Comunitario de COCOMANORTE.",
  steps: [
    "Selecciona la experiencia o ruta comunitaria de tu interés.",
    "Contacta directamente con el operador o enlace del Consejo Comunitario.",
    "Recibe las recomendaciones previas de viaje, vestimenta e hidratación.",
  ],
};

export interface OfficialDocument {
  id: string;
  title: string;
  category: "Reglamento" | "Normativa" | "Rendición de cuentas" | "Comunicado";
  description: string;
  date: string;
  fileUrl?: string;
  fileSize?: string;
}

export const officialDocuments: OfficialDocument[] = [
  {
    id: "doc-01",
    title: "Reglamento Interno de COCOMANORTE",
    category: "Reglamento",
    description:
      "Documento normativo de convivencia, uso del territorio colectivo, convivencia comunitaria y principios de gobierno propio.",
    date: "2023",
    fileUrl: "#",
    fileSize: "PDF (1.8 MB)",
  },
  {
    id: "doc-02",
    title: "Plan de Manejo Ambiental y Conservación Territorio Colectivo",
    category: "Normativa",
    description:
      "Estrategia de conservación comunitaria, delimitación de zonas de protección de flora y fauna, y protocolo de monitoreo.",
    date: "2024",
    fileUrl: "#",
    fileSize: "PDF (2.4 MB)",
  },
  {
    id: "doc-03",
    title: "Informe de Rendición de Cuentas Institucional",
    category: "Rendición de cuentas",
    description:
      "Informe anual de gestión, ejecución de proyectos comunitarios e inversión social realizada en el territorio.",
    date: "2024",
    fileUrl: "#",
    fileSize: "PDF (3.1 MB)",
  },
  {
    id: "doc-04",
    title: "Estatutos Organizativos COCOMANORTE",
    category: "Reglamento",
    description:
      "Estructura orgánica, deberes y derechos de los miembros de las comunidades integradas al Consejo Comunitario Mayor.",
    date: "2022",
    fileUrl: "#",
    fileSize: "PDF (1.2 MB)",
  },
];

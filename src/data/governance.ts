export interface GovernanceMember {
  role: string;
  name: string;
  community?: string;
  description?: string;
}

export interface GovernanceBody {
  title: string;
  description: string;
  members: GovernanceMember[];
}

export const governanceData: GovernanceBody[] = [
  {
    title: "Representación Legal y Junta Directiva",
    description:
      "Órgano de administración y representación oficial del Consejo Comunitario Mayor COCOMANORTE.",
    members: [
      {
        role: "Representante Legal",
        name: "Líder / Representante Comunitario",
        community: "Territorio Colectivo",
        description: "Encargado de la representación judicial y extrajudicial de la organización.",
      },
      {
        role: "Presidente de la Junta Directiva",
        name: "Consejero Mayor",
        community: "Zona Norte",
        description: "Coordinación general de los procesos organizativos e institucionales.",
      },
      {
        role: "Vicepresidente",
        name: "Consejero Colectivo",
        community: "Zona Costera",
        description: "Apoyo a la gestión directiva y articulación comunitaria.",
      },
      {
        role: "Secretaría General y Actas",
        name: "Líder Comunitario",
        community: "Territorio Colectivo",
        description: "Custodia de archivos, memorias y registro de asambleas.",
      },
      {
        role: "Tesorería y Administración",
        name: "Coordinador Financiero",
        community: "Territorio Colectivo",
        description: "Gestión transparente de recursos comunitarios e inversión social.",
      },
    ],
  },
  {
    title: "Comités de Trabajo Comunitario",
    description:
      "Equipos temáticos encargados de la ejecución de estrategias para el desarrollo del territorio.",
    members: [
      {
        role: "Comité de Territorio y Biodiversidad",
        name: "Comisión Ambiental",
        description: "Vigilancia, cuidado de playas de anidación y gestión de recursos naturales.",
      },
      {
        role: "Comité de Identidad y Saberes Ancestrales",
        name: "Comisión Cultural",
        description: "Preservación de tradiciones, memoria histórica y fortalecimiento étnico.",
      },
      {
        role: "Comité de Turismo Comunitario Sostenible",
        name: "Comisión de Turismo",
        description: "Organización de experiencias turísticas respetuosas y sostenibles.",
      },
    ],
  },
];

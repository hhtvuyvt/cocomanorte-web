# Arquitectura del Proyecto

## Nombre

COCOMANORTE Web

---

## Descripción

Sitio web institucional y plataforma de monitoreo territorial del **Consejo Comunitario Mayor COCOMANORTE**.

El objetivo del proyecto es ofrecer una plataforma moderna para comunicar la identidad del territorio, la gobernanza, la cultura, el turismo comunitario y gestionar en tiempo real el **Monitoreo Integral de Playas de Anidación de Tortugas Marinas en el Departamento del Chocó**.

---

## Tecnologías

- **Astro (v5 / v7)** — Framework principal optimizado para Generación de Sitios Estáticos (SSG) y API Endpoints (`/api/monitoring`).
- **Supabase (PostgreSQL + REST API)** — Base de datos relacional para persistencia de reportes y estado de playas.
- **Vitest** — Suite de pruebas unitarias para algoritmos de cálculo de amenazas, deltas de nidos y rutas base.
- **Tailwind CSS v4 + CSS Modules** — Sistema de estilos responsive y variables institucionales.
- **TypeScript** — Tipado estricto para modelos de datos, componentes y endpoints.
- **GitHub Actions** — CI/CD para despliegue automatizado en GitHub Pages (`.github/workflows/deploy.yml`).

---

## Filosofía

El proyecto busca:

- Simplicidad y máximo rendimiento (Cero sobrecarga de JavaScript en producción).
- Desacoplamiento total entre fuentes de datos, backend Supabase y componentes UI.
- Resiliencia ante desconexiones mediante persistencia híbrida (`localStorage` + Supabase sync).
- Alto nivel de accesibilidad, seguridad (XSS escaping) y SEO optimizado (Open Graph / Twitter Cards).
- Cobertura de pruebas unitarias para algoritmos críticos.

---

## Organización de Directorios

```text
/
├── .github/workflows/     # CI/CD Despliegue en GitHub Pages
├── docs/                  # Documentación arquitectónica completa
├── public/                # Assets estáticos (Logo, imágenes)
├── src/
│   ├── components/        # Componentes UI reutilizables
│   │   ├── governance/    # Autoridades, Historia y Documentos
│   │   ├── home/          # Secciones del Inicio
│   │   ├── layout/        # Header, Footer, Container
│   │   ├── monitoring/    # Tarjetas de estado, Clima/Mareas, Historial y Formulario
│   │   ├── territory/     # Comunidades y Ecosistemas
│   │   ├── tourism/       # Experiencias y Código de Ética
│   │   └── ui/            # Elementos base (Section, Button, Card)
│   ├── data/              # Fuentes de datos TypeScript desacopladas
│   ├── lib/               # Cliente API Supabase (`supabase.ts`)
│   ├── pages/             # Rutas estáticas y API routes (`/api/monitoring.ts`)
│   ├── tests/             # Pruebas unitarias de algoritmos (Vitest)
│   ├── utils/             # Almacenamiento local, formateo de URL y analizador de estatus
│   └── styles/            # CSS global y variables de tema
├── supabase/              # Esquema SQL oficial (`schema.sql`)
└── package.json
```

---

## Flujo de Datos y Persistencia

```text
Formulario de Monitoreo
         ↓
POST a /api/monitoring.ts (o guardado local en offline)
         ↓
Analizador de Estatus (src/utils/beachStatusAnalyzer.ts)
         ↓
Sincronización Supabase PostgreSQL (src/lib/supabase.ts)
         ↓
Persistencia Local (localStorage en src/utils/monitoringStorage.ts)
         ↓
Re-renderizado en Tiempo Semi-Real (BeachStatusCard & MonitoringHistoryViewer)
```

---

## Principios de Diseño

- **No duplicar código**: Toda información o estilo repetido debe abstraerse en datos o componentes reutilizables.
- **Rutas Relativas**: Toda ruta interna debe formatearse con `getRelativeUrl` para respetar el `BASE_URL` de Astro.
- **Sanitización HTML**: Todo dato ingresado por usuarios en formularios debe pasar por `escapeHtml` al renderizarse en el DOM para mitigar ataques XSS.
- **Pruebas Automatizadas**: Todo algoritmo de cálculo crítico debe contar con test unitario en `src/tests/`.

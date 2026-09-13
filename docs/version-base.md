# Versión Base del Proyecto — v1.6.0

## Propósito

Este documento describe el estado del portal institucional de COCOMANORTE al cierre de la **Fase 3 (Portal Institucional Sólido)**, **Fase 4 (Sistema de Monitoreo Integral de Playas del Chocó)** y **Fase 5 (Integración con Supabase, Despliegue CI/CD y Pruebas Unitarias)**.

---

## Estado General

- Sitio web institucional completamente funcional, responsivo y pulido.
- Sistema de monitoreo ambiental y de tortugas marinas integrado con el Protocolo Oficial del Departamento del Chocó.
- Soporte para registro de nuevas playas no listadas con coordenadas GPS y auto-geolocalización.
- Motor de análisis de estado semi-real de las playas (`beachStatusAnalyzer.ts`).
- Repositorio de consulta de reportes históricos con filtrado, buscador y sanitización anti-XSS.
- Backend híbrido conectado a Supabase (PostgreSQL con REST API) con sincronización en segundo plano y respaldo en `localStorage`.
- Suite de pruebas unitarias automatizadas con Vitest (`npm run test`).
- Menú de navegación móvil responsivo con botón hamburguesa accesible.
- SEO optimizado (Open Graph, Twitter Cards, favicon y despliegue CI/CD en GitHub Pages mediante GitHub Actions).

---

## Páginas Incluidas

- `/` — Inicio (Hero, Cifras de impacto, Pilares, Spotlight de Monitoreo, Previsualización de Territorio y Turismo, CTA).
- `/quienes-somos` — Misión, Visión, Valores, Estructura de Gobierno Propio y Autoridades, Línea del tiempo de la historia del colectivo y Repositorio de Documentos Oficiales descargables.
- `/territorio` — Caracterización de comunidades ancestrales, Ecosistemas prioritarios de conservación y Proyectos ambientales.
- `/turismo` — Catálogo de experiencias ecológicas de turismo comunitario, Código de ética del visitante e Instrucciones de reserva.
- `/monitoreo` — Dashboard con métricas globales, Estado de playas en tiempo real, Previsión de clima/mareas, Repositorio de informes históricos y Formulario Oficial del Protocolo del Chocó.
- `/contacto` — Canales de atención directa (Email, WhatsApp, Dirección en Acandí, Chocó), Horarios, Redes sociales y Formulario de contacto.
- `/api/monitoring` — Endpoint API Astro para validación y procesamiento de informes de monitoreo.

---

## Pruebas Unitarias (`src/tests/`)

- `beachStatusAnalyzer.test.ts` — Valida el algoritmo de estado de playas, niveles de amenaza y deltas de nidos/neonatos.
- `url.test.ts` — Valida el formateo de URLs relativas para despliegues con subruta en GitHub Pages.

---

## Referencia

Ver `docs/roadmap.md` para el detalle completo de fases.

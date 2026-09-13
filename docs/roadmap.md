# Roadmap — COCOMANORTE Web

## Objetivo del proyecto

Construir el sitio web institucional de COCOMANORTE como plataforma oficial de información, comunicación y seguimiento de los procesos de la organización.

---

## FASE 1 — Fundación (COMPLETADA)

- [x] Crear proyecto Astro.
- [x] Configurar Node.js y npm.
- [x] Inicializar Git.
- [x] Crear estructura inicial del proyecto.
- [x] Layout principal, Header, Footer, Páginas base.

---

## FASE 2 — Sistema visual y arquitectura (COMPLETADA)

- [x] Separar componentes de Layout, UI y Home.
- [x] Centralizar información en `src/data/` (`site.ts`, `organization.ts`, `pillars.ts`, `navigation.ts`).
- [x] Crear variables CSS y estilos modulares.
- [x] Menú responsive inicial.

---

## FASE 3 — Sitio institucional (COMPLETADA)

### 3.1 Inicio
- [x] Banner de cifras e impacto del colectivo.
- [x] Módulo destacado de monitoreo en tiempo real.
- [x] Vista previa de Territorio y Turismo Comunitario.

### 3.2 Gobernanza y Transparencia (`/quienes-somos`)
- [x] Misión, Visión y Valores territoriales.
- [x] Estructura de Gobierno Propio y Autoridades (`governance.ts` / `MemberCard.astro`).
- [x] Línea del tiempo de la historia del colectivo (`history.ts` / `Timeline.astro`).
- [x] Repositorio de Documentos Oficiales descargables (`documents.ts` / `DocumentCard.astro`).

### 3.3 Territorio y Biodiversidad (`/territorio`)
- [x] Caracterización de poblados y comunidades afrodescendientes (`territory.ts` / `CommunityCard.astro`).
- [x] Ecosistemas de alta prioridad de conservación (`EcosystemCard.astro`).
- [x] Proyectos de conservación liderados por la Guardia Comunitaria.

### 3.4 Turismo Comunitario (`/turismo`)
- [x] Catálogo de experiencias ecológicas y culturales (`tourism.ts` / `ExperienceCard.astro`).
- [x] Código de Ética y Decálogo del Visitante (`EthicsCard.astro`).
- [x] Pasos e instrucciones de reserva previa.

### 3.5 Contacto y Canales Oficiales (`/contacto`)
- [x] Canales oficiales en `social.ts` (Email, WhatsApp, Dirección en Acandí, Chocó).
- [x] Formulario de contacto con selector de asuntos.
- [x] Menú hamburguesa móvil en el Header (`Header.astro` & `header.css`).

---

## FASE 4 — Plataforma de Monitoreo Integral de Playas (COMPLETADA)

### 4.1 Modelo de datos y Dashboard (`/monitoreo`)
- [x] Definir entidades en `beachMonitoring.ts` (`Beach`, `MonitoringLog`, `ComprehensiveMonitoringReport`).
- [x] Dashboard con métricas globales (Nidos activos, neonatos liberados, sectores bajo vigilancia).
- [x] Tarjetas de estado en tiempo real para cada playa (`BeachStatusCard.astro`).
- [x] Previsión metereológica y tabla de mareas (`WeatherTideForecast.astro`).
- [x] Repositorio de consulta de reportes históricos con sanitización anti-XSS (`MonitoringHistoryViewer.astro`).
- [x] Tabla bitácora de patrullajes y avistamientos recientes (`MonitoringLogTable.astro`).

### 4.2 Protocolo Oficial del Departamento del Chocó (`MonitoringForm.astro`)
- [x] Formulario completo con secciones 0 a 9 del Protocolo del Chocó.
- [x] Registro de nuevas playas desconocidas con coordenadas GPS y geolocalización por navegador.
- [x] Motor de cálculo de amenazas y actualización de estado en tiempo semi-real (`beachStatusAnalyzer.ts`).

---

## FASE 5 — Backend, Base de Datos & Testing (COMPLETADA)

- [x] Esquema SQL de PostgreSQL para Supabase (`supabase/schema.sql`).
- [x] Cliente REST de Supabase con sincronización en segundo plano (`src/lib/supabase.ts`).
- [x] Endpoint API de Astro (`/api/monitoring.ts`) para procesar POSTs de monitoreo.
- [x] Inyección de variables de entorno de Supabase en GitHub Actions (`.github/workflows/deploy.yml`).
- [x] Helper de formateo de rutas relativas para GitHub Pages (`getRelativeUrl`).
- [x] Suite de pruebas unitarias automatizadas con Vitest (`src/tests/`).

---

## FASE 6 — Próximos Pasos en Producción (FUTURO)

- [ ] Sistema de Autenticación para Guardias y Patrulleros acreditados (Supabase Auth).
- [ ] Protección contra Spam con Cloudflare Turnstile / Captcha en el formulario de monitoreo.
- [ ] Mapa interactivo con visor de capas GIS (Leaflet.js) para delimitar las playas georreferenciadas.

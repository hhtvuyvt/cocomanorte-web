# Roadmap — COCOMANORTE Web

## Objetivo del proyecto

Construir el sitio web institucional de COCOMANORTE como plataforma oficial de información, comunicación y seguimiento de los procesos de la organización.

El sitio tendrá como objetivos principales:

- Presentar información institucional de COCOMANORTE.
- Comunicar noticias, acciones, proyectos y actividades.
- Presentar información sobre el territorio, cultura, conservación y turismo comunitario.
- Servir como punto oficial de consulta sobre el estado y las acciones de COCOMANORTE.
- Incorporar un sistema de monitoreo ambiental y comunitario en tiempo real.
- Permitir el seguimiento de los arribos de tortugas marinas, especialmente tortuga carey y tortuga caná.
- Registrar y visualizar el estado de las playas de anidación.
- Aplicar el Protocolo Oficial de Monitoreo Integral de Playas del Departamento del Chocó.

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
- [x] Revisar y mejorar Hero.
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
- [x] Tabla bitácora de patrullajes y avistamientos recientes (`MonitoringLogTable.astro`).

### 4.2 Protocolo Oficial del Departamento del Chocó (`MonitoringForm.astro`)
- [x] **0. Información Básica**: Playa, comunidad, monitor, fecha y horarios.
- [x] **1. Caracterización Física**: Tipo de material, pendiente, dimensiones y elevación.
- [x] **2. Dinámica Costera**: Evidencias de erosión, acumulación de sedimentos, corrientes y mareas.
- [x] **3. Condiciones Climáticas**: Tiempo, estado del mar, temperatura y viento.
- [x] **4. Ecosistemas & Biodiversidad**: Fauna observada (tortugas, aves), presencia de sargazo y vegetación.
- [x] **5, 6 & 7. Recursos Hídricos, Contaminación e Infraestructura**: Desembocaduras, tipos de residuos y construcciones.
- [x] **8 & 9. Aspectos Sociales, Saberes Ancestrales y Amenazas**: Actividades tradicionales, relatos de sabedores y amenazas identificadas.

---

## FASE 5 — Próximos Pasos en Seguridad & Producción (FUTURO)

- [ ] Integración de Backend / Base de Datos Serverless (Supabase / PostgreSQL) para persistencia real de reportes.
- [ ] Sistema de Autenticación para Guardias y Patrulleros acreditados.
- [ ] Protección contra Spam con Cloudflare Turnstile / Captcha en el formulario de monitoreo.
- [ ] Configurar HTTP Security Headers en hosting de producción (HSTS, CSP, X-Frame-Options).

# Componentes

## Layout Components (`src/components/layout/`)

### Header

**Descripción:** Barra superior de navegación institucional.

**Responsabilidades:**

- Mostrar el logotipo e insignia de COCOMANORTE.
- Renderizar el menú principal dinámico a partir de `navigation.ts`.
- Proporcionar botón toggle menú hamburguesa para dispositivos móviles.

**Utilizado en:** Todas las páginas.

---

### Footer

**Descripción:** Pie de página institucional completo.

**Responsabilidades:**

- Mostrar información institucional, dirección y canales de atención.
- Mostrar enlaces de navegación rápida.
- Mostrar botones hacia redes sociales oficiales (`social.ts`).
- Declaración de derechos de autor.

**Utilizado en:** Todas las páginas.

---

### Container

**Descripción:** Contenedor reutilizable para controlar el ancho máximo y alineación del contenido.

**Responsabilidades:**

- Mantener consistencia visual.
- Evitar repetir estilos de ancho.
- Adaptar contenido a diferentes pantallas.

**Utilizado en:** Header, Footer y secciones del sitio.

---

## UI Components (`src/components/ui/`)

### Section

**Descripción:** Componente para crear secciones uniformes dentro del sitio.

**Responsabilidades:**

- Controlar espaciado vertical y estructura.
- Mostrar títulos y subtítulos cuando aplique.

**Utilizado en:** Todas las páginas.

---

### Button

**Descripción:** Botón reutilizable para navegación y llamados a la acción.

**Propiedades:** `href`, `variant` (`primary` | `secondary`).
**Formateo:** Formatea dinámicamente el atributo `href` con `getRelativeUrl` para respetar el `BASE_URL` de Astro.

**Utilizado en:** Hero, CallToAction, Turismo, Contacto y páginas institucionales.

---

### Card

**Descripción:** Tarjeta genérica reutilizable con sombreado y animación de elevación al pasar el cursor.

**Propiedades:** `title`, `description`.

**Utilizado en:** Secciones informativas base.

---

## Home Components (`src/components/home/`)

### Hero

**Descripción:** Banner principal de la página de inicio.

**Responsabilidades:** Presentar COCOMANORTE, eslogan, imagen de fondo del territorio y botón de acción.

---

### Pillars

**Descripción:** Representa los 4 pilares institucionales (Territorio, Cultura, Conservación, Turismo Comunitario).

---

### CallToAction

**Descripción:** Módulo de llamado a la acción con enlaces rápidos a las secciones de Territorio, Monitoreo y Turismo.

---

## Governance Components (`src/components/governance/`)

### MemberCard

**Descripción:** Tarjeta para mostrar integrantes de la Junta Directiva, Representación Legal y Comités de Trabajo.

**Propiedades:** `member` (`GovernanceMember`).

---

### Timeline

**Descripción:** Línea de tiempo vertical para representar los hitos históricos del Consejo Comunitario.

**Propiedades:** `milestones` (`HistoryMilestone[]`).

---

### DocumentCard

**Descripción:** Tarjeta para la visualización y descarga de documentos oficiales y transparencia.

**Propiedades:** `document` (`OfficialDocument`).

---

## Territory Components (`src/components/territory/`)

### CommunityCard

**Descripción:** Tarjeta descriptiva de las veredas y comunidades pertenecientes al colectivo.

**Propiedades:** `community` (`Community`).

---

### EcosystemCard

**Descripción:** Tarjeta para identificar ecosistemas de alta prioridad de conservación y sus especies clave.

**Propiedades:** `ecosystem` (`Ecosystem`).

---

## Tourism Components (`src/components/tourism/`)

### ExperienceCard

**Descripción:** Tarjeta de catálogo para recorridos ecológicos y culturales guiados.

**Propiedades:** `experience` (`Experience`).

---

### EthicsCard

**Descripción:** Tarjeta instructiva para mostrar normas del Código de Ética y Decálogo del Visitante.

**Propiedades:** `rule` (`EthicsRule`).

---

## Monitoring Components (`src/components/monitoring/`)

### BeachStatusCard

**Descripción:** Tarjeta de resumen en tiempo real del estado de cada playa de anidación (nidos activos, neonatos liberados, nivel de amenaza, último patrullaje). Incluye re-renderizado automático ante el evento `monitoringReportSaved`.

**Propiedades:** `beach` (`Beach`).

---

### WeatherTideForecast

**Descripción:** Módulo de previsión meteorológica, oleaje y tabla de mareas que muestra un indicador de seguridad y viabilidad para la jornada de patrullaje.

**Propiedades:** `forecasts` (`BeachForecast[]`).

---

### MonitoringHistoryViewer

**Descripción:** Repositorio interactivo para consultar, buscar y filtrar informes de monitoreo históricos por playa y palabras clave. Incluye sanitización HTML anti-XSS (`escapeHtml`).

---

### MonitoringLogTable

**Descripción:** Tabla responsiva para visualizar los últimos registros de patrullaje, anidaciones y eventos en playas.

**Propiedades:** `logs` (`MonitoringLog[]`).

---

### MonitoringForm

**Descripción:** Formulario interactivo estructurado según el **Protocolo de Monitoreo Integral de Playas del Chocó** (Secciones 0 a 9). Incluye opción de registro de nuevas playas con coordenadas GPS, geolocalización por navegador y envío asíncrono al backend `/api/monitoring` con respaldo en `localStorage`.

---

## Módulos de Utilidad y Backend (`src/utils/` & `src/lib/`)

- **`src/utils/url.ts` (`getRelativeUrl`)**: Formatea rutas internas respetando el `BASE_URL` de Astro (ej. `/cocomanorte-web/...` en GitHub Pages).
- **`src/utils/beachStatusAnalyzer.ts` (`analyzeBeachStatusFromReport`)**: Evalúa los parámetros de un informe (amenazas, erosión, contaminación, fauna) para calcular el nivel de riesgo y nuevo estado de la playa.
- **`src/utils/monitoringStorage.ts`**: Gestor de estado persistente en `localStorage` con respaldo en Supabase.
- **`src/lib/supabase.ts`**: Cliente API REST para insertar informes y actualizar estados en las tablas `monitoring_reports` y `beaches` de Supabase.
- **`src/pages/api/monitoring.ts`**: Endpoint API Astro para validar y procesar solicitudes POST de informes de monitoreo.

---

## Suite de Pruebas Unitarias (`src/tests/`)

- **`src/tests/beachStatusAnalyzer.test.ts`**: Valida los cálculos de amenazas, deltas de nidos/neonatos y cambio a estado de alerta por marejada.
- **`src/tests/url.test.ts`**: Verifica el formateo de URLs relativas y la preservación de enlaces externos, `mailto:`, `tel:` y anclas.

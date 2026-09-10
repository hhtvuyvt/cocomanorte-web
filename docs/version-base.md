# Versión Base del Proyecto — v1.5.0

## Propósito

Este documento describe el estado del portal institucional de COCOMANORTE al cierre del desarrollo de la **Fase 3 (Portal Institucional Sólido)** y **Fase 4 (Sistema de Monitoreo Integral de Playas del Chocó)**.

---

## Estado General

- Sitio web institucional completamente funcional y pulido.
- Sistema de monitoreo ambiental y de tortugas marinas integrado con formulario oficial según el Protocolo del Departamento del Chocó.
- Menú de navegación móvil responsivo con botón hamburguesa accesible.
- SEO optimizado con etiquetas Open Graph, Twitter Cards, favicons y canonical URLs.
- Arquitectura desacoplada de componentes, datos y estilos.

---

## Páginas Incluidas

- `/` — Inicio (Hero, Cifras de impacto, Pilares, Spotlight de Monitoreo, Previsualización de Territorio y Turismo, CTA).
- `/quienes-somos` — Misión, Visión, Valores, Estructura de Gobierno Propio y Autoridades, Línea del tiempo de la historia del colectivo y Repositorio de Documentos Oficiales descargables.
- `/territorio` — Caracterización de comunidades ancestrales, Ecosistemas prioritarios de conservación y Proyectos ambientales.
- `/turismo` — Catálogo de experiencias ecológicas, Código de ética y decálogo del visitante, Instrucciones de reserva previa.
- `/monitoreo` — Dashboard con métricas globales, Estado de playas en tiempo real, Bitácora de patrullajes recientes y Formulario Oficial de Registro del Protocolo del Chocó.
- `/contacto` — Canales de atención directa (Email, WhatsApp, Dirección física en Acandí, Chocó), Horarios, Redes sociales y Formulario de contacto.

---

## Componentes Incluidos

Layout

- Header (con menú hamburguesa móvil)
- Footer (con columnas de branding, enlaces y contacto)

UI

- Container
- Section
- Button
- Card

Home

- Hero
- Pillars
- CallToAction

Gobernanza

- MemberCard
- Timeline
- DocumentCard

Territorio

- CommunityCard
- EcosystemCard

Turismo

- ExperienceCard
- EthicsCard

Monitoreo

- BeachStatusCard
- MonitoringLogTable
- MonitoringForm

---

## Datos Centralizados (`src/data/`)

- `site.ts` — Información general del sitio.
- `organization.ts` — Nombre, Misión, Visión y Valores.
- `navigation.ts` — Enlaces del menú principal.
- `social.ts` — Teléfonos, WhatsApp, Email, Dirección en Acandí y redes sociales.
- `pillars.ts` — Pilares institucionales.
- `governance.ts` — Junta Directiva y Comités de Trabajo.
- `history.ts` — Hitos históricos del colectivo.
- `documents.ts` — Documentos oficiales descargables.
- `territory.ts` — Comunidades y Ecosistemas.
- `tourism.ts` — Experiencias y Código de Ética.
- `beachMonitoring.ts` — Playas, registros y tipos del Protocolo de Monitoreo del Chocó.

---

## Referencia

Ver `docs/roadmap.md` para el mapa completo de fases.

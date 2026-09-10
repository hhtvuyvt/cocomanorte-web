# Arquitectura del Proyecto

## Nombre

COCOMANORTE Web

---

## Descripción

Sitio web institucional y plataforma de monitoreo territorial del **Consejo Comunitario Mayor COCOMANORTE**.

El objetivo del proyecto es ofrecer una plataforma moderna para comunicar la identidad del territorio, la gobernanza, la cultura, el turismo comunitario y gestionar en tiempo real el **Monitoreo Integral de Playas de Anidación de Tortugas Marinas en el Departamento del Chocó**.

---

## Tecnologías

- **Astro (v5 / v7)** — Framework principal optimizado para Generación de Sitios Estáticos (SSG) y alto rendimiento.
- **Tailwind CSS v4 + CSS Modules** — Sistema de estilos responsive y variables institucionales.
- **TypeScript** — Tipado estricto para modelos de datos y componentes.
- **HTML5 & CSS3** — Estructura semántica accesible.

---

## Filosofía

El proyecto busca:

- Simplicidad y máximo rendimiento (Cero sobrecarga de JavaScript innecesario).
- Desacoplamiento total entre fuentes de datos y componentes UI.
- Alto nivel de accesibilidad y SEO optimizado (Open Graph / Twitter Cards).
- Facilidad de mantenimiento por parte de las comunidades.
- Documentación exhaustiva de componentes y decisiones.

---

## Organización de Directorios

```text
src/
├── components/
│   ├── governance/    # Componentes de autoridades, historia y documentos
│   ├── home/          # Secciones principales del Inicio
│   ├── layout/        # Header, Footer, Container
│   ├── monitoring/    # Tarjetas de estado de playas, tablas y formulario
│   ├── territory/     # Fichas de comunidades y ecosistemas
│   ├── tourism/       # Catálogo de experiencias y código de ética
│   └── ui/            # Elementos base (Section, Button, Card)
│
├── data/              # Modelos de datos TypeScript desacoplados
│   ├── beachMonitoring.ts
│   ├── documents.ts
│   ├── governance.ts
│   ├── history.ts
│   ├── navigation.ts
│   ├── organization.ts
│   ├── pillars.ts
│   ├── site.ts
│   ├── social.ts
│   ├── territory.ts
│   └── tourism.ts
│
├── layouts/           # Layout.astro (SEO, Open Graph, Favicon, Estructura global)
├── pages/             # Rutas (/index, /quienes-somos, /territorio, /turismo, /monitoreo, /contacto)
└── styles/            # Archivos CSS modulares y variables de color
```

---

## Flujo de Datos

```text
src/data/ (TypeScript Models & Content)
         ↓
Página (src/pages/*.astro)
         ↓
Layout (Layout.astro + Headers/SEO)
         ↓
Componentes UI (src/components/*/*.astro)
         ↓
Estilos Modulares (CSS variables & Tailwind)
```

---

## Principios de Diseño

- **No duplicar código**: Toda información o estilo repetido debe abstraerse en datos o componentes reutilizables.
- **Responsabilidad Única**: Cada componente realiza una única tarea de presentación.
- **Desacoplamiento**: Los componentes reciben datos estructurados mediante `Astro.props`.
- **Accesibilidad y SEO**: Títulos jerárquicos, alt text en imágenes y metadatos sociales.

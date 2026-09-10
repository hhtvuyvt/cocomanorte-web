# 🌿 COCOMANORTE - portal Institucional & Sistema de Monitoreo Territorial

Portal web oficial del **Consejo Comunitario Mayor COCOMANORTE**, diseñado para fortalecer la autonomía, la protección del territorio colectivo afrodescendiente en el Departamento del Chocó (Colombia), la difusión del turismo comunitario sostenible y la gestión de datos en tiempo real para el **Monitoreo Integral de Playas de Anidación de Tortugas Marinas**.

---

## 🚀 Características del Proyecto

* **Gobernanza & Transparencia (`/quienes-somos`)**:
  * Estructura organizativa, Representante Legal, Junta Directiva y Comités de Trabajo Comunitario.
  * Línea del tiempo histórica (Ley 70 de 1993, Titulación Colectiva y Planes de Manejo).
  * Repositorio de Documentos Oficiales descargables (Reglamento Interno, Estatutos, Informes de Rendición de Cuentas).

* **Territorio Colectivo & Biodiversidad (`/territorio`)**:
  * Caracterización de poblados y asentamientos ancestrales.
  * Ecosistemas de alta prioridad (Santuarios de tortugas marinas, Manglares, Serranía del Darién).
  * Proyectos de conservación liderados por la Guardia Comunitaria.

* **Turismo Comunitario & Sostenible (`/turismo`)**:
  * Catálogo de experiencias ecológicas y culturales (Ruta de la Tortuga Caná, Navegación por Manglares, Saberes Ancestrales).
  * Código de Ética y Decálogo del Visitante.
  * Guía y canales de reserva coordinados por las comunidades.

* **Sistema de Monitoreo Integral de Playas (`/monitoreo`)**:
  * Dashboard con estado en tiempo real de las playas de anidación.
  * Bitácora pública de patrullajes y avistamiento de fauna.
  * **Formulario Oficial de Registro para Patrulleros y Guardia Comunitaria** estructurado según el Protocolo del Departamento del Chocó (caracterización física, dinámica costera, clima, ecosistemas, recursos hídricos, contaminación, infraestructura, aspectos sociales y amenazas).

* **Atención y Contacto (`/contacto`)**:
  * Canales directos de atención (Email, WhatsApp, Dirección física en Acandí, Chocó).
  * Formulario de mensajes institucionales y enlaces a redes sociales.
  * Menú de navegación móvil responsivo (Hamburguesa).

---

## 🛠️ Stack Tecnológico

* **Framework Frontend**: [Astro 5 / 7](https://astro.build/) (Static Site Generation / Renderizado estático ultrarrápido).
* **Estilos & UI**: [Tailwind CSS v4](https://tailwindcss.com/) + CSS Modules con variables de diseño personalizadas.
* **Lenguaje**: TypeScript / JavaScript.
* **Optimización**: SEO completo con Meta Tags Open Graph, Twitter Cards, imágenes sociales y enlaces canónicos.

---

## 🧞 Comandos de Desarrollo

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias del proyecto |
| `npm run dev` | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build` | Compila el sitio estático para producción en `./dist/` |
| `npm run preview` | Previsualiza el build de producción localmente |

---

## 📦 Estructura del Código

```text
/
├── public/                # Assets estáticos (Logo, imágenes del territorio)
├── src/
│   ├── components/        # Componentes UI reutilizables
│   │   ├── governance/    # Componentes para Autoridades, Historia y Documentos
│   │   ├── home/          # Secciones del Inicio (Hero, Pilares, Destacados, CTA)
│   │   ├── layout/        # Header, Footer, Container
│   │   ├── monitoring/    # Tarjetas de estado, Tablas de patrullaje y Formulario
│   │   ├── territory/     # Tarjetas de Comunidades y Ecosistemas
│   │   ├── tourism/       # Tarjetas de Experiencias y Código de Ética
│   │   └── ui/            # Botones, Secciones y Cards base
│   ├── data/              # Fuentes de datos desacopladas en TypeScript
│   │   ├── beachMonitoring.ts
│   │   ├── documents.ts
│   │   ├── governance.ts
│   │   ├── history.ts
│   │   ├── navigation.ts
│   │   ├── organization.ts
│   │   ├── pillars.ts
│   │   ├── site.ts
│   │   ├── social.ts
│   │   ├── territory.ts
│   │   └── tourism.ts
│   ├── layouts/           # Layout principal con cabeceras SEO y Open Graph
│   ├── pages/             # Rutas estáticas de la aplicación
│   └── styles/            # Estilos globales y variables de tema
└── package.json
```

---

© **Consejo Comunitario Mayor COCOMANORTE** — *Autonomía, Territorio, Cultura y Conservación.*

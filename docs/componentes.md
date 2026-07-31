# Componentes

## Header

**Descripción:** Barra superior del sitio.

**Responsabilidades:**

- Mostrar el logotipo.
- Mostrar el menú principal.
- Navegación.

**Utilizado en:** Todas las páginas.

---

## Footer

**Descripción:** Pie de página institucional.

**Responsabilidades:**

- Información institucional.
- Derechos de autor.
- Enlaces futuros.

---

## Hero

**Descripción:** Banner principal de la página de inicio.

**Responsabilidades:**

- Presentar COCOMANORTE.
- Imagen principal.
- Botón de acción.

---

## Pillars

**Descripción:** Representa los pilares institucionales.

**Pilares:**

- Territorio
- Cultura
- Conservación
- Turismo

---

## CallToAction

**Descripción:** Invita al usuario a conocer más sobre la organización.

---

## Container

**Descripción:** Contenedor reutilizable para controlar el ancho máximo y alineación del contenido.

**Responsabilidades:**

- Mantener consistencia visual.
- Evitar repetir estilos de ancho.
- Adaptar contenido a diferentes pantallas.

**Propiedades:**

Ninguna.

**Dependencias:**

Ninguna.

**Utilizado en:**

- Header
- Footer
- Secciones del sitio

---

## Section

**Descripción:** Componente para crear secciones uniformes dentro del sitio.

**Responsabilidades:**

- Controlar espaciado vertical.
- Mostrar títulos y subtítulos.
- Mantener estructura consistente.

**Propiedades:**

- `title`
- `subtitle`

**Dependencias:**

- Container

**Utilizado en:**

- Inicio
- Quiénes somos
- Futuras páginas institucionales

---

## Button

**Descripción:** Botón reutilizable para navegación y acciones.

**Responsabilidades:**

- Mantener estilos consistentes.
- Facilitar llamados a la acción.
- Evitar duplicación de CSS.

**Propiedades:**

- `href`
- `variant`

**Variantes actuales:**

- `primary`
- `secondary`

**Dependencias:**

Ninguna.

**Utilizado en:**

- Inicio
- Quiénes somos
- Futuras páginas

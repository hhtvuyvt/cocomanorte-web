# Registro de decisiones

## 2026-07-30

### Se eligió Astro

Motivo

- Excelente rendimiento.
- Muy buen SEO.
- Sitio mayormente estático.

---

### Se decidió usar CSS puro

Motivo

- No depender inicialmente de frameworks.
- Mejor comprensión del proyecto.
- Posibilidad de migrar a Tailwind en el futuro.

---

### Componentes reutilizables

Motivo

Reducir duplicación de código y facilitar el mantenimiento.

---

### Documentación desde el inicio

Motivo

El proyecto tiene vocación de largo plazo y puede crecer con nuevos colaboradores.

---

### Uso de `svh` para secciones tipo hero

Contexto

En una primera versión del hero se usó una altura fija con `min-height: 550px` y luego se probó una altura basada en viewport. El problema apareció cuando la sección dependía de `vh`, ya que en móviles el navegador puede mostrar barras dinámicas y el área visible real cambia con el desplazamiento.

Decisión

- Usar `min-height: 78svh` en el hero para que la sección se adapte a la altura visible real del navegador.
- Mantener tipografías y padding fluidos con `clamp()`.
- Evitar estilos globales sobre etiquetas `a` dentro de componentes cuando ya existe un botón reutilizable.

Motivo

`vh` mide la altura total del viewport y puede no reflejar la zona efectiva de contenido. `svh` mide la altura de la ventana pequeña visible, que es la que realmente percibe el usuario en móviles y tablets. Esto elimina saltos visuales, recortes y espacios innecesarios en el hero.

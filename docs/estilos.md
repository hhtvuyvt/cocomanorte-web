# Guía de estilos

## Colores institucionales

Verde territorio

- #166534

Uso

- Header
- Botones
- Elementos principales

---

Azul Caribe

- #0369A1

Uso

- Ambiente
- Agua
- Turismo

---

Tierra

- #92400E

Uso

- Cultura
- Historia

---

Arena

- #FDE68A

Uso

- Fondos
- Detalles

---

Verde claro

- #DCFCE7

Uso

- Tarjetas
- Secciones

---

## Tipografía

Pendiente.

---

## Responsividad en viewport

### Altura de secciones de portada

Para componentes tipo hero, evitar usar solo `vh` como referencia de altura porque en navegadores móviles la barra de dirección y la interfaz del navegador pueden cambiar la altura efectiva del viewport.

Recomendación

- Usar `svh` cuando la sección debe ocupar la altura visible real del dispositivo.
- Usar `clamp()` para tamaños de texto y padding.
- Mantener el contenido con anchos máximos y evitar desbordes en móviles.

Ejemplo

```css
.hero {
  min-height: 78svh;
}
```

---

## Espaciado

Pendiente.

---

## Iconografía

Pendiente.

## Resumen

| Color            | Código    |
| ---------------- | --------- |
| Verde territorio | `#166534` |
| Azul Caribe      | `#0369A1` |

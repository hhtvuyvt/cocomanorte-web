# Versión base del proyecto — v1.0.0

## Propósito

Este documento describe qué contiene la versión base (`v1.0.0`) del sitio institucional de COCOMANORTE, al cierre de la Fase 2 del roadmap.

No representa el producto final. Es la base estable sobre la cual se construyen las siguientes fases.

---

## Estado general

- Sitio institucional funcional, sin sistema de monitoreo todavía.
- Arquitectura de componentes, datos y estilos separada según `docs/arquitectura.md`.
- Responsive implementado y revisado.
- SEO básico implementado (meta description por página).

---

## Páginas incluidas

- `/` — Inicio (Hero, Pilares, Llamado a la acción).
- `/quienes-somos` — Misión, visión y valores.
- `/territorio` — Placeholder, contenido pendiente para Fase 3.
- `/turismo` — Placeholder, contenido pendiente para Fase 3.
- `/contacto` — Placeholder, canales oficiales pendientes de definir.

---

## Componentes incluidos

Layout

- Header
- Footer

UI

- Container
- Section
- Button
- Card

Home

- Hero
- Pillars
- CallToAction

---

## Datos centralizados

- `site.ts` — información general del sitio.
- `organization.ts` — información institucional.
- `pillars.ts` — pilares institucionales.
- `navigation.ts` — menú principal.
- `social.ts` — redes y contacto (pendiente de completar con datos reales).

---

## Pendiente conocido para fases posteriores

- Contenido real de Territorio, Turismo y Contacto (Fase 3).
- Redes sociales y datos de contacto reales en `social.ts`.
- Sistema de noticias y comunicación (Fase 3).
- Plataforma de monitoreo ambiental (Fase 4 en adelante).

---

## Referencia

Ver `docs/roadmap.md` para el detalle completo de fases.

# Roadmap — COCOMANORTE Web

## Objetivo del proyecto

Construir el sitio web institucional de COCOMANORTE como plataforma oficial de información, comunicación y seguimiento de los procesos de la organización.

El sitio tendrá como objetivos principales:

- Presentar información institucional de COCOMANORTE.
- Comunicar noticias, acciones, proyectos y actividades.
- Presentar información sobre el territorio, cultura, conservación y turismo comunitario.
- Servir como punto oficial de consulta sobre el estado y las acciones de COCOMANORTE.
- Incorporar progresivamente un sistema de monitoreo ambiental y comunitario.
- Permitir el seguimiento de los arribos de tortugas marinas, especialmente tortuga carey y tortuga caná.
- Registrar y visualizar el estado de las playas de anidación.
- Construir, mediante la acumulación de reportes, una representación semi-real del estado de las playas.

---

## FASE 1 — Fundación

### 1.1 Proyecto

- [x] Crear proyecto Astro.
- [x] Configurar Node.js y npm.
- [x] Inicializar Git.
- [x] Crear estructura inicial del proyecto.
- [x] Configurar entorno de desarrollo.

### 1.2 Estructura básica

- [x] Layout principal.
- [x] Header.
- [x] Footer.
- [x] Página Inicio.
- [x] Página Quiénes somos.

### 1.3 Componentes base

- [x] Container.
- [x] Section.
- [x] Button.
- [x] Card.

### 1.4 Identidad visual inicial

- [x] Crear logo temporal.
- [x] Definir colores institucionales.
- [x] Crear estructura visual del Header.
- [x] Crear menú responsive.
- [x] Integrar logo.

---

## FASE 2 — Sistema visual y arquitectura

### 2.1 Organización de componentes

- [x] Separar componentes de Layout.
- [x] Separar componentes UI.
- [x] Separar componentes específicos de Inicio.
- [x] Organizar archivos de estilos.
- [x] Organizar archivos de datos.

#### Estructura actual

```text
src/
├── components/
│   ├── layout/
│   ├── ui/
│   └── home/
│
├── data/
│
├── layouts/
│
├── pages/
│
└── styles/
```

---

### 2.2 Sistema de estilos

- [x] Crear variables institucionales.
- [x] Crear CSS global.
- [x] Crear estilos de Layout.
- [x] Crear estilos de tipografía.
- [x] Crear estilos del Header.
- [x] Crear estilos del Footer.
- [x] Importar correctamente `global.css` desde el Layout.
- [x] Resolver problemas de estilos globales.
- [x] Implementar responsive inicial.

---

### 2.3 Centralización de datos

#### Navegación

- [x] Crear `navigation.ts`.
- [x] Conectar navegación con Header.

#### Información general

- [x] Crear `site.ts`.
- [x] Mantener la estructura original de datos utilizando `site.title`.
- [x] Conectar información del sitio con los componentes correspondientes.

#### Organización

- [x] Crear `organization.ts`.
- [x] Centralizar información institucional.
- [x] Utilizar los datos en Quiénes somos.

#### Pilares

- [x] Crear `pillars.ts`.
- [x] Centralizar información de los pilares.
- [x] Conectar `Pillars.astro` con `pillars.ts`.

---

### 2.4 Componentes reutilizables

- [x] Crear `Container.astro`.
- [x] Crear `Section.astro`.
- [x] Crear `Button.astro`.
- [x] Crear `Card.astro`.
- [x] Integrar `Card` en los pilares.
- [x] Mantener componentes genéricos separados de componentes especializados.

#### Regla de arquitectura

Los componentes deben encargarse principalmente de la presentación y estructura.

Los datos deben mantenerse en `src/data/`.

No crear componentes genéricos innecesarios antes de identificar una necesidad real de reutilización.

---

### 2.5 Diseño de los pilares

- [x] Crear sección de pilares.
- [x] Crear tarjetas responsive.
- [x] Centrar visualmente la sección.
- [x] Resolver conflicto entre títulos de `Section` y `Pillars`.
- [x] Diseñar conexión visual entre "Nuestros pilares" y las tarjetas.
- [x] Mantener comportamiento responsive.

#### Decisión de diseño

La sección de pilares utiliza una composición visual propia.

Por esta razón no depende obligatoriamente de los parámetros `title` y `subtitle` de `Section`.

Esto permite que componentes con composiciones especiales controlen su propio encabezado sin perder la estructura general proporcionada por `Section`.

---

## 2.6 Documentación

- [x] Documentar componentes.
- [x] Documentar estructura del proyecto.
- [x] Documentar decisiones importantes.
- [ ] Revisar y actualizar documentación antes de cerrar Fase 2.
- [ ] Documentar la versión base del proyecto.

---

## 2.7 Revisión final de Fase 2

### Responsive

- [ ] Revisar Header en escritorio.
- [ ] Revisar Header en tablet.
- [ ] Revisar Header en móvil.
- [ ] Revisar Hero.
- [ ] Revisar pilares.
- [ ] Revisar Quiénes somos.
- [ ] Revisar Footer.
- [ ] Revisar botones.
- [ ] Revisar espaciados.
- [ ] Revisar tipografía.

### Accesibilidad

- [ ] Revisar textos alternativos de imágenes.
- [ ] Revisar jerarquía de encabezados.
- [ ] Revisar navegación mediante teclado.
- [ ] Revisar contraste.
- [ ] Revisar enlaces.
- [ ] Revisar elementos interactivos.

### SEO básico

- [ ] Revisar títulos de páginas.
- [ ] Revisar meta descriptions.
- [ ] Crear Open Graph básico.
- [ ] Revisar idioma del documento.
- [ ] Revisar URLs.
- [ ] Crear favicon.
- [ ] Crear iconos necesarios.

### Calidad

- [ ] Revisar imports.
- [ ] Eliminar código sin utilizar.
- [ ] Eliminar archivos innecesarios.
- [ ] Revisar CSS duplicado.
- [ ] Revisar errores de consola.
- [ ] Revisar enlaces rotos.
- [ ] Ejecutar `npm run build`.
- [ ] Resolver todos los errores del build.

---

## CIERRE DE FASE 2

Antes de comenzar la Fase 3:

- [ ] Sitio funcionando sin errores.
- [ ] Responsive revisado.
- [ ] Accesibilidad básica revisada.
- [ ] SEO básico implementado.
- [ ] Documentación actualizada.
- [ ] Código limpio.
- [ ] Build exitoso.
- [ ] Crear commit estable.
- [ ] Publicar versión base en GitHub.
- [ ] Crear versión `v1.0.0`.
- [ ] Preparar despliegue a producción.

### Objetivo de `v1.0.0`

La versión `v1.0.0` será la primera versión base estable del sitio institucional.

No representa el producto final.

Representa una base sólida sobre la cual se desarrollarán las siguientes fases.

---

## FASE 3 — Sitio institucional

### 3.1 Inicio

- [ ] Revisar y mejorar Hero.
- [ ] Mejorar presentación de COCOMANORTE.
- [ ] Integrar imágenes reales.
- [ ] Revisar llamada a la acción.
- [ ] Mejorar sección de pilares.

### 3.2 Organización

- [ ] Completar Quiénes somos.
- [ ] Historia.
- [ ] Misión.
- [ ] Visión.
- [ ] Organización comunitaria.
- [ ] Procesos comunitarios.
- [ ] Valores.

### 3.3 Territorio

- [ ] Crear página Territorio.
- [ ] Información territorial.
- [ ] Comunidades.
- [ ] Playas.
- [ ] Ecosistemas.
- [ ] Biodiversidad.
- [ ] Información geográfica.

### 3.4 Cultura

- [ ] Crear sección Cultura.
- [ ] Tradiciones.
- [ ] Saberes.
- [ ] Memoria.
- [ ] Prácticas culturales.
- [ ] Conocimiento tradicional.

### 3.5 Conservación

- [ ] Crear sección Conservación.
- [ ] Procesos de conservación.
- [ ] Biodiversidad.
- [ ] Protección de ecosistemas.
- [ ] Proyectos ambientales.

### 3.6 Turismo comunitario

- [ ] Crear página Turismo.
- [ ] Destinos.
- [ ] Experiencias.
- [ ] Cultura.
- [ ] Naturaleza.
- [ ] Recomendaciones para visitantes.

### 3.7 Noticias y comunicación

- [ ] Crear sistema de noticias.
- [ ] Crear página de noticias.
- [ ] Crear páginas individuales de noticias.
- [ ] Publicar acciones de COCOMANORTE.
- [ ] Publicar comunicados.
- [ ] Publicar actividades.
- [ ] Publicar proyectos.

### 3.8 Contacto

- [ ] Crear página Contacto.
- [ ] Información institucional.
- [ ] Canales oficiales.
- [ ] Redes sociales.
- [ ] Ubicación.
- [ ] Formulario de contacto, si es necesario.

---

## FASE 4 — Plataforma de Monitoreo

### Objetivo

Crear un sistema de monitoreo ambiental y comunitario que permita registrar, consultar y visualizar información sobre:

- Arribos de tortugas marinas.
- Tortuga carey.
- Tortuga caná.
- Playas de anidación.
- Estado físico de las playas.
- Dinámica costera.
- Condiciones climáticas.
- Ecosistemas y biodiversidad.
- Recursos hídricos.
- Contaminación.
- Infraestructura.
- Caracterización social y cultural.
- Amenazas.

Los reportes podrán ser parciales.

No será obligatorio diligenciar todos los campos en cada jornada.

La acumulación de reportes permitirá construir progresivamente una representación del estado actual de cada playa.

---

### 4.1 Modelo de datos

Definir formalmente:

- [ ] Playa.
- [ ] Ubicación.
- [ ] Jornada de monitoreo.
- [ ] Reporte.
- [ ] Observación.
- [ ] Especie.
- [ ] Arribo.
- [ ] Nido.
- [ ] Fotografía.
- [ ] Amenaza.
- [ ] Evento ambiental.
- [ ] Monitor.
- [ ] Estado de playa.

Definir relaciones entre las entidades.

---

### 4.2 Caracterización física de playas

Registrar cuando exista información:

#### Tipo de playa

- [ ] Arena fina.
- [ ] Arena gruesa.
- [ ] Piedra.
- [ ] Grava.
- [ ] Coral.
- [ ] Roca.
- [ ] Mezcla de materiales.

#### Dimensiones

- [ ] Longitud.
- [ ] Ancho.
- [ ] Distancia entre marea alta y baja.
- [ ] Sectores de aumento o disminución.

#### Elevación

- [ ] Altura aproximada sobre el nivel del mar.
- [ ] Coordenadas.
- [ ] Fuente o método de medición.

#### Pendiente

- [ ] Muy plana.
- [ ] Plana.
- [ ] Moderada.
- [ ] Pronunciada.

---

### 4.3 Dinámica costera

#### Erosión

- [ ] Pérdida de arena.
- [ ] Caída de árboles.
- [ ] Retroceso de línea costera.
- [ ] Exposición de raíces.
- [ ] Derrumbes.
- [ ] Escarpes.
- [ ] Fotografías.

#### Sedimentos

- [ ] Acumulación de arena.
- [ ] Bancos de sedimentos.
- [ ] Barras de arena.
- [ ] Cambios de forma de playa.

#### Corrientes

- [ ] Dirección.
- [ ] Intensidad.
- [ ] Cambios observados.
- [ ] Riesgos para embarcaciones.
- [ ] Observaciones de pescadores locales.

#### Oleaje

- [ ] Altura.
- [ ] Frecuencia.
- [ ] Dirección.
- [ ] Intensidad.

#### Mareas

- [ ] Hora de inicio.
- [ ] Hora de finalización.
- [ ] Estado de marea.
- [ ] Amplitud observada.

---

### 4.4 Condiciones climáticas

- [ ] Temperatura.
- [ ] Nubosidad.
- [ ] Lluvia.
- [ ] Dirección del viento.
- [ ] Velocidad del viento.
- [ ] Humedad.
- [ ] Estado del mar.

---

### 4.5 Ecosistemas y biodiversidad

#### Vegetación

- [ ] Vegetación natural.
- [ ] Cultivos.
- [ ] Manglares.
- [ ] Palmeras.
- [ ] Arbustos.
- [ ] Cobertura vegetal.
- [ ] Tala.
- [ ] Deforestación.
- [ ] Regeneración natural.

#### Fauna

- [ ] Aves.
- [ ] Reptiles.
- [ ] Mamíferos.
- [ ] Cangrejos.
- [ ] Peces.
- [ ] Tortugas marinas.
- [ ] Especie.
- [ ] Cantidad.
- [ ] Comportamiento.

#### Sargazo

- [ ] Nivel de presencia.
- [ ] Cobertura.
- [ ] Estado.
- [ ] Impacto.
- [ ] Bajo.
- [ ] Medio.
- [ ] Alto.

---

### 4.6 Recursos hídricos

#### Desembocaduras

- [ ] Río.
- [ ] Quebrada.
- [ ] Coordenadas.
- [ ] Ancho.
- [ ] Profundidad.
- [ ] Estado de conservación.

#### Flujo

- [ ] Dirección.
- [ ] Pendiente.
- [ ] Cambios respecto a monitoreos anteriores.

#### Calidad visual del agua

- [ ] Color.
- [ ] Turbidez.
- [ ] Espuma.
- [ ] Residuos.
- [ ] Olores.

---

### 4.7 Contaminación

Registrar:

- [ ] Plásticos.
- [ ] Botellas.
- [ ] Bolsas.
- [ ] Envases.
- [ ] Tapas.
- [ ] Vidrio.
- [ ] Metal.
- [ ] Caucho.
- [ ] Redes de pesca.
- [ ] Madera tratada.
- [ ] Residuos peligrosos.
- [ ] Material orgánico.
- [ ] Cantidad aproximada.
- [ ] Ubicación.

---

### 4.8 Infraestructura

Registrar:

- [ ] Faros.
- [ ] Muelles.
- [ ] Embarcaderos.
- [ ] Viviendas.
- [ ] Hoteles.
- [ ] Construcciones nuevas.
- [ ] Obras de protección costera.

#### Faros

- [ ] Ubicación.
- [ ] Estado.
- [ ] Tipo.
- [ ] Funcionamiento.

---

### 4.9 Caracterización social y cultural

La información social y cultural deberá manejarse respetando:

- privacidad;
- principios éticos;
- conocimiento tradicional;
- decisiones comunitarias;
- información sensible.

Registrar cuando corresponda:

- [ ] Actividades económicas.
- [ ] Pesca artesanal.
- [ ] Turismo.
- [ ] Agricultura.
- [ ] Comercio.
- [ ] Otras actividades tradicionales.

#### Conocimiento tradicional

- [ ] Comportamiento del mar.
- [ ] Temporadas de pesca.
- [ ] Cambios históricos de la playa.
- [ ] Sitios culturalmente sensibles.
- [ ] Prácticas tradicionales de conservación.

#### Vivienda

- [ ] Tipo.
- [ ] Materiales.
- [ ] Cercanía al mar.
- [ ] Vulnerabilidad frente a inundaciones.

---

### 4.10 Amenazas

Registrar:

- [ ] Erosión costera.
- [ ] Inundaciones.
- [ ] Contaminación.
- [ ] Tala.
- [ ] Turismo no controlado.
- [ ] Extracción de arena.
- [ ] Minería cercana.
- [ ] Pérdida de manglares.
- [ ] Incendios.
- [ ] Construcciones ilegales.
- [ ] Cambio climático.
- [ ] Otras amenazas.

---

### 4.11 Monitoreo de tortugas marinas

Crear un módulo específico para los arribos.

Registrar cuando sea posible:

- [ ] Fecha.
- [ ] Hora.
- [ ] Playa.
- [ ] Coordenadas.
- [ ] Especie.
- [ ] Tortuga carey.
- [ ] Tortuga caná.
- [ ] Número de individuos.
- [ ] Rastros.
- [ ] Nidos observados.
- [ ] Nidos activos.
- [ ] Nidos protegidos.
- [ ] Eventos relevantes.
- [ ] Observaciones.
- [ ] Fotografías.

---

### 4.12 Mapa de monitoreo

Crear mapa interactivo con:

- [ ] Todas las playas monitoreadas.
- [ ] Ubicación geográfica.
- [ ] Reportes georreferenciados.
- [ ] Estado actual de cada playa.
- [ ] Fecha del último reporte.
- [ ] Indicadores de arribos.
- [ ] Indicadores ambientales.

Al seleccionar una playa:

- [ ] Mostrar información básica.
- [ ] Mostrar último reporte.
- [ ] Mostrar reportes recientes.
- [ ] Mostrar historial.
- [ ] Mostrar arribos registrados.
- [ ] Mostrar fotografías públicas.
- [ ] Mostrar estado acumulado.

---

### 4.13 Historial y evolución

Crear una vista temporal de cada playa.

- [ ] Historial de reportes.
- [ ] Evolución de erosión.
- [ ] Evolución de contaminación.
- [ ] Evolución de arribos.
- [ ] Cambios físicos.
- [ ] Cambios ambientales.
- [ ] Amenazas recurrentes.

---

### 4.14 Estado semi-real de las playas

Construir un estado actual a partir de los reportes disponibles.

Ejemplo conceptual:

```text
Estado de la playa

🟢 Bueno
🟡 Atención
🟠 Vulnerable
🔴 Crítico
```

Las reglas para determinar estos estados deberán ser definidas posteriormente con criterios técnicos, científicos y comunitarios.

No se deben generar indicadores sin una metodología previamente acordada.

---

## FASE 5 — Plataforma de gestión de monitoreo

### Monitores

- [ ] Sistema de autenticación.
- [ ] Usuarios autorizados.
- [ ] Roles.
- [ ] Perfil de monitor.
- [ ] Registro de jornadas.

### Reportes

- [ ] Crear reporte.
- [ ] Guardar borradores.
- [ ] Adjuntar fotografías.
- [ ] Registrar coordenadas.
- [ ] Registrar fecha y hora.
- [ ] Permitir reportes parciales.
- [ ] Editar reportes.
- [ ] Revisar reportes.
- [ ] Publicar reportes.

### Gestión

- [ ] Panel administrativo.
- [ ] Revisar información.
- [ ] Moderar contenido.
- [ ] Administrar playas.
- [ ] Administrar usuarios.
- [ ] Administrar reportes.

---

## FASE 6 — Análisis e indicadores

Con suficientes datos acumulados:

- [ ] Indicadores de estado de playas.
- [ ] Tendencias de erosión.
- [ ] Tendencias de acumulación.
- [ ] Frecuencia de arribos.
- [ ] Distribución de especies.
- [ ] Evolución de contaminación.
- [ ] Amenazas recurrentes.
- [ ] Cambios ambientales.
- [ ] Comparación temporal entre playas.
- [ ] Gráficos.
- [ ] Estadísticas.
- [ ] Reportes periódicos.

---

## FASE 7 — Plataforma comunitaria y datos públicos

Definir qué información puede ser pública y cuál debe permanecer restringida.

### Información pública

- [ ] Estado general de playas.
- [ ] Reportes aprobados.
- [ ] Tendencias ambientales.
- [ ] Estadísticas de arribos.
- [ ] Fotografías autorizadas.
- [ ] Información institucional.

### Información restringida

- [ ] Datos personales.
- [ ] Información sensible de monitores.
- [ ] Conocimiento tradicional sensible.
- [ ] Ubicaciones que puedan poner en riesgo especies.
- [ ] Información comunitaria reservada.
- [ ] Información que COCOMANORTE determine que no debe publicarse.

---

## FASE 8 — Producción y evolución

- [ ] Dominio oficial.
- [ ] Hosting.
- [ ] HTTPS.
- [ ] Copias de seguridad.
- [ ] Monitoreo del sistema.
- [ ] Seguridad.
- [ ] Gestión de usuarios.
- [ ] Actualizaciones.
- [ ] Mantenimiento.
- [ ] Documentación técnica.
- [ ] Documentación para monitores.
- [ ] Documentación para administradores.

---

## Principios del proyecto

### Comunidad primero

La tecnología debe servir a los procesos comunitarios y no sustituirlos.

### Datos antes que visualización

Primero se debe definir correctamente qué información se registra y cómo se relaciona. Después se construyen mapas, gráficos e indicadores.

### Reportes flexibles

No todos los monitoreos tendrán la misma cantidad de información. El sistema debe permitir reportes parciales.

### Acumulación de conocimiento

El valor del sistema aumenta con el tiempo. Cada reporte debe contribuir al conocimiento histórico de las playas.

### Transparencia

La información pública debe ser comprensible y permitir conocer de dónde provienen los datos.

### Privacidad y ética

La información personal, comunitaria y culturalmente sensible debe protegerse.

### Criterios técnicos

Los indicadores y estados de las playas deberán construirse a partir de metodologías acordadas, no de estimaciones arbitrarias del sistema.

### Escalabilidad

La arquitectura debe permitir que el sitio institucional evolucione posteriormente hacia una plataforma de monitoreo ambiental y comunitario.

---

## Meta final

La visión final del proyecto es que COCOMANORTE disponga de una plataforma web que combine:

```text
INFORMACIÓN INSTITUCIONAL
          +
COMUNICACIÓN
          +
TERRITORIO
          +
CULTURA
          +
CONSERVACIÓN
          +
TURISMO
          +
MONITOREO AMBIENTAL
          +
MONITOREO DE TORTUGAS
          +
MAPA INTERACTIVO
          +
HISTORIAL DE PLAYAS
          +
ANÁLISIS DE DATOS
```

El resultado final deberá permitir que COCOMANORTE no solamente tenga presencia oficial en Internet, sino que también pueda **documentar, visualizar y comunicar el estado de su territorio y de sus playas de anidación a partir del conocimiento generado por sus propios procesos de monitoreo**.

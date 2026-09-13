# Registro de decisiones

## 2026-07-30

### Se eligió Astro
Motivo: Excelente rendimiento, muy buen SEO y sitio mayormente estático.

### Se decidió usar CSS puro y Tailwind CSS v4
Motivo: Mantenimiento limpio sin sobrecarga de runtime CSS.

---

## 2026-08-15

### Desacoplamiento de Datos en `src/data/`
Contexto: La información institucional, ambiental y turística cambia periódicamente.
Decisión: Separar todos los contenidos en archivos TypeScript tipados (`governance.ts`, `territory.ts`, `tourism.ts`, `beachMonitoring.ts`, `social.ts`).
Motivo: Permite actualizar texto y datos sin modificar la lógica interna de los componentes UI.

---

## 2026-08-20

### Implementación del Protocolo de Monitoreo Integral del Chocó
Contexto: Las comunidades requerían registrar tanto el desove de tortugas como las variables físicas, ecológicas y sociales de las playas según las exigencias del departamento del Chocó.
Decisión:
- Crear una interfaz completa `ComprehensiveMonitoringReport` en `beachMonitoring.ts`.
- Diseñar un formulario estructurado por secciones en `MonitoringForm.astro`.
- Marcar como obligatorios los datos esenciales (playa, monitor, fecha, material, erosión, fauna y nivel de residuos) y dejar opcionales los datos técnicos detallados para permitir reportes flexibles en campo.
Motivo: Asegura la usabilidad en campo sin perder rigurosidad técnica.

---

## 2026-08-22

### Menú Hambuguesa Móvil Accessible
Contexto: La barra de navegación se colapsaba en pantallas pequeñas de móviles.
Decisión: Implementar un botón toggle con script liviano en `Header.astro` y animación CSS limpia con atributos `aria-expanded` para accesibilidad.
Motivo: Mejorar la experiencia de usuario móvil en el territorio sin requerir frameworks pesados.

---

## 2026-08-25

### Sistema Híbrido de Persistencia (Supabase + localStorage)
Contexto: En la zona rural del Chocó la conectividad a internet puede ser inestable o nula durante los patrullajes.
Decisión:
- Implementar un cliente REST de Supabase en `src/lib/supabase.ts` para enviar informes a PostgreSQL cuando exista conexión.
- Mantener un fallback transparente en `localStorage` mediante `src/utils/monitoringStorage.ts`.
Motivo: Garantiza que los patrulleros no pierdan datos registrados en campo y que el sistema se sincronice automáticamente cuando haya red.

---

## 2026-08-28

### Integración de Suite de Pruebas Unitarias con Vitest
Contexto: Los algoritmos de cálculo de estado de playas, niveles de amenaza y formateo de URLs relativas requerían validación automática para evitar regresiones.
Decisión: Integrar Vitest como framework de testing unitario (`npm run test`) en `src/tests/`.
Motivo: Asegura la calidad e integridad del código en el pipeline de desarrollo y despliegue continuo.

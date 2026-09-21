/**
 * Convierte una ruta relativa interna en una URL respetando la propiedad `base` de Astro (import.meta.env.BASE_URL).
 *
 * Evita la duplicación del prefijo base (ej: `/cocomanorte-web/cocomanorte-web/...`).
 *
 * Ejemplo:
 * - getRelativeUrl("/") => "/cocomanorte-web/"
 * - getRelativeUrl("/quienes-somos") => "/cocomanorte-web/quienes-somos"
 * - getRelativeUrl("/cocomanorte-web/monitoreo") => "/cocomanorte-web/monitoreo"
 */
export function getRelativeUrl(path: string): string {
  if (!path) return import.meta.env.BASE_URL;

  // Si es un enlace externo, mailto o tel, no modificar
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const rawBase = import.meta.env.BASE_URL || "/";
  const baseUrl = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Si la ruta ya incluye el prefijo baseUrl, no duplicarlo
  if (baseUrl && (cleanPath === baseUrl || cleanPath.startsWith(`${baseUrl}/`))) {
    return cleanPath;
  }

  return `${baseUrl}${cleanPath}`;
}

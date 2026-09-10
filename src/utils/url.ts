/**
 * Convierte una ruta relativa interna en una URL respetando la propiedad `base` de Astro (import.meta.env.BASE_URL).
 *
 * Ejemplo:
 * - getRelativeUrl("/") => "/cocomanorte-web/"
 * - getRelativeUrl("/quienes-somos") => "/cocomanorte-web/quienes-somos"
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

  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

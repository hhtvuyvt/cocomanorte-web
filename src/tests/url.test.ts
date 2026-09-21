import { describe, it, expect } from "vitest";
import { getRelativeUrl } from "../utils/url";

describe("getRelativeUrl", () => {
  it("formats internal paths relative to Astro BASE_URL without duplicating base prefix", () => {
    const homeUrl = getRelativeUrl("/");
    const targetUrl = getRelativeUrl("/quienes-somos");

    expect(homeUrl).toContain("/");
    expect(targetUrl).toContain("quienes-somos");
  });

  it("prevents duplicating BASE_URL if path already starts with BASE_URL", () => {
    const url = getRelativeUrl("/cocomanorte-web/monitoreo/nuevo-reporte");
    expect(url).not.toContain("/cocomanorte-web/cocomanorte-web/");
  });

  it("returns external, mailto, tel, and anchor links unchanged", () => {
    expect(getRelativeUrl("https://facebook.com/cocomanorte")).toBe("https://facebook.com/cocomanorte");
    expect(getRelativeUrl("mailto:contacto@cocomanorte.org")).toBe("mailto:contacto@cocomanorte.org");
    expect(getRelativeUrl("tel:+573145678900")).toBe("tel:+573145678900");
    expect(getRelativeUrl("#main-content")).toBe("#main-content");
  });
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hhtvuyvt.github.io',
  base: '/cocomanorte-web',
  vite: {
    plugins: [tailwindcss()]
  }
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jazbar9.vercel.app',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
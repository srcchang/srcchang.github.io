import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://srcchang.github.io',
  base: '/drive_pass',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'vi', 'th', 'id'],
    routing: { prefixDefaultLocale: true },
  },
});

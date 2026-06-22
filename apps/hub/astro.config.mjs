import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 作品集 Hub，部署於 GitHub Pages 根網域：https://srcchang.github.io/
export default defineConfig({
  site: 'https://srcchang.github.io',
  base: '/',
  output: 'static',
  redirects: {
    '/': '/zh-TW/',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh-TW',
        locales: {
          'zh-TW': 'zh-TW',
          en: 'en',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  },
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en'],
    routing: { prefixDefaultLocale: true },
  },
});

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// 部署於 GitHub Pages 子路徑：https://srcchang.github.io/voiback/
export default defineConfig({
  site: 'https://srcchang.github.io',
  base: '/voiback',
  output: 'static',

  integrations: [
    sitemap({
      // 只收錄帶語系前綴的正式頁面，排除 noindex 的根語言偵測頁與無語系轉址 shim。
      filter: (page) => {
        const locales = ['zh-TW', 'zh-CN', 'en', 'ja', 'ko'];
        const rest = page.replace(/^https?:\/\/[^/]+\/voiback\/?/, '');
        return locales.includes(rest.split('/')[0]);
      },
      i18n: {
        defaultLocale: 'zh-TW',
        locales: {
          'zh-TW': 'zh-TW',
          'zh-CN': 'zh-CN',
          en: 'en',
          ja: 'ja',
          ko: 'ko',
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
    locales: ['zh-TW', 'zh-CN', 'en', 'ja', 'ko'],
    routing: { prefixDefaultLocale: true },
  },
});

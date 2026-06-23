import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

import astrowind from './vendor/integration';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
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
    icon({
      include: {
        tabler: ['*'],
      },
    }),
    astrowind({
      config: './src/config.yaml',
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },

  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'zh-CN', 'en', 'ja', 'ko'],
    routing: { prefixDefaultLocale: true },
  },
});

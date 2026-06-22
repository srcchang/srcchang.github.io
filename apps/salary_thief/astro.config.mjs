import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// 部署於 GitHub Pages 子路徑：https://srcchang.github.io/salary_thief/
export default defineConfig({
  site: 'https://srcchang.github.io',
  base: '/salary_thief',
  output: 'static',
  redirects: {
    '/': '/salary_thief/zh-TW/',
  },
  integrations: [
    sitemap({
      // 排除非語系前綴的 /salary_thief/privacy、/salary_thief/terms 轉址 stub
      // （保留 /salary_thief/zh-TW/privacy 等語系正式頁）
      filter: (page) =>
        !/^\/(privacy|terms)\/?$/.test(new URL(page).pathname.replace(/^\/salary_thief/, '')),
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

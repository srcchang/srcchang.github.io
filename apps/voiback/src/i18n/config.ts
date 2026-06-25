export const locales = ['zh-TW', 'zh-CN', 'en', 'ja', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh-TW';

export const localeLabels: Record<Locale, string> = {
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
};

/** 語言切換器的短代號（行動裝置窄版顯示）。 */
export const localeShortLabels: Record<Locale, string> = {
  'zh-TW': '繁',
  'zh-CN': '简',
  en: 'EN',
  ja: '日',
  ko: '한',
};

/** Open Graph `og:locale` 需用底線格式（language_TERRITORY），與 hreflang 的連字號格式不同。 */
export const ogLocales: Record<Locale, string> = {
  'zh-TW': 'zh_TW',
  'zh-CN': 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};

/** 隱私政策與服務條款的最後更新日期（集中管理，避免散落各頁硬編年份）。 */
export const LEGAL_LAST_UPDATED = '2026-06-23';

/** Strip the leading `/{locale}` segment from a path, returning the rest (or '/'). */
export function stripLocale(path: string): string {
  return path.replace(/^\/[^\/]+/, '') || '/';
}

/**
 * 部署 base 前綴（不含結尾斜線）。本站部署於子路徑 `/voiback`。
 * 取自 astro.config 的 `base`（Vite 注入 import.meta.env.BASE_URL）。
 */
export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

/** 將站內絕對路徑（以 `/` 開頭）加上部署 base 前綴。 */
export function withBase(path: string): string {
  return BASE_PATH + (path.startsWith('/') ? path : `/${path}`);
}

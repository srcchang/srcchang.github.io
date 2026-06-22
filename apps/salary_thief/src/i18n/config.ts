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

/** Open Graph `og:locale` 需用底線格式（language_TERRITORY），與 hreflang 的連字號格式不同。 */
export const ogLocales: Record<Locale, string> = {
  'zh-TW': 'zh_TW',
  'zh-CN': 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};

export const localeCurrencies: Record<Locale, { symbol: string; label: string }> = {
  'zh-TW': { symbol: 'NT$', label: 'TWD' },
  'zh-CN': { symbol: '¥', label: 'CNY' },
  en: { symbol: '$', label: 'USD' },
  ja: { symbol: '¥', label: 'JPY' },
  ko: { symbol: '₩', label: 'KRW' },
};

/** Strip the leading `/{locale}` segment from a path, returning the rest (or '/'). */
export function stripLocale(path: string): string {
  return path.replace(/^\/[^\/]+/, '') || '/';
}

/**
 * 部署 base 前綴（不含結尾斜線）。本站部署於子路徑 `/salary_thief`，
 * 故為 `/salary_thief`；若日後改部署到根網域則為 `''`。
 * 取自 astro.config 的 `base`（Vite 注入 import.meta.env.BASE_URL）。
 */
export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

/** 將站內絕對路徑（以 `/` 開頭）加上部署 base 前綴。 */
export function withBase(path: string): string {
  return BASE_PATH + (path.startsWith('/') ? path : `/${path}`);
}

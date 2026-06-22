export const locales = ['zh-TW', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh-TW';

export const localeLabels: Record<Locale, string> = {
  'zh-TW': '繁體中文',
  en: 'English',
};

/** Open Graph `og:locale` 需用底線格式（language_TERRITORY）。 */
export const ogLocales: Record<Locale, string> = {
  'zh-TW': 'zh_TW',
  en: 'en_US',
};

/** Strip the leading `/{locale}` segment from a path, returning the rest (or '/'). */
export function stripLocale(path: string): string {
  return path.replace(/^\/[^\/]+/, '') || '/';
}

/**
 * 部署 base 前綴（不含結尾斜線）。Hub 部署於根網域，故為 `''`。
 * 取自 astro.config 的 `base`（Vite 注入 import.meta.env.BASE_URL）。
 */
export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

/** 將站內絕對路徑（以 `/` 開頭）加上部署 base 前綴。 */
export function withBase(path: string): string {
  return BASE_PATH + (path.startsWith('/') ? path : `/${path}`);
}

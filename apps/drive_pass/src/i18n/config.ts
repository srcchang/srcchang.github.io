export const locales = ['zh', 'en', 'vi', 'th', 'id'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export const localeLabels: Record<Locale, string> = {
  zh: '繁體中文',
  en: 'English',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  id: 'Indonesia',
};

// <html lang> 用的 BCP 47 標籤（繁中為 zh-Hant）
export const htmlLang: Record<Locale, string> = {
  zh: 'zh-Hant',
  en: 'en',
  vi: 'vi',
  th: 'th',
  id: 'id',
};

// og:locale 格式（語言_地區）
export const ogLocale: Record<Locale, string> = {
  zh: 'zh_TW',
  en: 'en_US',
  vi: 'vi_VN',
  th: 'th_TH',
  id: 'id_ID',
};

/** Strip the leading `/{locale}` segment from a path, returning the rest (or '/'). */
export function stripLocale(path: string): string {
  return path.replace(/^\/[^\/]+/, '') || '/';
}

/**
 * 部署 base 前綴（不含結尾斜線）。本站部署於子路徑 `/drive_pass`，
 * 取自 astro.config 的 `base`（Vite 注入 import.meta.env.BASE_URL）。
 */
export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

/** 將站內絕對路徑（以 `/` 開頭）加上部署 base 前綴。 */
export function withBase(path: string): string {
  return BASE_PATH + (path.startsWith('/') ? path : `/${path}`);
}

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

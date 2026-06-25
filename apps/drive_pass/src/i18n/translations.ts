import type { Locale } from './config';

const translationModules = import.meta.glob('./locales/*.json', { eager: true });

export function getTranslations(locale: Locale) {
  const mod = translationModules[`./locales/${locale}.json`] as { default: Record<string, any> };
  return mod.default;
}

export function t(translations: Record<string, any>, key: string): string {
  return key.split('.').reduce((obj, k) => obj?.[k], translations) ?? key;
}

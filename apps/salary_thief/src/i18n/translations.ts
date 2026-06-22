import type { Locale } from './config';
import { defaultLocale } from './config';

const translationModules = import.meta.glob('./locales/*.json', { eager: true });

export function getTranslations(locale: Locale) {
  const mod = translationModules[`./locales/${locale}.json`] as {
    default: Record<string, any>;
  };
  return mod.default;
}

const fallbackTranslations = (
  translationModules[`./locales/${defaultLocale}.json`] as
    | { default: Record<string, any> }
    | undefined
)?.default;

function resolve(obj: Record<string, any> | undefined, key: string): any {
  return key.split('.').reduce<any>((acc, k) => acc?.[k], obj);
}

/**
 * Look up a translation by dot-path key. Falls back to the default locale when
 * the key is missing in the current locale, then to the key itself. Supports
 * `{name}` placeholder interpolation when `params` is provided.
 */
export function t(
  translations: Record<string, any>,
  key: string,
  params?: Record<string, string | number>
): any {
  let value = resolve(translations, key);
  if (value === undefined || value === null) {
    value = resolve(fallbackTranslations, key);
  }
  if (value === undefined || value === null) {
    return key;
  }
  if (typeof value === 'string' && params) {
    return value.replace(/\{(\w+)\}/g, (_, name) =>
      name in params ? String(params[name]) : `{${name}}`
    );
  }
  return value;
}

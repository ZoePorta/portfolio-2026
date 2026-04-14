import es from './es';
import en from './en';
import gl from './gl';

export type TranslationKey = keyof typeof es;
export type Locale = 'es' | 'en' | 'gl';

// Enforce that en and gl have exactly the same keys as es
const translations: Record<Locale, Record<TranslationKey, string>> = {
  es, en, gl,
};

export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations.es[key];
  };
}

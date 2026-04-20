import { es } from './es';
import { en } from './en';
import { gl } from './gl';

export type Locale = 'es' | 'en' | 'gl';

type Translations = typeof es;

type LeafKeys<T, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends string
    ? P extends '' ? K : `${P}.${K}`
    : T[K] extends object
    ? LeafKeys<T[K], P extends '' ? K : `${P}.${K}`>
    : never;
}[keyof T & string];

export type TranslationKey = LeafKeys<Translations>;

const dicts = { es, en, gl } as Record<Locale, Translations>;

export function useTranslations(lang: Locale) {
  function resolve(dict: Translations, key: TranslationKey): string | undefined {
    const parts = key.split('.');
    let node: unknown = dict;
    for (const part of parts) {
      if (typeof node !== 'object' || node === null) return undefined;
      node = (node as Record<string, unknown>)[part];
    }
    return typeof node === 'string' ? node : undefined;
  }

  return function t(key: TranslationKey): string {
    return resolve(dicts[lang], key) ?? resolve(dicts.es, key) ?? key;
  };
}

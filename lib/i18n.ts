import en from '@/dictionaries/en.json';
import es from '@/dictionaries/es.json';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export type Dictionary = typeof en;
export type Localized<T> = Record<Locale, T>;

const dictionaries: Record<Locale, Dictionary> = { en, es };

/**
 * Next's generated route types widen `params` to `string`, so every page
 * narrows through here. `dynamicParams = false` means the fallback is
 * unreachable in practice, it exists to satisfy the type system honestly
 * rather than with a cast.
 */
export function toLocale(value: string): Locale {
  return (locales as readonly string[]).includes(value)
    ? (value as Locale)
    : defaultLocale;
}

/** Props shape shared by every page and layout under `app/[locale]/`. */
export type LocaleParams = { params: Promise<{ locale: string }> };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Build a locale-prefixed href. `path` must start with `/` or be empty. */
export function localeHref(locale: Locale, path = ''): string {
  return `/${locale}${path}`;
}

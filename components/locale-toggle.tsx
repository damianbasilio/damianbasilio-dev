'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Dictionary, type Locale } from '@/lib/i18n';
import { cn } from '@/lib/cn';

export function LocaleToggle({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname() ?? `/${locale}`;

  function hrefFor(target: Locale): string {
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = target;
    return `/${segments.join('/')}/`;
  }

  return (
    <div
      aria-label={dict.nav.switchLanguage}
      className="flex items-center gap-1 rounded-full border border-border px-2 py-1 font-mono text-[11px]"
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center">
          {index > 0 && <span className="px-1 text-muted">/</span>}
          <Link
            href={hrefFor(code)}
            hrefLang={code}
            aria-current={code === locale ? 'true' : undefined}
            className={cn(
              'uppercase transition-colors duration-300 ease-in-out',
              code === locale
                ? 'text-text'
                : 'text-muted hover:text-text focus-visible:text-text',
            )}
          >
            {code}
          </Link>
        </span>
      ))}
    </div>
  );
}

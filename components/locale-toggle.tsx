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
      className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs"
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center">
          {index > 0 && <span className="pr-1.5 text-faint">/</span>}
          <Link
            href={hrefFor(code)}
            hrefLang={code}
            aria-current={code === locale ? 'true' : undefined}
            className={cn(
              'font-medium uppercase transition-colors duration-300',
              code === locale ? 'text-text' : 'text-muted hover:text-text',
            )}
          >
            {code}
          </Link>
        </span>
      ))}
    </div>
  );
}

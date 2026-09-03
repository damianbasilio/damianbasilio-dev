'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeHref, type Dictionary, type Locale } from '@/lib/i18n';
import { NAV_ITEMS } from '@/lib/nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleToggle } from '@/components/locale-toggle';
import { cn } from '@/lib/cn';

export function Nav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() ?? '';
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  function isActive(path: string): boolean {
    const target = `${localeHref(locale, path)}/`.replace(/\/+$/, '/');
    const here = pathname.endsWith('/') ? pathname : `${pathname}/`;
    return here === target;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href={`${localeHref(locale)}/`}
          className="font-mono text-sm font-medium tracking-tight"
          aria-label={dict.nav.home}
        >
          db<span className="text-accent-soft">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-4 rounded-full border border-border px-5 py-2 text-sm">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <li key={item.key}>
                  <Link
                    href={`${localeHref(locale, item.path)}/`}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative font-medium transition-colors duration-300 ease-in-out',
                      active
                        ? 'text-text'
                        : 'text-muted hover:text-text focus-visible:text-text',
                    )}
                  >
                    {dict.nav[item.key]}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-soft"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleToggle locale={locale} dict={dict} />
          <ThemeToggle dict={dict} />
          <button
            type="button"
            aria-label={open ? dict.nav.closeMenu : dict.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 ease-in-out hover:text-text md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-bg px-4 py-8 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={`${localeHref(locale, item.path)}/`}
                  className="block rounded-xl px-3 py-3 text-lg font-medium text-text transition-colors duration-300 ease-in-out hover:bg-card"
                >
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

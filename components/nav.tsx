'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeHref, type Dictionary, type Locale } from '@/lib/i18n';
import { NAV_ITEMS } from '@/lib/nav';
import { site } from '@/content/site';
import { SocialPill } from '@/components/social-icons';
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

  const socials = site.socials.filter((s) => s.key !== 'email');

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Desktop navigation"
        className="hidden h-16 w-full items-center justify-between border-b border-border/50 px-4 md:flex"
      >
        <div className="w-[104px]">
          <Link
            href={`${localeHref(locale)}/`}
            aria-label={dict.nav.home}
            className="text-base font-semibold tracking-tight transition-opacity duration-300 hover:opacity-70"
          >
            db<span className="text-accent">.</span>
          </Link>
        </div>

        <ul className="flex place-items-center space-x-4 rounded-full border border-border px-5 py-2 text-sm">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);
            return (
              <li key={item.key}>
                <Link
                  href={`${localeHref(locale, item.path)}/`}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'font-medium transition-colors duration-300',
                    active ? 'text-text' : 'text-muted hover:text-text',
                  )}
                >
                  {dict.nav[item.key]}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <LocaleToggle locale={locale} dict={dict} />
          <SocialPill socials={socials} />
        </div>
      </nav>

      {/* Mobile */}
      <nav
        aria-label="Mobile navigation"
        className="flex h-14 items-center justify-between gap-2.5 border-b border-border/50 px-3 md:hidden"
      >
        <Link
          href={`${localeHref(locale)}/`}
          aria-label={dict.nav.home}
          className="text-base font-semibold tracking-tight"
        >
          db<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-2">
          <LocaleToggle locale={locale} dict={dict} />
          <button
            type="button"
            aria-label={open ? dict.nav.closeMenu : dict.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 hover:text-text"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-14 z-40 bg-bg px-4 py-8 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={`${localeHref(locale, item.path)}/`}
                  className="block rounded-xl px-3 py-3 text-lg font-medium transition-colors duration-300 hover:bg-surface"
                >
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 px-3">
            <SocialPill socials={socials} className="w-fit" />
          </div>
        </div>
      )}
    </header>
  );
}

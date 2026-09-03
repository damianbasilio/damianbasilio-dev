'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeHref, type Dictionary, type Locale } from '@/lib/i18n';
import { NAV_ITEMS } from '@/lib/nav';
import { site } from '@/content/site';
import { ThemeToggle } from '@/components/theme-toggle';
import { LocaleToggle } from '@/components/locale-toggle';
import { cn } from '@/lib/cn';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  github: <path d="M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7C6.7 19.9 6.1 18 6.1 18c-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />,
  linkedin: <><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3z" /><path d="M9 9h3.8v1.7h.05a4.2 4.2 0 0 1 3.75-2c4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>,
};

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
      {/* Desktop */}
      <nav
        aria-label="Primary"
        className="hidden h-16 w-full items-center justify-between border-b border-border/60 px-4 md:flex"
      >
        <Link
          href={`${localeHref(locale)}/`}
          aria-label={dict.nav.home}
          className="w-[104px] font-mono text-sm font-medium tracking-tight transition-opacity duration-300 hover:opacity-70"
        >
          db<span className="text-accent">.</span>
        </Link>

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
                    active ? 'text-text' : 'text-faint hover:text-text',
                  )}
                >
                  {dict.nav[item.key]}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex w-[104px] items-center justify-end gap-1">
          {socials.map((social) => (
            <a
              key={social.key}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-faint transition-colors duration-300 hover:bg-card hover:text-text"
            >
              <svg
                viewBox="0 0 24 24"
                fill={social.key === 'github' ? 'currentColor' : 'none'}
                stroke={social.key === 'github' ? 'none' : 'currentColor'}
                strokeWidth="1.7"
                className="h-4 w-4"
                aria-hidden="true"
              >
                {SOCIAL_ICONS[social.key]}
              </svg>
            </a>
          ))}
          <LocaleToggle locale={locale} dict={dict} />
          <ThemeToggle dict={dict} />
        </div>
      </nav>

      {/* Mobile */}
      <nav
        aria-label="Primary"
        className="flex h-14 items-center justify-between gap-2.5 border-b border-border/60 px-3 md:hidden"
      >
        <Link
          href={`${localeHref(locale)}/`}
          aria-label={dict.nav.home}
          className="font-mono text-sm font-medium"
        >
          db<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-2">
          <LocaleToggle locale={locale} dict={dict} />
          <ThemeToggle dict={dict} />
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
              strokeWidth="1.6"
              strokeLinecap="round"
              className="h-4 w-4"
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
                  className="block rounded-xl px-3 py-3 text-lg font-medium text-text transition-colors duration-300 hover:bg-card"
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

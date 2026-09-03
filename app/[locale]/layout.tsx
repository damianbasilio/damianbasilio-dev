import type { Metadata } from 'next';
import { locales, toLocale, type LocaleParams } from '@/lib/i18n';
import { assertContentValid } from '@/content/validate';
import { ThemeProvider } from '@/components/theme-provider';

assertContentValid();

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: 'Damian Basilio',
    template: '%s · Damian Basilio',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleParams & { children: React.ReactNode }) {
  const locale = toLocale((await params).locale);

  return (
    <ThemeProvider>
      <div data-locale={locale} className="flex min-h-dvh flex-col">
        {children}
      </div>
    </ThemeProvider>
  );
}

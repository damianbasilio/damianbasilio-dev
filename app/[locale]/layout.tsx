import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { assertContentValid } from '@/content/validate';
import { ThemeProvider } from '@/components/theme-provider';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

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
  const dict = getDictionary(locale);

  return (
    <ThemeProvider>
      <div className="flex min-h-dvh flex-col">
        <Nav locale={locale} dict={dict} />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} dict={dict} />
      </div>
    </ThemeProvider>
  );
}

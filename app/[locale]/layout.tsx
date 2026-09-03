import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type Locale,
  type LocaleParams,
} from '@/lib/i18n';
import { assertContentValid } from '@/content/validate';
import { site } from '@/content/site';
import { ThemeProvider } from '@/components/theme-provider';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

assertContentValid();

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const locale = toLocale((await params).locale);

  return {
    title: {
      default: `${site.name} — ${site.role[locale]}`,
      template: `%s · ${site.name}`,
    },
    description: site.intro[locale],
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        en: '/en/',
        es: '/es/',
        'x-default': '/en/',
      },
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      url: `/${locale}/`,
      title: `${site.name} — ${site.role[locale]}`,
      description: site.tagline[locale],
      // Declared explicitly: an explicit openGraph block suppresses Next's
      // file-based opengraph-image convention, which would otherwise attach it.
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${site.name} — ${site.role[locale]}`,
      description: site.tagline[locale],
      images: ['/opengraph-image'],
    },
  };
}

/**
 * Next renders <html> only in the root layout, which has no locale in scope.
 * Static export rules out middleware, so the correct `lang` is stamped here.
 * `locale` comes from generateStaticParams and is JSON-encoded — never user input.
 */
function HtmlLang({ locale }: { locale: Locale }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang=${JSON.stringify(locale)}`,
      }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleParams & { children: React.ReactNode }) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <ThemeProvider>
      <HtmlLang locale={locale} />
      <div className="flex min-h-dvh flex-col">
        <Nav locale={locale} dict={dict} />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} dict={dict} />
      </div>
    </ThemeProvider>
  );
}

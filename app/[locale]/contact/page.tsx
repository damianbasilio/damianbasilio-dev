import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { site } from '@/content/site';
import { Card } from '@/components/card';
import { Reveal } from '@/components/reveal';
import { CopyEmail } from '@/components/copy-email';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const dict = getDictionary(toLocale((await params).locale));
  return { title: dict.contact.title, description: dict.contact.subtitle };
}

export default async function ContactPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <header className="max-w-xl">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-medium tracking-tight">
          {dict.contact.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {dict.contact.subtitle}
        </p>
        <div className="mt-6">
          <CopyEmail email={site.email} dict={dict} />
        </div>
      </header>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {site.socials.map((social, index) => (
          <Reveal key={social.key} delay={index}>
            <Card
              href={social.href}
              external={social.key !== 'email'}
              className="h-full"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent-soft">
                {dict.contact[social.key]}
              </p>
              <p className="mt-2 break-all font-mono text-sm text-text">
                {social.handle}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </main>
  );
}

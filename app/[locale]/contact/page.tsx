import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { site } from '@/content/site';
import { PageShell } from '@/components/page-shell';
import { RuledHeading } from '@/components/ruled-heading';
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
    <PageShell>
      <section className="pt-12 text-center md:pt-16">
        <h1 className="mx-auto max-w-2xl text-balance text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.04em]">
          {dict.contact.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted md:text-base">
          {dict.contact.subtitle}
        </p>
        <div className="mt-8 flex justify-center">
          <CopyEmail email={site.email} dict={dict} />
        </div>
      </section>

      <div className="mt-12 space-y-12 pb-16 md:space-y-16">
        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.nav.contact}
            title={dict.contact.heading}
            description={dict.home.contactBlurb}
          />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {site.socials.map((social, index) => (
              <Reveal key={social.key} delay={index}>
                <Card
                  href={social.href}
                  external={social.key !== 'email'}
                  className="h-full"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {dict.contact[social.key]}
                  </p>
                  <p className="mt-2 break-all font-mono text-sm text-text">
                    {social.handle}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

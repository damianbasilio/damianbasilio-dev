import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { site } from '@/content/site';
import { PageShell } from '@/components/page-shell';
import { RuledHeading, Band } from '@/components/ruled-heading';
import { Reveal } from '@/components/reveal';
import { Card } from '@/components/card';
import { StackChips } from '@/components/stack-chips';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);
  return { title: dict.about.title, description: site.role[locale] };
}

export default async function AboutPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <PageShell>
      <section className="pt-12 text-center md:pt-16">
        <img
          src={site.portrait}
          alt={site.fullName}
          width={400}
          height={500}
          className="mx-auto h-24 w-24 rounded-full border border-border object-cover"
        />
        <h1 className="mx-auto mt-8 max-w-2xl text-balance text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.05em]">
          {site.aboutHeadline[locale]}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted md:text-base">
          {site.role[locale]}. {site.location[locale]}.
        </p>
      </section>

      <div className="mt-12 space-y-12 pb-16 md:space-y-16">
        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.about.title}
            title={dict.about.introTitle}
          />
          <div className="mx-auto max-w-2xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>{site.intro[locale]}</p>
            <p>{site.aboutExtra[locale]}</p>
          </div>
        </section>

        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.about.experienceEyebrow}
            title={dict.about.timelineHeading}
          />
          <ol className="mx-auto max-w-2xl border-l border-border pl-6">
            {site.timeline.map((entry, index) => (
              /* Reveal renders a div, so it sits INSIDE the li, an <ol> may
                 only have <li> children. The dot anchors to the li. */
              <li key={entry.id} className="relative pb-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-accent"
                />
                <Reveal delay={index}>
                  <p className="text-xs text-faint">{entry.period}</p>
                  <h3 className="mt-1 font-medium">{entry.title[locale]}</h3>
                  <p className="mt-0.5 text-xs text-accent">
                    {entry.org}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {entry.body[locale]}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.home.stackTitle}
            title={dict.about.stackHeading}
          />
          <Card className="mx-auto max-w-2xl">
            <StackChips items={site.stack} />
          </Card>
        </section>
      </div>
    </PageShell>
  );
}

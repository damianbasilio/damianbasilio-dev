import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { competitions } from '@/content/competitions';
import { PageShell } from '@/components/page-shell';
import { RuledHeading } from '@/components/ruled-heading';
import { CompetitionCard } from '@/components/competition-card';
import { Reveal } from '@/components/reveal';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const dict = getDictionary(toLocale((await params).locale));
  return {
    title: dict.competitions.title,
    description: dict.competitions.subtitle,
  };
}

export default async function CompetitionsPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  const completed = competitions.filter((c) => c.status === 'completed');
  const ongoing = competitions.filter((c) => c.status === 'ongoing');
  const anchor = completed.filter((c) => c.anchor);
  const otherCompleted = completed.filter((c) => !c.anchor);

  return (
    <PageShell>
      <section className="pt-12 text-center md:pt-16">
        <h1 className="mx-auto max-w-2xl text-balance text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.04em]">
          {dict.competitions.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted md:text-base">
          {dict.competitions.subtitle}
        </p>
      </section>

      <div className="mt-12 space-y-12 pb-16 md:space-y-16">
        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.competitions.result}
            title={dict.competitions.resultsHeading}
          />
          <div className="grid grid-cols-1 gap-2">
            {anchor.map((competition, i) => (
              <Reveal key={competition.slug} delay={i}>
                <CompetitionCard
                  competition={competition}
                  locale={locale}
                  dict={dict}
                  anchor
                />
              </Reveal>
            ))}
            {otherCompleted.map((competition, i) => (
              <Reveal key={competition.slug} delay={i + 1}>
                <CompetitionCard
                  competition={competition}
                  locale={locale}
                  dict={dict}
                />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.competitions.ongoing}
            title={dict.competitions.ongoingTitle}
          />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {ongoing.map((competition, i) => (
              <Reveal key={competition.slug} delay={i}>
                <CompetitionCard
                  competition={competition}
                  locale={locale}
                  dict={dict}
                />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}

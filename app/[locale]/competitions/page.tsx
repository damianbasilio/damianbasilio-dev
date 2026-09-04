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

  // Only the anchor entry has photography; everything else is text only.
  const anchor = competitions.find((c) => c.anchor);
  const rest = competitions.filter((c) => !c.anchor);
  const completed = rest.filter((c) => c.status === 'completed');
  const ongoing = rest.filter((c) => c.status === 'ongoing');

  return (
    <PageShell>
      <section className="py-16 text-center md:py-20">
        <h1 className="mx-auto max-w-2xl text-balance text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.05em]">
          {dict.competitions.pageTitle}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted md:text-base">
          {dict.competitions.subtitle}
        </p>
      </section>

      <div className="space-y-12 pb-20 md:space-y-16">
        {anchor && (
          <section className="relative space-y-8">
            <RuledHeading
              eyebrow={dict.competitions.result}
              title={dict.competitions.resultsHeading}
            />
            <Reveal variant="tilt">
              <CompetitionCard
                competition={anchor}
                locale={locale}
                dict={dict}
                anchor
              />
            </Reveal>
          </section>
        )}

        {completed.length > 0 && (
          <section className="relative space-y-8">
            <RuledHeading
              eyebrow={dict.competitions.alsoEyebrow}
              title={dict.competitions.alsoHeading}
            />
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {completed.map((competition, i) => (
                <Reveal key={competition.slug} delay={i} variant="tilt">
                  <CompetitionCard
                    competition={competition}
                    locale={locale}
                    dict={dict}
                    showMedia={false}
                  />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {ongoing.length > 0 && (
          <section className="relative space-y-8">
            <RuledHeading
              eyebrow={dict.competitions.ongoing}
              title={dict.competitions.ongoingTitle}
            />
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {ongoing.map((competition, i) => (
                <Reveal key={competition.slug} delay={i} variant="tilt">
                  <CompetitionCard
                    competition={competition}
                    locale={locale}
                    dict={dict}
                    showMedia={false}
                  />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageShell>
  );
}

import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { competitions } from '@/content/competitions';
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

  const anchors = competitions.filter((competition) => competition.anchor);
  const rest = competitions.filter((competition) => !competition.anchor);

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <header className="max-w-2xl">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-medium tracking-tight">
          {dict.competitions.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {dict.competitions.subtitle}
        </p>
      </header>

      <div className="mt-12 space-y-4">
        {anchors.map((competition, index) => (
          <Reveal key={competition.slug} delay={index}>
            <CompetitionCard
              competition={competition}
              locale={locale}
              dict={dict}
              anchor
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {rest.map((competition, index) => (
          <Reveal key={competition.slug} delay={index + 1}>
            <CompetitionCard
              competition={competition}
              locale={locale}
              dict={dict}
            />
          </Reveal>
        ))}
      </div>
    </main>
  );
}

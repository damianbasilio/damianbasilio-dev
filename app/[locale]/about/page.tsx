import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { site } from '@/content/site';
import { Reveal } from '@/components/reveal';

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
    <main className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <header>
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-medium tracking-tight">
          {dict.about.title}
        </h1>
        <p className="mt-3 font-mono text-sm text-muted">{site.role[locale]}</p>
      </header>

      <div className="mt-10 grid gap-8 sm:grid-cols-[200px_1fr] sm:items-start">
        <img
          src={site.portrait}
          alt={site.fullName}
          width={400}
          height={500}
          className="w-full rounded-2xl border border-border object-cover"
        />
        <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          <p className="text-text">{site.tagline[locale]}</p>
          <p>{site.intro[locale]}</p>
          <p>{site.aboutExtra[locale]}</p>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
          {dict.about.timelineTitle}
        </h2>

        <ol className="mt-6 border-l border-border pl-6">
          {site.timeline.map((entry, index) => (
            /* Reveal renders a div, so it must sit INSIDE the li — an <ol>
               may only have <li> children. The dot is positioned against the
               li, not the Reveal, so it never animates out of place. */
            <li key={entry.id} className="relative pb-8 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-accent-soft"
              />
              <Reveal delay={index}>
                <p className="font-mono text-xs text-muted">{entry.period}</p>
                <h3 className="mt-1 font-medium">{entry.title[locale]}</h3>
                <p className="mt-0.5 font-mono text-xs text-accent-soft">
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
    </main>
  );
}

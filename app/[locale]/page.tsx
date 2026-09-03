import {
  getDictionary,
  localeHref,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { site } from '@/content/site';
import { projects } from '@/content/projects';
import { competitions } from '@/content/competitions';
import { Hero } from '@/components/hero';
import { PhotoStrip } from '@/components/photo-strip';
import { Card } from '@/components/card';
import { Reveal } from '@/components/reveal';
import { Media } from '@/components/media';
import { StackChips } from '@/components/stack-chips';

const MEDAL_EMOJI = { gold: '🥇', silver: '🥈', bronze: '🥉' } as const;

export default async function HomePage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  const featured = projects.find((project) => project.featured) ?? projects[0];
  const anchor =
    competitions.find((competition) => competition.anchor) ?? competitions[0];

  return (
    <main>
      <Hero locale={locale} dict={dict} />
      <PhotoStrip images={site.photoStrip} />

      <section className="mx-auto mt-16 max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          <Reveal delay={0} className="lg:col-span-7">
            <Card
              href={`${localeHref(locale, '/about')}/`}
              className="h-full min-h-52"
            >
              <h2 className="text-lg font-medium">{dict.home.aboutTitle}</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                {dict.home.aboutBlurb}
              </p>
              <p className="mt-auto pt-6 font-mono text-xs text-muted">
                {dict.home.basedIn} {site.location[locale]}
              </p>
            </Card>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-5">
            <Card
              href={`${localeHref(locale, '/competitions')}/`}
              className="h-full min-h-52"
            >
              <h2 className="text-lg font-medium">
                {dict.home.competitionsTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {dict.home.competitionsBlurb}
              </p>
              <div className="mt-auto pt-6">
                <p className="font-mono text-xs text-muted">{anchor.event}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {anchor.placements.map((placement) => (
                    <li
                      key={placement.scope[locale]}
                      className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-text"
                    >
                      <span aria-hidden="true">
                        {placement.medal ? MEDAL_EMOJI[placement.medal] : ''}
                      </span>{' '}
                      {placement.label[locale]} · {placement.scope[locale]}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={2} className="sm:col-span-2 lg:col-span-7">
            <Card
              href={`${localeHref(locale, '/projects')}/`}
              padded={false}
              className="h-full"
            >
              <div className="h-40 w-full overflow-hidden border-b border-border">
                <Media
                  src={featured.images[0]}
                  seed={featured.slug}
                  label={featured.title[locale]}
                  alt={featured.title[locale]}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent-soft">
                  {dict.home.featuredProject}
                </p>
                <h2 className="mt-2 text-lg font-medium">
                  {featured.title[locale]}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {featured.summary[locale]}
                </p>
                <dl className="mt-auto flex gap-6 pt-6">
                  {featured.metrics.map((metric) => (
                    <div key={metric.value}>
                      <dt className="font-mono text-lg text-text">
                        {metric.value}
                      </dt>
                      <dd className="text-xs text-muted">
                        {metric.label[locale]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={3} className="lg:col-span-5">
            <Card className="h-full min-h-52">
              <h2 className="text-lg font-medium">{dict.home.stackTitle}</h2>
              <p className="mt-2 text-sm text-muted">{dict.home.stackBlurb}</p>
              <StackChips items={site.stack} className="mt-4" />
            </Card>
          </Reveal>

          <Reveal delay={4} className="sm:col-span-2 lg:col-span-12">
            <Card href={`${localeHref(locale, '/contact')}/`} className="h-full">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-medium">
                    {dict.home.contactTitle}
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    {dict.home.contactBlurb}
                  </p>
                </div>
                <p className="font-mono text-sm text-accent-soft">
                  {site.email}
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

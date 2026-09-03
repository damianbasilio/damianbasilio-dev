import {
  getDictionary,
  localeHref,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { site } from '@/content/site';
import { projects } from '@/content/projects';
import { competitions } from '@/content/competitions';
import { PageShell } from '@/components/page-shell';
import { RuledHeading } from '@/components/ruled-heading';
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

  const featured = projects.find((p) => p.featured) ?? projects[0];
  const anchor = competitions.find((c) => c.anchor) ?? competitions[0];
  const ongoing = competitions.filter((c) => c.status === 'ongoing');

  return (
    <PageShell>
      <Hero locale={locale} dict={dict} />
      <PhotoStrip images={site.photoStrip} />

      <div className="mt-10 space-y-12 pb-16 md:mt-4 md:space-y-16">
        {/* ── About ─────────────────────────────────────────────── */}
        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.nav.about}
            title={dict.home.aboutHeading}
            description={dict.home.aboutBlurb}
          />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
            <Reveal delay={0} className="md:col-span-7">
              <Card
                href={`${localeHref(locale, '/about')}/`}
                className="h-full min-h-[220px]"
              >
                <h3 className="text-lg font-medium">{site.role[locale]}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  {site.aboutExtra[locale]}
                </p>
                <p className="mt-auto pt-6 text-xs text-faint">
                  {dict.home.basedIn} {site.location[locale]}
                </p>
              </Card>
            </Reveal>

            <Reveal delay={1} className="md:col-span-5">
              <Card className="h-full min-h-[220px]">
                <h3 className="text-lg font-medium">{dict.home.stackTitle}</h3>
                <p className="mt-2 text-sm text-muted">{dict.home.stackBlurb}</p>
                <StackChips items={site.stack} className="mt-4" />
              </Card>
            </Reveal>
          </div>
        </section>

        {/* ── Competitions ──────────────────────────────────────── */}
        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.nav.competitions}
            title={dict.home.competitionsHeading}
            description={dict.home.competitionsBlurb}
          />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
            <Reveal delay={0} className="md:col-span-7">
              <Card
                href={`${localeHref(locale, '/competitions')}/`}
                padded={false}
                className="h-full"
              >
                <div className="h-36 w-full overflow-hidden border-b border-border">
                  <Media
                    src={anchor.images[0]}
                    seed={anchor.slug}
                    label={anchor.event}
                    alt={anchor.event}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-medium">{anchor.event}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {anchor.placements.map((p) => (
                      <li
                        key={p.scope[locale]}
                        className="flex items-center gap-2 rounded-lg border border-border bg-bg px-2.5 py-1"
                      >
                        <span aria-hidden="true" className="text-sm">
                          {p.medal ? MEDAL_EMOJI[p.medal] : ''}
                        </span>
                        <span className="text-[11px] text-text">
                          {p.label[locale]}
                        </span>
                        <span className="text-[11px] text-faint">
                          {p.scope[locale]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={1} className="md:col-span-5">
              <Card
                href={`${localeHref(locale, '/competitions')}/`}
                className="h-full"
              >
                <h3 className="text-lg font-medium">
                  {dict.competitions.ongoing}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {ongoing.map((c) => (
                    <li
                      key={c.slug}
                      className="flex items-center gap-2 text-xs text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent motion-reduce:animate-none"
                      />
                      {c.event}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* ── Work ──────────────────────────────────────────────── */}
        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.nav.projects}
            title={dict.projects.featuredHeading}
            description={dict.projects.subtitle}
          />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
            <Reveal delay={0} className="md:col-span-12">
              <Card
                href={`${localeHref(locale, '/projects')}/`}
                padded={false}
                className="h-full"
              >
                <div className="flex h-full flex-col md:flex-row">
                  <div className="h-40 w-full shrink-0 overflow-hidden border-b border-border md:h-auto md:w-1/2 md:border-b-0 md:border-r">
                    <Media
                      src={featured.images[0]}
                      seed={featured.slug}
                      label={featured.title[locale]}
                      alt={featured.title[locale]}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-medium tracking-tight">
                      {featured.title[locale]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {featured.summary[locale]}
                    </p>
                    <dl className="mt-auto flex gap-8 pt-6">
                      {featured.metrics.map((m) => (
                        <div key={m.value}>
                          <dt className="text-xl text-text">
                            {m.value}
                          </dt>
                          <dd className="mt-0.5 text-xs text-faint">
                            {m.label[locale]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────── */}
        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.nav.contact}
            title={dict.contact.heading}
            description={dict.home.contactBlurb}
          />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
            {site.socials.map((social, i) => (
              <Reveal key={social.key} delay={i}>
                <Card
                  href={social.href}
                  external={social.key !== 'email'}
                  className="h-full"
                >
                  <p className="text-[11px] uppercase tracking-wider text-accent">
                    {dict.contact[social.key]}
                  </p>
                  <p className="mt-2 break-all text-sm text-text">
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

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
import { Timeline } from '@/components/timeline';
import { RingedAvatar } from '@/components/ringed-avatar';
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
        <RingedAvatar src={site.portrait} />
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
          <Timeline
            entries={site.timeline.map((entry) => ({
              id: entry.id,
              period: entry.period,
              org: entry.org,
              title: entry.title[locale],
              body: entry.body[locale],
            }))}
          />
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

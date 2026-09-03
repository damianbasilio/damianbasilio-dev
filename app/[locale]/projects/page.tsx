import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { projects } from '@/content/projects';
import { PageShell } from '@/components/page-shell';
import { Band } from '@/components/ruled-heading';
import { ProjectEntry } from '@/components/project-entry';
import { Reveal } from '@/components/reveal';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const dict = getDictionary(toLocale((await params).locale));
  return { title: dict.projects.title, description: dict.projects.subtitle };
}

export default async function ProjectsPage({ params }: LocaleParams) {
  const locale = toLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <PageShell>
      <section className="py-16 text-center md:py-20">
        <h1 className="mx-auto max-w-2xl text-balance text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.05em]">
          {dict.projects.pageTitle}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted md:text-base">
          {dict.projects.subtitle}
        </p>
      </section>

      <div className="space-y-16 pb-20 md:space-y-24">
        {projects.map((project, index) => (
          <div key={project.slug} className="space-y-8">
            <Band className="py-3">
              <p className="text-center text-sm font-medium text-accent">
                {index === 0
                  ? dict.home.featuredProject
                  : dict.projects.moreHeading}
              </p>
            </Band>
            <Reveal delay={index}>
              <ProjectEntry project={project} locale={locale} dict={dict} />
            </Reveal>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

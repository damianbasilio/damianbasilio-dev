import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { projects } from '@/content/projects';
import { PageShell } from '@/components/page-shell';
import { RuledHeading } from '@/components/ruled-heading';
import { ProjectCard } from '@/components/project-card';
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

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <PageShell>
      <section className="pt-12 text-center md:pt-16">
        <h1 className="mx-auto max-w-2xl text-balance text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.05em]">
          {dict.projects.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted md:text-base">
          {dict.projects.subtitle}
        </p>
      </section>

      <div className="mt-12 space-y-12 pb-16 md:space-y-16">
        <section className="relative space-y-8">
          <RuledHeading
            eyebrow={dict.home.featuredProject}
            title={dict.projects.featuredHeading}
          />
          <div className="grid grid-cols-1 gap-2">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i}>
                <ProjectCard
                  project={project}
                  locale={locale}
                  dict={dict}
                  featured
                />
              </Reveal>
            ))}
          </div>
        </section>

        {rest.length > 0 && (
          <section className="relative space-y-8">
            <RuledHeading
              eyebrow={dict.nav.projects}
              title={dict.projects.moreHeading}
            />
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {rest.map((project, i) => (
                <Reveal key={project.slug} delay={i}>
                  <ProjectCard project={project} locale={locale} dict={dict} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageShell>
  );
}

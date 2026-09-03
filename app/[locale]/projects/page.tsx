import type { Metadata } from 'next';
import {
  getDictionary,
  locales,
  toLocale,
  type LocaleParams,
} from '@/lib/i18n';
import { projects } from '@/content/projects';
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

  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <header className="max-w-2xl">
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-medium tracking-tight">
          {dict.projects.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {dict.projects.subtitle}
        </p>
      </header>

      <div className="mt-12 space-y-4">
        {featured.map((project, index) => (
          <Reveal key={project.slug} delay={index}>
            <ProjectCard
              project={project}
              locale={locale}
              dict={dict}
              featured
            />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.slug} delay={index + 1}>
              <ProjectCard project={project} locale={locale} dict={dict} />
            </Reveal>
          ))}
        </div>
      )}
    </main>
  );
}

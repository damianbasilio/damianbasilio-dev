import type { Project } from '@/content/types';
import type { Dictionary, Locale } from '@/lib/i18n';
import { Card } from '@/components/card';
import { Media } from '@/components/media';
import { StackChips } from '@/components/stack-chips';
import { cn } from '@/lib/cn';

export function ProjectCard({
  project,
  locale,
  dict,
  featured = false,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  featured?: boolean;
}) {
  const statusLabel =
    project.status === 'closed-source'
      ? dict.projects.closedSource
      : dict.projects.openSource;

  return (
    <Card interactive padded={false} className="h-full">
      <div
        className={cn(
          'w-full overflow-hidden border-b border-border',
          featured ? 'h-56 sm:h-72' : 'h-44',
        )}
      >
        <Media
          src={project.images[0]}
          seed={project.slug}
          label={project.title[locale]}
          alt={project.title[locale]}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-muted">
            {project.year}
          </span>
          <span className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
            {statusLabel}
          </span>
        </div>

        <h2
          className={cn(
            'mt-3 font-medium tracking-tight',
            featured ? 'text-2xl' : 'text-lg',
          )}
        >
          {project.title[locale]}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.summary[locale]}
        </p>

        {project.metrics.length > 0 && (
          <dl className="mt-5 flex flex-wrap gap-6">
            {project.metrics.map((metric) => (
              <div key={metric.value}>
                <dt className="font-mono text-lg text-text">{metric.value}</dt>
                <dd className="text-xs text-muted">{metric.label[locale]}</dd>
              </div>
            ))}
          </dl>
        )}

        <StackChips items={project.stack} className="mt-5" />

        <details className="group/details mt-5">
          <summary className="cursor-pointer list-none font-mono text-xs text-accent-soft transition-opacity duration-300 ease-in-out hover:opacity-80 [&::-webkit-details-marker]:hidden">
            <span className="group-open/details:hidden">
              {dict.projects.showDetails} →
            </span>
            <span className="hidden group-open/details:inline">
              {dict.projects.hideDetails} ↑
            </span>
          </summary>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
            {project.body[locale].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </details>

        {project.links.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-3 pt-6">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted underline decoration-border underline-offset-4 transition-colors duration-300 ease-in-out hover:text-text hover:decoration-accent-soft focus-visible:text-text"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}

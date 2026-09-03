import type { Project } from '@/content/types';
import type { Dictionary, Locale } from '@/lib/i18n';
import { Media } from '@/components/media';
import { StackChips } from '@/components/stack-chips';

/**
 * A full-width project entry: heading, prose, a large screenshot, then links.
 * The reference site presents projects this way rather than as a card grid —
 * it gives the imagery room and reads far more premium.
 */
export function ProjectEntry({
  project,
  locale,
  dict,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
}) {
  const statusLabel =
    project.status === 'closed-source'
      ? dict.projects.closedSource
      : dict.projects.openSource;

  return (
    <article className="space-y-6">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <div className="flex items-center justify-center gap-3 text-xs text-faint">
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>{statusLabel}</span>
        </div>

        <h2 className="text-balance text-2xl font-medium tracking-[-0.02em]">
          {project.title[locale]}
        </h2>

        <p className="text-balance text-sm leading-relaxed text-muted">
          {project.summary[locale]}
        </p>
      </div>

      <div className="overflow-hidden rounded-xl drama-shadow">
        <div className="aspect-[16/9] w-full">
          <Media
            src={project.images[0]}
            seed={project.slug}
            label={project.title[locale]}
            alt={project.title[locale]}
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl space-y-4">
        {project.body[locale].map((paragraph, index) => (
          <p key={index} className="text-sm leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}

        {project.metrics.length > 0 && (
          <dl className="flex flex-wrap gap-10 pt-2">
            {project.metrics.map((metric) => (
              <div key={metric.value}>
                <dt className="text-xl font-medium">{metric.value}</dt>
                <dd className="mt-0.5 text-xs text-faint">
                  {metric.label[locale]}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <StackChips items={project.stack} className="pt-2" />

        {project.links.length > 0 && (
          <ul className="flex flex-wrap gap-3 pt-2">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface"
                >
                  {dict.projects.visit} {link.label}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-faint transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

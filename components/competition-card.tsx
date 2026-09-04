import type { Competition } from '@/content/types';
import type { Dictionary, Locale } from '@/lib/i18n';
import { Card } from '@/components/card';
import { Media } from '@/components/media';
import { StackChips } from '@/components/stack-chips';
import { cn } from '@/lib/cn';

const MEDAL_EMOJI = { gold: '🥇', silver: '🥈', bronze: '🥉' } as const;

export function CompetitionCard({
  competition,
  locale,
  dict,
  anchor = false,
}: {
  competition: Competition;
  locale: Locale;
  dict: Dictionary;
  anchor?: boolean;
}) {
  const ongoing = competition.status === 'ongoing';

  return (
    <Card interactive padded={false} className="h-full">
      {/* Card's inner wrapper is always flex-col, so the row layout lives here. */}
      <div className={cn('flex h-full flex-col', anchor && 'md:flex-row')}>
        <div
          className={cn(
            'w-full shrink-0 overflow-hidden border-border',
            anchor
              ? 'h-48 border-b md:h-auto md:w-2/5 md:border-b-0 md:border-r'
              : 'h-36 border-b',
          )}
        >
          <Media
            src={competition.images[0]}
            seed={competition.slug}
            label={competition.event}
            alt={competition.event}
            focus={competition.focus}
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] text-muted">
              {competition.date}
            </span>
            {ongoing && (
              <span className="flex items-center gap-1.5 rounded-md border border-accent-soft/50 px-2 py-0.5 text-[11px] text-accent-soft">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-soft motion-reduce:animate-none"
                />
                {dict.competitions.ongoing}
              </span>
            )}
          </div>

          <h2
            className={cn(
              'mt-3 font-medium tracking-tight',
              anchor ? 'text-2xl' : 'text-lg',
            )}
          >
            {competition.event}
          </h2>

          {(competition.organizer || competition.location) && (
            <p className="mt-1 text-xs text-muted">
              {[competition.organizer, competition.location?.[locale]]
                .filter(Boolean)
                .join(' · ')}
            </p>
          )}

          <p className="mt-3 text-sm leading-relaxed text-muted">
            {competition.summary[locale]}
          </p>

          {competition.placements.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {competition.placements.map((placement) => (
                <li
                  key={`${placement.scope[locale]}-${placement.label[locale]}`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-1.5"
                >
                  {placement.medal && (
                    <span aria-hidden="true" className="text-sm">
                      {MEDAL_EMOJI[placement.medal]}
                    </span>
                  )}
                  <span className="text-[11px] text-text">
                    {placement.label[locale]}
                  </span>
                  <span className="text-[11px] text-muted">
                    {placement.scope[locale]}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-xs text-muted">
              {dict.competitions.noResultYet}
            </p>
          )}

          {competition.stack && competition.stack.length > 0 && (
            <StackChips items={competition.stack} className="mt-5" />
          )}

          {competition.links && competition.links.length > 0 && (
            <ul className="mt-auto flex flex-wrap gap-3 pt-6">
              {competition.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted underline decoration-border underline-offset-4 transition-colors duration-300 ease-in-out hover:text-text hover:decoration-accent-soft focus-visible:text-text"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
}

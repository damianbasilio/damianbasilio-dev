'use client';

import { useReveal } from '@/lib/use-reveal';

type Entry = {
  id: string;
  period: string;
  org: string;
  title: string;
  body: string;
};

/**
 * Vertical timeline whose rail draws downward on reveal, with each dot
 * popping in after the line reaches it.
 */
export function Timeline({ entries }: { entries: Entry[] }) {
  const { ref, revealed } = useReveal<HTMLOListElement>();

  return (
    <ol
      ref={ref}
      data-in={revealed ? '' : undefined}
      className="timeline relative mx-auto max-w-2xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border before:content-['']"
    >
      {entries.map((entry, index) => (
        <li
          key={entry.id}
          style={{ '--i': index } as React.CSSProperties}
          className="relative pb-8 last:pb-0"
        >
          <span
            aria-hidden="true"
            className="timeline-dot absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-accent"
          />
          <p className="text-xs text-faint">{entry.period}</p>
          <h3 className="mt-1 font-medium">{entry.title}</h3>
          <p className="mt-0.5 text-xs text-accent">{entry.org}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{entry.body}</p>
        </li>
      ))}
    </ol>
  );
}

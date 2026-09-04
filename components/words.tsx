'use client';

import { useReveal } from '@/lib/use-reveal';
import { cn } from '@/lib/cn';

/**
 * Reveals a line word by word, each rising out of its own clipped row so the
 * words appear to swing up from behind the line above.
 */
export function Words({
  text,
  className,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  /** Milliseconds before the first word moves. */
  startDelay?: number;
}) {
  const { ref, revealed } = useReveal<HTMLSpanElement>();
  const words = text.split(' ');

  return (
    <span
      ref={ref}
      data-in={revealed ? '' : undefined}
      className={cn('words', className)}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="word-mask">
          <span
            className="word"
            style={
              { '--wd': `${startDelay + i * 55}ms` } as React.CSSProperties
            }
          >
            {word}
          </span>
          {i < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </span>
  );
}

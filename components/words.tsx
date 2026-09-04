'use client';

import { Fragment, useEffect, useState } from 'react';
import { useReveal } from '@/lib/use-reveal';
import { cn } from '@/lib/cn';

/**
 * Reveals a line word by word, each rising out of its own clipped row so the
 * words appear to swing up from behind the line above.
 *
 * The spaces are plain text nodes BETWEEN the masks, never inside them: a
 * space inside an `overflow: hidden` inline-block gets clipped and the words
 * run together.
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
  const [animate, setAnimate] = useState(true);
  const words = text.split(' ');

  /**
   * This is the headline, so it must never be able to sit invisible. If the
   * animation cannot actually play (reduced motion, or the document is hidden
   * so transitions never advance), drop the transition and show the words.
   */
  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduced || document.visibilityState !== 'visible') setAnimate(false);
  }, []);

  return (
    <span
      ref={ref}
      data-in={revealed ? '' : undefined}
      className={cn('words', !animate && 'words-static', className)}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className="word-mask">
            <span
              className="word"
              style={
                { '--wd': `${startDelay + i * 55}ms` } as React.CSSProperties
              }
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </span>
  );
}

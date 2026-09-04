'use client';

import { useReveal } from '@/lib/use-reveal';
import { cn } from '@/lib/cn';

export type RevealVariant = 'rise' | 'tilt' | 'unveil';

/**
 * Wraps content and plays an entrance once it scrolls into view. The hidden
 * start state lives in CSS under `.js`, so the markup is always in its final
 * state for non-JS visitors.
 */
export function Reveal({
  children,
  delay = 0,
  variant = 'rise',
  className,
}: {
  children: React.ReactNode;
  /** Stagger index, not milliseconds. Capped at 5. */
  delay?: number;
  variant?: RevealVariant;
  className?: string;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const steps = Math.min(delay, 5);

  return (
    <div
      ref={ref}
      data-reveal={variant}
      data-in={revealed ? '' : undefined}
      style={{ '--d': `${steps * 80}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}

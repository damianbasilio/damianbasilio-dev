'use client';

import { useReveal } from '@/lib/use-reveal';
import { cn } from '@/lib/cn';

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  /** Stagger index, not milliseconds. Capped at 5. */
  delay?: number;
  className?: string;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const steps = Math.min(delay, 5);

  return (
    <div
      ref={ref}
      data-reveal=""
      style={{ transitionDelay: `${steps * 70}ms` }}
      className={cn(
        'transition-all duration-500 ease-out motion-reduce:transition-none',
        revealed ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  );
}

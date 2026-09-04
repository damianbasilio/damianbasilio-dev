'use client';

import { useReveal } from '@/lib/use-reveal';
import { cn } from '@/lib/cn';

/** Technology chips that pop in one after another once the list scrolls in. */
export function StackChips({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const { ref, revealed } = useReveal<HTMLUListElement>();

  return (
    <ul
      ref={ref}
      data-in={revealed ? '' : undefined}
      className={cn('chips flex flex-wrap gap-1.5', className)}
    >
      {items.map((item, i) => (
        <li
          key={item}
          style={{ '--i': i } as React.CSSProperties}
          className="chip rounded-md border border-border px-2 py-0.5 text-[11px] leading-5 text-muted transition-colors duration-300 hover:border-accent/40 hover:text-text"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

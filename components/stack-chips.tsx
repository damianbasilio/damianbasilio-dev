import { cn } from '@/lib/cn';

export function StackChips({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-border px-2 py-0.5 text-[11px] leading-5 text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

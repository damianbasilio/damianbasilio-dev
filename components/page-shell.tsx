import { cn } from '@/lib/cn';

/**
 * The bordered centre column every page lives in: hatched 32px rails on
 * either side of the content, with a blurred accent glow behind the whole
 * column. Mirrors the reference site's `grid-cols-[32px_1fr_32px]` shell.
 */
export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative grid flex-1 grid-cols-1 lg:grid-cols-[32px_1fr_32px]">
      <div
        aria-hidden="true"
        className="hidden w-full border-r border-border rail-hatch lg:block"
      />
      <div className={cn('relative col-span-1 px-4 md:px-8 lg:px-8', className)}>
        {children}
      </div>
      <div
        aria-hidden="true"
        className="hidden w-full border-l border-border rail-hatch lg:block"
      />
    </div>
  );
}

/** Full-height blurred accent column sitting behind the content. */
export function BackdropGlow() {
  return (
    <div
      aria-hidden="true"
      className="backdrop-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-[840px] -translate-x-1/2 opacity-[0.07] blur-3xl"
    />
  );
}

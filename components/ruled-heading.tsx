import { cn } from '@/lib/cn';

/**
 * Section header: an accent eyebrow and a large centred heading, each inside
 * a band bounded by hairlines that bleed out past the content column to the
 * rails. This is the reference site's dominant structural motif.
 */
export function RuledHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="band relative w-full py-3">
        <p className="text-center text-sm font-medium text-accent">{eyebrow}</p>
      </div>

      <div className="band relative w-full py-6">
        <h2 className="mx-auto max-w-lg text-balance text-center text-[clamp(1.75rem,4vw,2rem)] font-medium leading-tight tracking-[-0.03em] text-text">
          {title}
        </h2>
      </div>

      {description && (
        <p className="mx-auto max-w-xl text-balance text-center text-sm leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

/** A single ruled band, for one-off use (page titles, dividers). */
export function Band({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('band relative w-full', className)}>{children}</div>
  );
}

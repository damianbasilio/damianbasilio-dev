import { cn } from '@/lib/cn';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** When set, the card renders as an anchor and gains the hover treatment. */
  href?: string;
  /** Force the hover treatment on a non-link card. */
  interactive?: boolean;
  external?: boolean;
  /** Set false for cards holding an edge-to-edge image that pad their own body. */
  padded?: boolean;
};

/** Slow-out curve; makes the hover feel like it settles rather than snaps. */
const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

export function Card({
  children,
  className,
  href,
  interactive = false,
  external = false,
  padded = true,
}: CardProps) {
  const isInteractive = interactive || Boolean(href);

  const body = (
    <>
      {isInteractive && (
        <>
          {/* Corner wash */}
          <span
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute inset-0 z-0 bg-gradient-to-tl from-accent/20 via-transparent to-transparent opacity-0 transition-opacity duration-500',
              EASE,
              'group-hover:opacity-100 group-focus-visible:opacity-100',
            )}
          />
          {/* Sheen sweeping across on entry */}
          <span
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/[0.07] to-transparent transition-transform duration-700',
              EASE,
              'group-hover:translate-x-full group-focus-visible:translate-x-full',
            )}
          />
          {/* Arrow pill */}
          <span
            aria-hidden="true"
            className={cn(
              'pointer-events-none absolute bottom-4 right-4 z-20 flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-accent/15 text-accent opacity-0 transition-all duration-500',
              EASE,
              'group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100',
              'group-focus-visible:translate-y-[-8px] group-focus-visible:rotate-0 group-focus-visible:opacity-100',
            )}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </>
      )}
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </>
  );

  const classes = cn(
    'group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card',
    padded && 'p-6',
    isInteractive && [
      'transition-[background-color,border-color,box-shadow,transform] duration-500',
      EASE,
      'hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface hover:shadow-[0_8px_30px_-12px_rgb(0_0_0_/_0.18)]',
      'focus-visible:-translate-y-0.5 focus-visible:border-accent/40 focus-visible:bg-surface',
      'motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0',
    ],
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {body}
      </a>
    );
  }

  return <div className={classes}>{body}</div>;
}

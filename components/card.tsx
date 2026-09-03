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
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tl from-accent/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-focus-visible:opacity-100"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-4 right-4 z-20 flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-accent/20 text-accent-soft opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100 group-focus-visible:translate-y-[-8px] group-focus-visible:rotate-0 group-focus-visible:opacity-100"
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
    isInteractive &&
      'transition-colors duration-300 ease-in-out hover:border-accent-soft/60 hover:bg-surface focus-visible:border-accent-soft/60 focus-visible:bg-surface',
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

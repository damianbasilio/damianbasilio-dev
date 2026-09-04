'use client';

import { useRef } from 'react';
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
  const ref = useRef<HTMLElement | null>(null);
  const isInteractive = interactive || Boolean(href);

  /**
   * Track the pointer as a percentage of the card so the spotlight, the sheen
   * and the border highlight can all follow it. Written straight to CSS custom
   * properties: no React state, so this never re-renders.
   */
  function onPointerMove(event: React.PointerEvent<HTMLElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    node.style.setProperty('--mx', `${x}%`);
    node.style.setProperty('--my', `${y}%`);
  }

  function onPointerLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty('--mx', '50%');
    node.style.setProperty('--my', '50%');
  }

  const body = (
    <>
      {isInteractive && (
        <>
          {/* Spotlight that follows the cursor */}
          <span aria-hidden="true" className="card-spotlight" />
          {/* Corner wash */}
          <span aria-hidden="true" className="card-wash" />
          {/* Sheen sweeping across on entry */}
          <span aria-hidden="true" className="card-sheen" />
          {/* Arrow pill */}
          <span aria-hidden="true" className="card-pill">
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
      <div className="card-body relative z-10 flex h-full flex-col">
        {children}
      </div>
    </>
  );

  const classes = cn(
    'card group relative flex flex-col overflow-hidden rounded-2xl bg-card',
    padded && 'p-6',
    isInteractive && 'card-interactive',
    className,
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        onPointerMove={isInteractive ? onPointerMove : undefined}
        onPointerLeave={isInteractive ? onPointerLeave : undefined}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {body}
      </a>
    );
  }

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={classes}
      onPointerMove={isInteractive ? onPointerMove : undefined}
      onPointerLeave={isInteractive ? onPointerLeave : undefined}
    >
      {body}
    </div>
  );
}

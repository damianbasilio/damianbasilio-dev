'use client';

import { cn } from '@/lib/cn';

/** Per-photo resting tilt, in degrees — small and irregular, never uniform. */
const TILTS = [-3.4, 1.3, 3.4, -1.7, -1.2, 2.4];

/**
 * Overlapping row of large square photos that deals itself out like a deck:
 * every photo starts stacked on the centre one and settles into place with a
 * staggered delay. Hovering lifts a photo, straightens it and brings it forward.
 */
export function PhotoStrip({ images }: { images: string[] }) {
  const mid = (images.length - 1) / 2;

  return (
    <section
      aria-label="Photos"
      className="relative mt-14 flex justify-center overflow-hidden py-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-30 w-1/6 bg-gradient-to-r from-bg to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-30 w-1/6 bg-gradient-to-l from-bg to-transparent"
      />

      <div className="flex w-fit">
        {images.map((src, i) => (
          <div
            key={src}
            className="deal group relative -mx-7 shrink-0 sm:-mx-8"
            style={
              {
                '--tilt': `${TILTS[i % TILTS.length]}deg`,
                '--from-x': `${(mid - i) * 150}px`,
                animationDelay: `${i * 90}ms`,
              } as React.CSSProperties
            }
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-lg border border-border/60 bg-surface shadow-sm shadow-slate-900/30 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-52 sm:w-52">
              <img
                src={src}
                alt=""
                width={440}
                height={440}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

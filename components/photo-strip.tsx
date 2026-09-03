import { cn } from '@/lib/cn';

const TILTS = ['-rotate-6', 'rotate-3', '-rotate-2', 'rotate-6', '-rotate-3'];

export function PhotoStrip({ images }: { images: string[] }) {
  return (
    <section
      aria-label="Photos"
      className="relative mt-12 flex justify-center gap-3 overflow-hidden py-4"
    >
      {/* Edge masks fade the strip into the page, like the reference marquee. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/5 bg-gradient-to-r from-bg to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-1/5 bg-gradient-to-l from-bg to-transparent"
      />
      {images.map((src, index) => (
        <div
          key={src}
          className={cn(
            'group h-36 w-28 shrink-0 overflow-hidden rounded-xl border-2 border-border/40 bg-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-30 hover:rotate-0 hover:scale-110 hover:shadow-[0_12px_40px_-12px_rgb(0_0_0_/_0.3)] sm:h-44 sm:w-36',
            TILTS[index % TILTS.length],
          )}
        >
          <img
            src={src}
            alt=""
            width={400}
            height={500}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        </div>
      ))}
    </section>
  );
}

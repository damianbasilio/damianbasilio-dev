import { cn } from '@/lib/cn';

const TILTS = ['-rotate-6', 'rotate-3', '-rotate-2', 'rotate-6', '-rotate-3'];

export function PhotoStrip({ images }: { images: string[] }) {
  return (
    <section
      aria-label="Photos"
      className="mt-16 flex justify-start gap-4 overflow-x-auto px-4 pb-6 [scrollbar-width:none] md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden"
    >
      {images.map((src, index) => (
        <div
          key={src}
          className={cn(
            'group h-40 w-32 shrink-0 overflow-hidden rounded-xl border border-border bg-card transition-transform duration-300 ease-in-out hover:z-10 hover:rotate-0 hover:scale-105 sm:h-52 sm:w-40',
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
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      ))}
    </section>
  );
}

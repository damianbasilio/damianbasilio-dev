import { cn } from '@/lib/cn';

/** Deterministic hue from a string, so the same slug always gets the same gradient. */
function hueFromSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 360;
  }
  return hash;
}

function initials(label: string): string {
  return label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}

export function Media({
  src,
  alt,
  seed,
  label,
  className,
  width = 1600,
  height = 900,
}: {
  src?: string;
  alt: string;
  /** Stable string (usually a slug) that determines the fallback gradient. */
  seed: string;
  /** Text the fallback derives its initials from. */
  label: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={cn('h-full w-full object-cover', className)}
      />
    );
  }

  const hue = hueFromSeed(seed);

  return (
    <div
      role="img"
      aria-label={alt}
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(${hue} 30% 22%), hsl(${(hue + 40) % 360} 35% 12%))`,
      }}
      className={cn('flex h-full w-full items-center justify-center', className)}
    >
      <span className="font-mono text-2xl font-medium tracking-widest text-white/40">
        {initials(label)}
      </span>
    </div>
  );
}

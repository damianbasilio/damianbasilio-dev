import type { Medal as MedalType } from '@/content/types';

/** Restrained metallic tints; the text label always carries the real meaning. */
const TINT: Record<MedalType, string> = {
  gold: '#b8860b',
  silver: '#8a8a94',
  bronze: '#a4643c',
};

/**
 * Award icon drawn on the same 4.75-19.25 grid and 1.5 stroke weight as the
 * social icons, so the whole site uses one icon language.
 */
export function Medal({ medal }: { medal: MedalType }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={TINT[medal]}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="14.25" r="5" />
      <path d="M9.5 4.75h5M10.25 4.75 8.5 9.25M13.75 4.75l1.75 4.5" />
    </svg>
  );
}

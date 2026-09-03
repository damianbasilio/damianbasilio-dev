import type { Dictionary } from '@/lib/i18n';

export const NAV_ITEMS = [
  { key: 'home', path: '' },
  { key: 'about', path: '/about' },
  { key: 'projects', path: '/projects' },
  { key: 'competitions', path: '/competitions' },
  { key: 'contact', path: '/contact' },
] as const satisfies readonly {
  key: keyof Dictionary['nav'];
  path: string;
}[];

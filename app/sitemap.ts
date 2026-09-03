import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { NAV_ITEMS } from '@/lib/nav';
import { site } from '@/content/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    NAV_ITEMS.map((item) => ({
      url: `${site.url}/${locale}${item.path}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: item.path === '' ? 1 : 0.7,
    })),
  );
}

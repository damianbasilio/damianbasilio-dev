import type { Dictionary, Locale } from '@/lib/i18n';
import { site } from '@/content/site';
import { Band } from '@/components/ruled-heading';
import { RingedAvatar } from '@/components/ringed-avatar';

export function Hero({
  locale,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="pt-6 md:pt-10">
      <RingedAvatar />

      <div className="mt-6 space-y-4">
        <Band className="py-6">
          <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl md:leading-[64px]">
            {site.greeting[locale]}
            <br />
            {site.heroTagline[locale]}
          </h1>
        </Band>

        <Band className="py-6">
          <p className="mx-auto max-w-xl text-balance text-center text-base leading-relaxed text-muted">
            {site.heroIntro[locale]}
          </p>
        </Band>
      </div>
    </section>
  );
}

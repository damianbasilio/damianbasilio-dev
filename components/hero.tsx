import type { Dictionary, Locale } from '@/lib/i18n';
import { site } from '@/content/site';
import { Band } from '@/components/ruled-heading';

/**
 * Avatar sits inside two concentric rings — an outer hairline circle and an
 * inner ringed disc — matching the reference site's framed portrait.
 */
function RingedAvatar() {
  return (
    <div className="relative my-5 md:mt-9">
      <div className="mx-auto flex h-[141px] w-[141px] items-center justify-center rounded-full border border-border/50">
        <div className="flex h-[116px] w-[116px] items-center justify-center rounded-full border-[1.5px] border-border/50 bg-bg shadow-[inset_0_2px_4px_rgb(0_0_0_/_0.04)]">
          <img
            src={site.avatar}
            alt={site.fullName}
            width={512}
            height={512}
            /* Above the fold: fetch eagerly and at high priority. */
            fetchPriority="high"
            decoding="async"
            className="h-[100px] w-[100px] rounded-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
        </div>
      </div>
    </div>
  );
}

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

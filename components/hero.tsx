import { localeHref, type Dictionary, type Locale } from '@/lib/i18n';
import { site } from '@/content/site';

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="pt-12 text-center md:pt-16">
      <img
        src={site.avatar}
        alt={site.fullName}
        width={512}
        height={512}
        /* Above the fold: fetch eagerly and at high priority. */
        fetchPriority="high"
        decoding="async"
        className="mx-auto h-[100px] w-[100px] rounded-full object-cover transition-opacity duration-300 hover:opacity-90"
      />

      <h1 className="mx-auto mt-8 max-w-2xl text-balance text-[clamp(2.25rem,5.5vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.05em]">
        {site.greeting[locale]}
        <br />
        {site.tagline[locale]}
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted md:text-base">
        {site.intro[locale]}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`${localeHref(locale, '/projects')}/`}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
        >
          {dict.home.viewProjects}
        </a>
        <a
          href={`${localeHref(locale, '/contact')}/`}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card"
        >
          {dict.home.getInTouch}
        </a>
      </div>
    </section>
  );
}

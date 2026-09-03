import { localeHref, type Dictionary, type Locale } from '@/lib/i18n';
import { site } from '@/content/site';

export function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="mx-auto max-w-2xl px-4 pt-16 text-center sm:pt-24">
      <img
        src={site.avatar}
        alt={site.fullName}
        width={96}
        height={96}
        className="mx-auto h-20 w-20 rounded-full border border-border object-cover sm:h-24 sm:w-24"
      />

      <h1 className="mt-8 text-[clamp(2.25rem,6vw,3.75rem)] font-medium leading-[1.05] tracking-tight">
        {site.greeting[locale]}
        <span className="block text-muted">{site.tagline[locale]}</span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted sm:text-base">
        {site.intro[locale]}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`${localeHref(locale, '/projects')}/`}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity duration-300 ease-in-out hover:opacity-90 focus-visible:opacity-90"
        >
          {dict.home.viewProjects}
        </a>
        <a
          href={`${localeHref(locale, '/contact')}/`}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors duration-300 ease-in-out hover:border-accent-soft hover:bg-card focus-visible:border-accent-soft"
        >
          {dict.home.getInTouch}
        </a>
      </div>
    </section>
  );
}

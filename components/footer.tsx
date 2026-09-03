import { localeHref, type Dictionary, type Locale } from '@/lib/i18n';
import { site } from '@/content/site';
import { NAV_ITEMS } from '@/lib/nav';

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="flex flex-col gap-8 px-4 py-10 md:flex-row md:justify-between md:px-8">
        <div className="max-w-xs">
          <p className="font-mono text-sm font-medium">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-sm text-muted">{site.role[locale]}</p>
          <p className="mt-4 text-xs text-faint">{dict.footer.builtWith}</p>
        </div>

        <div className="flex gap-12">
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <a
                    href={`${localeHref(locale, item.path)}/`}
                    className="text-muted transition-colors duration-300 hover:text-text focus-visible:text-text"
                  >
                    {dict.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-col gap-2 text-sm">
            {site.socials.map((social) => (
              <li key={social.key}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors duration-300 hover:text-text focus-visible:text-text"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 px-4 py-6 md:px-8">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {site.fullName}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}

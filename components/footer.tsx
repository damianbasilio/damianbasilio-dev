import { localeHref, type Dictionary, type Locale } from '@/lib/i18n';
import { site } from '@/content/site';
import { NAV_ITEMS } from '@/lib/nav';
import { SocialPill } from '@/components/social-icons';

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const socials = site.socials.filter((s) => s.key !== 'email');

  const columns = [
    { label: dict.footer.general, items: NAV_ITEMS.slice(0, 3) },
    { label: dict.footer.specifics, items: NAV_ITEMS.slice(3) },
  ];

  return (
    <footer className="relative mt-auto border-t border-border/50">
      <div className="px-4 lg:flex">
        {/* Left panel: who, copyright, socials */}
        <div className="flex w-full flex-col justify-between gap-6 py-8 lg:pr-16">
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {site.footerBio[locale]}
          </p>
          <div className="flex items-end justify-between gap-4">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} {site.fullName}
            </p>
            <SocialPill socials={socials} />
          </div>
        </div>

        {/* Right panel: link columns */}
        <div className="flex w-full flex-col items-start border-t border-border/50 py-8 text-xs lg:items-end lg:border-l lg:border-t-0 lg:pl-16">
          <div className="flex w-full justify-between gap-12 md:justify-start md:gap-24 lg:justify-between">
            {columns.map((column) => (
              <div key={column.label}>
                <p className="font-medium text-text">{column.label}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {column.items.map((item) => (
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
              </div>
            ))}
            <div>
              <p className="font-medium text-text">{dict.footer.elsewhere}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {site.socials.map((social) => (
                  <li key={social.key}>
                    <a
                      href={social.href}
                      target={social.key === 'email' ? undefined : '_blank'}
                      rel={social.key === 'email' ? undefined : 'noopener noreferrer'}
                      className="text-muted transition-colors duration-300 hover:text-text focus-visible:text-text"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

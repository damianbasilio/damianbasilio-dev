/**
 * Stroke icons drawn on the same 4.75–19.25 grid, 1.5 stroke weight and round
 * caps as the reference set, so the three read as one family.
 */
export const SOCIAL_PATHS: Record<string, React.ReactNode> = {
  github: (
    <path d="M4.75 12C4.75 10.7811 5.05079 9.63249 5.58219 8.62429L4.80156 6.0539C4.53964 5.19151 5.46262 4.44997 6.24833 4.89154L8.06273 5.91125C9.1965 5.17659 10.5484 4.75 12 4.75C13.4526 4.75 14.8054 5.17719 15.9396 5.91278L17.7624 4.8911C18.549 4.45014 19.4715 5.19384 19.2075 6.05617L18.42 8.62837C18.95 9.63558 19.25 10.7828 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" />
  ),
  linkedin: (
    <>
      <path d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z" />
      <path d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25" />
      <path d="M10.75 11.75V16.25" />
      <path d="M7.75 11.75V16.25" />
      <path d="M7.75 8.75V9.25" />
    </>
  ),
  instagram: (
    <>
      <path d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z" />
      <path d="M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z" />
      <path d="M16.25 7.75V7.76" />
    </>
  ),
  email: (
    <>
      <path d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" />
      <path d="M5.5 6.5L12 12.25L18.5 6.5" />
    </>
  ),
};

/** The dark charcoal pill that holds the social icons, in nav and footer. */
export function SocialPill({
  socials,
  className,
}: {
  socials: { key: string; label: string; href: string }[];
  className?: string;
}) {
  return (
    <div
      className={`z-30 flex place-items-center space-x-1 rounded-full bg-dark-pill px-3 py-1.5 ${className ?? ''}`}
    >
      {socials.map((social) => (
        <a
          key={social.key}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-gray-400 hover:text-gray-200"
            aria-hidden="true"
          >
            {SOCIAL_PATHS[social.key]}
          </svg>
          <span className="sr-only">{social.label}</span>
        </a>
      ))}
    </div>
  );
}

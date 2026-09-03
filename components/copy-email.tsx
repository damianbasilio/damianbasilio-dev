'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/lib/i18n';

export function CopyEmail({
  email,
  dict,
}: {
  email: string;
  dict: Dictionary;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (insecure origin, permission denied).
      // The address is displayed as text, so the user can still select it.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={dict.contact.copyEmail}
      className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors duration-300 ease-in-out hover:border-accent-soft hover:text-text focus-visible:border-accent-soft focus-visible:text-text"
    >
      <span aria-live="polite">
        {copied ? dict.contact.copied : dict.contact.copyEmail}
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        {copied ? (
          <path d="M20 6 9 17l-5-5" />
        ) : (
          <>
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </>
        )}
      </svg>
    </button>
  );
}

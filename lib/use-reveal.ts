'use client';

import { useEffect, useRef, useState } from 'react';

/** Reveal anyway if the observer never fires (hidden tab, 0-size viewport, prerender). */
const FALLBACK_MS = 1200;

/**
 * Reveals an element once it scrolls into view, then stops observing it.
 *
 * Reveal is treated as an enhancement, never a gate: it returns `revealed:
 * true` immediately when IntersectionObserver is missing or the user prefers
 * reduced motion, and falls back to a timer if the observer exists but never
 * fires. Without that timer, a page rendered in a zero-size or hidden context
 * stays permanently invisible.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(node);

    const fallback = setTimeout(() => {
      setRevealed(true);
      observer.disconnect();
    }, FALLBACK_MS);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return { ref, revealed };
}

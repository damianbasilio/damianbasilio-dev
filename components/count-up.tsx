'use client';

import { useEffect, useRef, useState } from 'react';
import { useReveal } from '@/lib/use-reveal';

/**
 * Counts a numeric metric up when it scrolls into view.
 *
 * The true value is what renders by default, and every path that cannot
 * animate (reduced motion, a hidden tab where rAF never ticks, unmount
 * mid-count) leaves the true value on screen. A paused animation must never
 * be able to display a wrong number.
 */
export function CountUp({ value }: { value: string }) {
  const { ref, revealed } = useReveal<HTMLSpanElement>();
  const match = value.match(/^(\D*)([\d.]+)(.*)$/);
  const target = match ? Number(match[2]) : null;

  const [shown, setShown] = useState<number | null>(target);
  const done = useRef(false);

  useEffect(() => {
    if (!revealed || target === null || done.current) return;
    done.current = true;

    const canAnimate =
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      document.visibilityState === 'visible';

    // Anything else keeps the true value already on screen.
    if (!canAnimate) return;

    const decimals = (match?.[2].split('.')[1] ?? '').length;
    const duration = 1100;
    const start = performance.now();
    let frame = requestAnimationFrame(function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setShown(Number((target * eased).toFixed(decimals)));
      if (t < 1) frame = requestAnimationFrame(tick);
    });

    // If frames stop arriving, land on the real number anyway.
    const safety = setTimeout(() => setShown(target), duration + 600);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(safety);
      setShown(target);
    };
  }, [revealed, target, match]);

  if (target === null || shown === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {match?.[1]}
      {shown}
      {match?.[3]}
    </span>
  );
}

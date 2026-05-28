import { useEffect, useRef, useState } from "react";

interface CountUpOptions {
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const easeOutQuart = (t: number) => 1 - (1 - t) ** 4;

/**
 * IntersectionObserver-gated count-up. Returns `[ref, displayString]`.
 * The animation fires exactly once, when the ref element first becomes
 * at least 40% visible in the viewport.
 */
export function useCountUp(
  value: number,
  { duration = 1200, decimals = 0, prefix = "", suffix = "" }: CountUpOptions = {},
): [React.RefObject<HTMLSpanElement | null>, string] {
  const ref = useRef<HTMLSpanElement | null>(null);
  const triggered = useRef(false);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting || triggered.current) continue;
          triggered.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const v = easeOutQuart(t) * value;
            const text = decimals ? v.toFixed(decimals) : String(Math.round(v));
            setDisplay(`${prefix}${text}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration, decimals, prefix, suffix]);

  return [ref, display];
}

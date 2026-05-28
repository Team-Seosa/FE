import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

/**
 * Animates a numeric value toward `target` using ease-out interpolation.
 * Returns the current interpolated value each frame.
 */
export function useTween(target: number, duration = 600): number {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);

  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(from + (target - from) * easeOutCubic(t));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        fromRef.current = target;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

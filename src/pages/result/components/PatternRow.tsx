import { useEffect, useState } from "react";
import type { Pattern } from "@/types/uibowl";

interface PatternRowProps {
  pattern: Pattern;
  delayMs: number;
}

const RANK_OPACITY: Record<Pattern["rank"], number> = {
  1: 1,
  2: 0.65,
  3: 0.35,
};

const PatternRow = ({ pattern, delayMs }: PatternRowProps) => {
  const [visible, setVisible] = useState(false);
  const opacity = RANK_OPACITY[pattern.rank];

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="t-h3 text-text-primary">{pattern.name}</span>
        <span
          className="t-mono font-semibold tracking-[-0.02em] text-accent-indigo"
          style={{ fontSize: 22, opacity }}
        >
          {Math.round(pattern.score * 100)}%
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-bg-overlay">
        <div
          className="h-full rounded-full bg-accent-indigo"
          style={{
            width: `${pattern.score * 100}%`,
            opacity,
            transformOrigin: "left",
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 480ms var(--ease-out-expo)",
            boxShadow:
              pattern.rank === 1 ? "0 0 12px var(--color-glow-indigo)" : "none",
          }}
        />
      </div>
      <div className="t-caption mt-1 text-text-tertiary">
        Code {pattern.code}
      </div>
    </div>
  );
};

export default PatternRow;

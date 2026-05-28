import { useEffect, useState } from "react";
import { useTween } from "@/hooks/useTween";
import { useTypewriter } from "@/hooks/useTypewriter";
import { PATTERN_CYCLE } from "../data/heroScreens";

interface PatternMatchCardProps {
  visible: boolean;
}

const BAR_OPACITIES = [1, 0.65, 0.35];

const PatternMatchCard = ({ visible }: PatternMatchCardProps) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(
      () => setIdx((i) => (i + 1) % PATTERN_CYCLE.length),
      5600,
    );
    return () => window.clearInterval(id);
  }, [visible]);

  const cur = PATTERN_CYCLE[idx];
  const typed = useTypewriter(cur.name);
  const animMain = useTween(cur.main, 700);
  const animB0 = useTween(cur.bars[0], 700);
  const animB1 = useTween(cur.bars[1], 700);
  const animB2 = useTween(cur.bars[2], 700);
  const animBars = [animB0, animB1, animB2];

  return (
    <div
      className="absolute left-4 z-10 w-[220px] rounded-[14px] border border-accent-indigo bg-[rgba(22,22,24,0.92)] px-5 py-4 backdrop-blur-md"
      style={{
        top: "50%",
        transform: "translateY(-30%)",
        boxShadow:
          "0 0 24px var(--color-glow-indigo), inset 0 1px 0 rgba(255,255,255,0.06)",
        opacity: visible ? 1 : 0,
        transition: "all 480ms var(--ease-out-expo) 1400ms",
      }}
    >
      <div className="t-caption tracking-[0.08em] text-text-tertiary">
        PATTERN MATCH
      </div>
      <div className="mt-2 flex min-h-[28px] items-baseline justify-between">
        <span className="t-h2 text-text-primary">
          {typed}
          <span
            className="ml-0.5 inline-block w-[2px] align-[-2px]"
            style={{
              height: 18,
              background: "var(--color-accent-cyan)",
              animation:
                "uibowl-pulse-arrow 900ms var(--ease-in-out-expo) infinite",
            }}
          />
        </span>
        <span
          className="t-mono font-semibold tracking-[-0.02em] text-accent-indigo"
          style={{ fontSize: 22 }}
        >
          {Math.round(animMain)}%
        </span>
      </div>
      <div className="mt-3.5 flex flex-col gap-1.5">
        {BAR_OPACITIES.map((op, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-bg-overlay">
              <div
                className="h-full rounded-full bg-accent-indigo"
                style={{ width: `${animBars[i]}%`, opacity: op }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatternMatchCard;

import { Fragment } from "react";
import MiniPhoneMock from "@/components/common/MiniPhoneMock";
import { ArrowRight } from "@/components/icons";
import type { ResultScreen, ThumbVariant } from "@/types/uibowl";

interface FlowTimelineProps {
  screens: ResultScreen[];
  selected: number;
  onSelect: (step: number) => void;
}

const FlowTimeline = ({ screens, selected, onSelect }: FlowTimelineProps) => (
  <div
    className="uibowl-scroll mt-8 flex items-center gap-4 overflow-x-auto rounded-[14px] border border-border-subtle bg-bg-elevated px-4 py-4 md:px-6"
    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
  >
    <div className="t-caption mr-2 shrink-0 tracking-[0.08em] uppercase text-text-tertiary">
      FLOW
    </div>
    {screens.map((s, i) => {
      const isSelected = selected === s.step;
      return (
        <Fragment key={s.step}>
          {i > 0 && (
            <ArrowRight
              size={14}
              style={{ color: "var(--color-text-tertiary)", flexShrink: 0 }}
            />
          )}
          <button
            type="button"
            onClick={() => onSelect(s.step)}
            className="flex shrink-0 cursor-pointer flex-col items-center gap-2 border-none bg-transparent p-1 transition-all"
          >
            <div
              className={[
                "relative h-[120px] w-14 overflow-hidden rounded-md bg-bg-overlay transition-all",
                isSelected
                  ? "border-[1.5px] border-accent-indigo"
                  : "border border-border-subtle",
              ].join(" ")}
              style={{
                boxShadow: isSelected
                  ? "0 0 16px var(--color-glow-indigo)"
                  : "inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <MiniPhoneMock variant={s.step as ThumbVariant} />
              <div
                className="absolute left-1 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-accent-indigo font-mono text-[10px] font-semibold text-text-primary"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)" }}
              >
                {s.step}
              </div>
            </div>
            <span
              className={[
                "t-caption",
                isSelected
                  ? "font-semibold text-text-primary"
                  : "text-text-secondary",
              ].join(" ")}
            >
              {s.label}
            </span>
          </button>
        </Fragment>
      );
    })}
  </div>
);

export default FlowTimeline;

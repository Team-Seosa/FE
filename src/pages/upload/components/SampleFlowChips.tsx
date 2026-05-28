import type { FlowId } from "@/types/uibowl";
import ChipIcon from "./ChipIcon";
import { SAMPLE_FLOWS } from "../data/sampleFlows";

interface SampleFlowChipsProps {
  activeFlow: FlowId;
  onSelect: (id: FlowId) => void;
}

const SampleFlowChips = ({ activeFlow, onSelect }: SampleFlowChipsProps) => (
  <div className="mt-8 flex flex-wrap items-center gap-3">
    <span className="t-caption text-text-tertiary">샘플로 빠르게 시작:</span>
    {SAMPLE_FLOWS.map((f) => {
      const active = activeFlow === f.id;
      return (
        <button
          key={f.id}
          type="button"
          onClick={() => onSelect(f.id)}
          className={[
            "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium transition-all",
            active
              ? "border border-accent-indigo bg-[rgba(99,102,241,0.10)] text-accent-indigo"
              : "border border-border-subtle bg-bg-elevated text-text-secondary hover:-translate-y-px hover:border-border-strong",
          ].join(" ")}
          style={{
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          <ChipIcon kind={f.icon} />
          <span>{f.name}</span>
          <span
            className={`font-mono text-xs ${active ? "text-accent-indigo" : "text-text-tertiary"}`}
          >
            · {f.count}
          </span>
        </button>
      );
    })}
  </div>
);

export default SampleFlowChips;

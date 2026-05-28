import type { DetectedComponent } from "@/types/uibowl";

interface DetectedChipsProps {
  components: DetectedComponent[];
}

const DetectedChips = ({ components }: DetectedChipsProps) => (
  <div className="mt-6">
    <div className="t-caption tracking-[0.08em] uppercase text-text-tertiary">
      감지된 컴포넌트
    </div>
    <div className="mt-3 flex flex-wrap gap-2">
      {components.map((c, i) => (
        <div
          key={i}
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-overlay px-3 py-1.5 text-[13px] text-text-primary"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent-cyan"
            style={{ boxShadow: "0 0 8px var(--color-glow-cyan)" }}
          />
          {c.name}
        </div>
      ))}
    </div>
  </div>
);

export default DetectedChips;

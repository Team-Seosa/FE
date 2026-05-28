import type { DetectedComponent } from "@/types/uibowl";

interface ComponentMarkerProps {
  component: DetectedComponent;
  index: number;
}

const ComponentMarker = ({ component, index }: ComponentMarkerProps) => (
  <div
    className="absolute z-[5] flex -translate-x-1/2 -translate-y-1/2 items-center gap-2"
    style={{ left: `${component.x}%`, top: `${component.y}%` }}
  >
    <div
      className="flex h-[14px] w-[14px] items-center justify-center rounded-full bg-accent-cyan"
      style={{
        boxShadow:
          "0 0 16px var(--color-glow-cyan), 0 0 0 4px rgba(34,211,238,0.12)",
        animation: `uibowl-pulse-dot 1600ms var(--ease-in-out-expo) ${index * 200}ms infinite`,
      }}
    >
      <div className="h-1 w-1 rounded-full bg-white" />
    </div>
    <div
      className="t-caption whitespace-nowrap rounded-md border border-border-strong px-2 py-1 text-accent-cyan backdrop-blur-md"
      style={{ background: "rgba(28,28,31,0.85)" }}
    >
      {component.name}
    </div>
  </div>
);

export default ComponentMarker;

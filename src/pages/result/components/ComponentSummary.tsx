import type { ResultScreen } from "@/types/uibowl";

interface ComponentSummaryProps {
  screens: ResultScreen[];
}

interface SummaryCell {
  label: string;
  value: string | number;
  mono: boolean;
}

const computeSummary = (screens: ResultScreen[]): SummaryCell[] => {
  const allComponents = screens.flatMap((s) => s.components);
  const totalDetected = allComponents.length;
  const uniqueKinds = new Set(allComponents.map((c) => c.name)).size;
  const counts = new Map<string, number>();
  for (const c of allComponents) counts.set(c.name, (counts.get(c.name) ?? 0) + 1);
  const mostFreq =
    [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "-";

  return [
    { label: "총 감지", value: totalDetected, mono: true },
    { label: "고유 종류", value: uniqueKinds, mono: true },
    { label: "최빈", value: mostFreq, mono: false },
  ];
};

const ComponentSummary = ({ screens }: ComponentSummaryProps) => {
  const cells = computeSummary(screens);
  return (
    <div>
      <h3 className="t-h3 text-text-primary">컴포넌트 요약</h3>
      <div className="mt-4 grid grid-cols-3">
        {cells.map((cell, i) => (
          <div
            key={cell.label}
            className={[
              "px-4",
              i === 0 ? "pl-0" : "border-l border-border-subtle",
            ].join(" ")}
          >
            <div className="t-caption text-text-tertiary">{cell.label}</div>
            <div
              className={[
                "mt-1.5 text-[28px] font-semibold tracking-[-0.02em] text-accent-cyan",
                cell.mono ? "font-mono" : "",
              ].join(" ")}
            >
              {cell.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentSummary;

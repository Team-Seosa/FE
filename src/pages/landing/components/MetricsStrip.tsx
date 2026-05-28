import { useCountUp } from "@/hooks/useCountUp";
import { LANDING_METRICS, type LandingMetric } from "../data/heroScreens";

const MetricCell = ({ metric, isFirst }: { metric: LandingMetric; isFirst: boolean }) => {
  const [ref, display] = useCountUp(metric.value, {
    prefix: metric.prefix,
    suffix: metric.suffix,
  });

  return (
    <div
      className={`flex flex-col gap-3 px-8 ${isFirst ? "" : "border-l border-border-subtle"}`}
    >
      <div
        className="font-mono text-[40px] font-semibold leading-none tracking-[-0.03em] text-accent-indigo"
      >
        <span ref={ref}>{display}</span>
      </div>
      <div className="t-body-sm text-text-secondary">{metric.label}</div>
    </div>
  );
};

const MetricsStrip = () => (
  <div className="mx-16 mt-8 grid grid-cols-3 border-y border-border-subtle py-12">
    {LANDING_METRICS.map((m, i) => (
      <MetricCell key={m.label} metric={m} isFirst={i === 0} />
    ))}
  </div>
);

export default MetricsStrip;

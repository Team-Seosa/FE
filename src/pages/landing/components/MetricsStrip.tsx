import { useCountUp } from "@/hooks/useCountUp";
import { LANDING_METRICS, type LandingMetric } from "../data/heroScreens";

const MetricCell = ({ metric, isFirst }: { metric: LandingMetric; isFirst: boolean }) => {
  const [ref, display] = useCountUp(metric.value, {
    prefix: metric.prefix,
    suffix: metric.suffix,
  });

  return (
    <div
      className={`flex flex-col gap-3 py-4 sm:px-4 sm:py-0 md:px-8 ${isFirst ? "" : "border-t border-border-subtle sm:border-t-0 sm:border-l"}`}
    >
      <div
        className="font-mono text-[32px] font-semibold leading-none tracking-[-0.03em] text-accent-indigo md:text-[40px]"
      >
        <span ref={ref}>{display}</span>
      </div>
      <div className="t-body-sm text-text-secondary">{metric.label}</div>
    </div>
  );
};

const MetricsStrip = () => (
  <div className="mx-4 mt-8 grid grid-cols-1 border-y border-border-subtle py-8 sm:grid-cols-3 md:mx-8 md:py-12 lg:mx-16">
    {LANDING_METRICS.map((m, i) => (
      <MetricCell key={m.label} metric={m} isFirst={i === 0} />
    ))}
  </div>
);

export default MetricsStrip;

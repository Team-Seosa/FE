import { X } from "@/components/icons";

interface ThumbCardProps {
  step: number;
  previewUrl: string;
  label: string;
  onRemove: () => void;
}

const ThumbCard = ({ step, previewUrl, label, onRemove }: ThumbCardProps) => (
  <div
    className="group relative h-[360px] w-[168px] flex-shrink-0 cursor-grab overflow-hidden rounded-[14px] border border-border-subtle bg-bg-overlay transition-all hover:-translate-y-0.5 hover:border-border-strong"
    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
  >
    <div
      className="absolute left-2.5 top-2.5 z-[2] flex h-6 w-6 items-center justify-center rounded-full bg-accent-indigo font-mono text-xs font-semibold text-text-primary"
      style={{
        boxShadow:
          "0 0 12px var(--color-glow-indigo), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      {step}
    </div>
    <button
      type="button"
      onClick={onRemove}
      aria-label="화면 삭제"
      className="absolute right-2.5 top-2.5 z-[2] flex h-6 w-6 items-center justify-center rounded-full border border-border-strong bg-[rgba(10,10,11,0.8)] text-text-secondary opacity-0 transition-opacity duration-100 group-hover:opacity-100"
    >
      <X size={12} />
    </button>
    <div className="h-full w-full">
      <img
        src={previewUrl}
        alt={`화면 ${step}`}
        className="h-full w-full object-cover"
      />
    </div>
    <div
      className="absolute inset-x-0 bottom-0 px-3 py-2.5 text-xs font-medium text-text-secondary"
      style={{
        background: "linear-gradient(to top, rgba(10,10,11,0.85), transparent)",
      }}
    >
      {label}
    </div>
  </div>
);

export default ThumbCard;

import { ChevronDown } from "@/components/icons";
import { renderHighlightedJson } from "../utils/syntaxHighlightJson";

interface ApiResponseProps {
  data: unknown;
  open: boolean;
  onToggle: () => void;
}

const ApiResponse = ({ data, open, onToggle }: ApiResponseProps) => (
  <div>
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between border-none bg-transparent p-0 text-text-primary"
    >
      <h3 className="t-h3 m-0 text-text-primary">API 응답</h3>
      <ChevronDown
        size={18}
        style={{
          color: "var(--color-text-secondary)",
          transform: open ? "rotate(0deg)" : "rotate(-90deg)",
          transition: "transform 240ms var(--ease-out-expo)",
        }}
      />
    </button>
    {open && (
      <pre
        className="mt-4 max-h-[320px] overflow-auto rounded-[10px] border border-border-subtle bg-bg-base px-5 py-4 text-text-secondary"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12.5,
          lineHeight: 1.6,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        {renderHighlightedJson(data)}
      </pre>
    )}
  </div>
);

export default ApiResponse;

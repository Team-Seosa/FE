import { Fragment } from "react";
import { ArrowRight, Info, Plus } from "@/components/icons";
import type { UploadedFile } from "@/types/uibowl";
import AddThumbCard from "./AddThumbCard";
import ThumbCard from "./ThumbCard";

interface ThumbStripProps {
  files: UploadedFile[];
  onRemove: (idx: number) => void;
  onAdd: () => void;
}

const ThumbStrip = ({ files, onRemove, onAdd }: ThumbStripProps) => (
  <>
    <div className="t-caption tracking-[0.08em] uppercase text-text-tertiary">
      {files.map((_, i) => `Step ${i + 1}`).join("  →  ")}
    </div>
    <div className="uibowl-scroll mt-4 overflow-x-auto pb-3">
      <div className="flex min-h-[280px] items-center md:min-h-[380px]">
        {files.map(({ previewUrl }, i) => (
          <Fragment key={previewUrl}>
            {i > 0 && (
              <div
                className="flex w-8 shrink-0 justify-center text-accent-indigo md:w-12"
                style={{
                  animation:
                    "uibowl-pulse-arrow 2400ms var(--ease-in-out-expo) infinite",
                }}
              >
                <ArrowRight size={20} />
              </div>
            )}
            <div className="shrink-0">
              <ThumbCard
                step={i + 1}
                previewUrl={previewUrl}
                label={`화면 ${i + 1}`}
                onRemove={() => onRemove(i)}
              />
            </div>
          </Fragment>
        ))}
        <div className="w-4 shrink-0 md:w-6" />
        <div className="shrink-0">
          <AddThumbCard onClick={onAdd} />
        </div>
      </div>
    </div>

    <div className="mt-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-0">
      <div className="t-caption inline-flex items-center gap-1.5 text-text-tertiary">
        <Info size={12} />
        화면 순서가 분류 결과에 영향을 줍니다
      </div>
      <button
        type="button"
        onClick={onAdd}
        className="inline-flex cursor-pointer items-center gap-1 border-none bg-transparent text-[13px] text-text-secondary hover:text-text-primary"
      >
        <Plus size={14} /> 추가
      </button>
    </div>
  </>
);

export default ThumbStrip;

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import UIBowlNav from "@/components/common/UIBowlNav";
import { ArrowLeft, ArrowRight, Check, Loader } from "@/components/icons";
import { ROUTES } from "@/constants/endpoint";
import type { FlowId, ThumbVariant } from "@/types/uibowl";
import EmptyDropzone from "./components/EmptyDropzone";
import SampleFlowChips from "./components/SampleFlowChips";
import ThumbStrip from "./components/ThumbStrip";
import {
  DEFAULT_FLOW,
  FLOW_PREVIEWS,
  STEP_LABELS,
} from "./data/sampleFlows";

const nextVariant = (thumbs: ThumbVariant[]): ThumbVariant => {
  const last = thumbs[thumbs.length - 1] ?? 0;
  return (((last as number) % 3) + 1) as ThumbVariant;
};

const UploadPage = () => {
  const navigate = useNavigate();
  const [activeFlow, setActiveFlow] = useState<FlowId>(DEFAULT_FLOW);
  const [thumbs, setThumbs] = useState<ThumbVariant[]>(
    FLOW_PREVIEWS[DEFAULT_FLOW],
  );
  const [analyzing, setAnalyzing] = useState(false);

  const labels = useMemo(() => STEP_LABELS[activeFlow] ?? [], [activeFlow]);

  const selectFlow = (id: FlowId) => {
    setActiveFlow(id);
    setThumbs(FLOW_PREVIEWS[id]);
  };

  const removeThumb = (idx: number) => {
    setThumbs((cur) => cur.filter((_, i) => i !== idx));
  };

  const addThumb = () => {
    setThumbs((cur) => [...cur, nextVariant(cur)]);
  };

  const startAnalysis = () => {
    if (thumbs.length === 0 || analyzing) return;
    setAnalyzing(true);
    window.setTimeout(() => {
      setAnalyzing(false);
      navigate(ROUTES.RESULT);
    }, 800);
  };

  return (
    <div className="uibowl-root min-h-screen w-full bg-bg-base">
      <UIBowlNav
        leftExtra={
          <button
            type="button"
            onClick={() => navigate(ROUTES.APP_ROOT)}
            className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft size={14} /> 홈
          </button>
        }
      />
      <div
        className="mx-auto w-full max-w-[1280px] px-16 py-16"
        style={{ animation: "uibowl-fadein 240ms var(--ease-out-expo)" }}
      >
        <div className="t-caption tracking-[0.08em] uppercase text-text-tertiary">
          STEP 1 OF 3
        </div>
        <h1 className="t-h1 mt-2 text-text-primary">UI 플로우 분석</h1>
        <p className="t-body mt-2 max-w-[600px] text-text-secondary">
          분석할 모바일 화면을 순서대로 추가하세요. 순서는 분류 결과에 영향을
          줍니다.
        </p>

        <SampleFlowChips activeFlow={activeFlow} onSelect={selectFlow} />

        <div
          className="mt-8 rounded-[20px] border border-border-subtle bg-bg-elevated p-8"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
        >
          {thumbs.length === 0 ? (
            <EmptyDropzone onClick={() => selectFlow(activeFlow)} />
          ) : (
            <ThumbStrip
              thumbs={thumbs}
              labels={labels}
              onRemove={removeThumb}
              onAdd={addThumb}
            />
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="t-body inline-flex items-center gap-2 text-text-secondary">
            <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[rgba(34,211,238,0.15)] text-accent-cyan">
              <Check size={12} />
            </span>
            {thumbs.length}장 준비됨
          </div>
          <button
            type="button"
            className="uibowl-btn-primary"
            disabled={thumbs.length === 0 || analyzing}
            onClick={startAnalysis}
            style={{ padding: "14px 32px", fontSize: 14 }}
          >
            {analyzing ? (
              <>
                <Loader size={14} /> 분석 중...
              </>
            ) : (
              <>
                분석하기 <ArrowRight size={14} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;

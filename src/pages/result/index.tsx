import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import UIBowlNav from "@/components/common/UIBowlNav";
import { ArrowLeft, Download, Layers } from "@/components/icons";
import { ROUTES } from "@/constants/endpoint";
import ApiResponse from "./components/ApiResponse";
import ComponentSummary from "./components/ComponentSummary";
import DetectedChips from "./components/DetectedChips";
import FlowTimeline from "./components/FlowTimeline";
import PatternMatching from "./components/PatternMatching";
import PhoneCanvas from "./components/PhoneCanvas";
import { MOCK_RESULT } from "./data/mockResult";

const ResultPage = () => {
  const navigate = useNavigate();
  const [selectedStep, setSelectedStep] = useState(2);
  const [apiOpen, setApiOpen] = useState(true);

  const screen = useMemo(
    () =>
      MOCK_RESULT.screens.find((s) => s.step === selectedStep) ??
      MOCK_RESULT.screens[0],
    [selectedStep],
  );

  return (
    <div
      className="uibowl-root min-h-full bg-bg-base"
      style={{ width: 1280 }}
    >
      <UIBowlNav
        leftExtra={
          <button
            type="button"
            onClick={() => navigate(ROUTES.UPLOAD)}
            className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft size={14} /> 다시 분석
          </button>
        }
      />
      <div
        className="px-16 pt-12 pb-16"
        style={{ animation: "uibowl-fadein-up 240ms var(--ease-out-expo)" }}
      >
        <div className="flex items-end justify-between">
          <div>
            <div className="t-caption tracking-[0.08em] uppercase text-text-tertiary">
              ANALYSIS COMPLETE
            </div>
            <h1 className="t-h1 mt-2 text-text-primary">분석 결과</h1>
          </div>
          <div className="t-body-sm text-text-secondary">
            추론 시간{" "}
            <span className="font-mono text-text-primary">1.8s</span> · 모델 v0.3
          </div>
        </div>

        <FlowTimeline
          screens={MOCK_RESULT.screens}
          selected={selectedStep}
          onSelect={setSelectedStep}
        />

        <div className="mt-8 grid grid-cols-[7fr_5fr] gap-6">
          <div
            className="rounded-[20px] border border-border-subtle bg-bg-elevated p-8"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
              animation: "uibowl-fadein 240ms var(--ease-out-expo)",
            }}
          >
            <div className="flex items-baseline justify-between">
              <div>
                <div className="t-caption tracking-[0.08em] uppercase text-text-tertiary">
                  STEP {screen.step} OF {MOCK_RESULT.screens.length}
                </div>
                <div className="t-h2 mt-1.5 text-text-primary">{screen.label}</div>
              </div>
              <div className="t-caption text-accent-cyan">
                {screen.components.length}개 감지됨
              </div>
            </div>

            <PhoneCanvas screen={screen} />
            <DetectedChips components={screen.components} />
          </div>

          <div
            className="rounded-[20px] border border-border-subtle bg-bg-elevated p-8"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
              animation: "uibowl-fadein 240ms var(--ease-out-expo) 120ms both",
            }}
          >
            <PatternMatching patterns={MOCK_RESULT.patterns} />
            <div className="my-6 h-px bg-border-subtle" />
            <ComponentSummary screens={MOCK_RESULT.screens} />
            <div className="my-6 h-px bg-border-subtle" />
            <ApiResponse
              data={MOCK_RESULT}
              open={apiOpen}
              onToggle={() => setApiOpen((o) => !o)}
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button type="button" className="uibowl-btn-ghost">
            <Download size={14} />
            JSON 다운로드
          </button>
          <button
            type="button"
            className="uibowl-btn-primary"
            onClick={() => navigate(ROUTES.UPLOAD)}
          >
            <Layers size={14} />
            새 플로우 분석하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

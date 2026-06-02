import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UIBowlNav from "@/components/common/UIBowlNav";
import { ArrowLeft, Download, Layers } from "@/components/icons";
import { ROUTES } from "@/constants/endpoint";
import type { AnalysisResult, PredictResponse } from "@/types/uibowl";
import ApiResponse from "./components/ApiResponse";
import ComponentSummary from "./components/ComponentSummary";
import DetectedChips from "./components/DetectedChips";
import FlowTimeline from "./components/FlowTimeline";
import PatternMatching from "./components/PatternMatching";
import PhoneCanvas from "./components/PhoneCanvas";
import { MOCK_RESULT } from "./data/mockResult";
import { mapPredictResponse } from "./utils/mapApiResponse";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedStep, setSelectedStep] = useState(1);
  const [apiOpen, setApiOpen] = useState(true);

  const apiResult: PredictResponse | undefined = (
    location.state as { result?: PredictResponse; previewUrls?: string[] } | null
  )?.result;
  const previewUrls: string[] = (
    location.state as { previewUrls?: string[] } | null
  )?.previewUrls ?? [];

  const result: AnalysisResult = useMemo(
    () => (apiResult ? mapPredictResponse(apiResult) : MOCK_RESULT),
    [apiResult],
  );

  const screen = useMemo(
    () => result.screens.find((s) => s.step === selectedStep) ?? result.screens[0],
    [result, selectedStep],
  );

  const handleDownload = () => {
    const data = apiResult ?? result;
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "uibowl_result.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="uibowl-root min-h-screen w-full bg-bg-base">
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
        className="mx-auto w-full max-w-[1280px] px-4 pt-8 pb-10 md:px-8 md:pt-12 md:pb-16 lg:px-16"
        style={{ animation: "uibowl-fadein-up 240ms var(--ease-out-expo)" }}
      >
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-0">
          <div>
            <div className="t-caption tracking-[0.08em] uppercase text-text-tertiary">
              ANALYSIS COMPLETE
            </div>
            <h1 className="t-h1 mt-2 text-text-primary">분석 결과</h1>
          </div>
          <div className="t-body-sm text-text-secondary">
            {apiResult ? (
              <>
                <span className="font-mono text-text-primary">{apiResult.num_screens}</span>장 분석됨
                {apiResult.low_confidence && (
                  <span className="ml-3 text-yellow-400">⚠ 신뢰도 낮음</span>
                )}
              </>
            ) : (
              <>
                추론 시간{" "}
                <span className="font-mono text-text-primary">1.8s</span> · 모델 v0.3
              </>
            )}
          </div>
        </div>

        <FlowTimeline
          screens={result.screens}
          selected={selectedStep}
          onSelect={setSelectedStep}
        />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[7fr_5fr]">
          <div
            className="rounded-2xl border border-border-subtle bg-bg-elevated p-4 md:p-6 lg:rounded-[20px] lg:p-8"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
              animation: "uibowl-fadein 240ms var(--ease-out-expo)",
            }}
          >
            <div className="flex items-baseline justify-between">
              <div>
                <div className="t-caption tracking-[0.08em] uppercase text-text-tertiary">
                  STEP {screen.step} OF {result.screens.length}
                </div>
                <div className="t-h2 mt-1.5 text-text-primary">{screen.label}</div>
              </div>
              <div className="t-caption text-accent-cyan">
                {screen.components.length}개 감지됨
              </div>
            </div>

            <PhoneCanvas screen={screen} previewUrl={previewUrls[screen.step - 1]} />
            <DetectedChips components={screen.components} />
          </div>

          <div
            className="rounded-2xl border border-border-subtle bg-bg-elevated p-4 md:p-6 lg:rounded-[20px] lg:p-8"
            style={{
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
              animation: "uibowl-fadein 240ms var(--ease-out-expo) 120ms both",
            }}
          >
            <PatternMatching patterns={result.patterns} />
            <div className="my-6 h-px bg-border-subtle" />
            <ComponentSummary screens={result.screens} />
            <div className="my-6 h-px bg-border-subtle" />
            <ApiResponse
              data={result}
              open={apiOpen}
              onToggle={() => setApiOpen((o) => !o)}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center sm:gap-0">
          <button
            type="button"
            className="uibowl-btn-ghost justify-center"
            onClick={handleDownload}
          >
            <Download size={14} />
            JSON 다운로드
          </button>
          <button
            type="button"
            className="uibowl-btn-primary justify-center"
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

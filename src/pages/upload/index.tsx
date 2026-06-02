import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UIBowlNav from "@/components/common/UIBowlNav";
import { ArrowLeft, ArrowRight, Check, Loader } from "@/components/icons";
import { ROUTES } from "@/constants/endpoint";
import { predictImages } from "@/services/predictApi";
import type { UploadedFile } from "@/types/uibowl";
import EmptyDropzone from "./components/EmptyDropzone";
import ThumbStrip from "./components/ThumbStrip";

const MAX_FILES = 30;

const UploadPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addFiles = (newFiles: File[]) => {
    const remaining = MAX_FILES - uploadedFiles.length;
    const toAdd = newFiles.slice(0, remaining).map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setUploadedFiles((cur) => [...cur, ...toAdd]);
    setError(null);
  };

  const removeFile = (idx: number) => {
    setUploadedFiles((cur) => {
      URL.revokeObjectURL(cur[idx].previewUrl);
      return cur.filter((_, i) => i !== idx);
    });
  };

  const startAnalysis = async () => {
    if (uploadedFiles.length === 0 || analyzing) return;
    setAnalyzing(true);
    setError(null);
    try {
      const result = await predictImages(uploadedFiles.map((u) => u.file));
      const previewUrls = uploadedFiles.map((u) => u.previewUrl);
      navigate(ROUTES.RESULT, { state: { result, previewUrls } });
    } catch (e) {
      setError(e instanceof Error ? e.message : "분석 중 오류가 발생했습니다.");
      setAnalyzing(false);
    }
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
        className="mx-auto w-full max-w-[1280px] px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16"
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

        <div
          className="mt-8 rounded-2xl border border-border-subtle bg-bg-elevated p-4 md:p-6 lg:rounded-[20px] lg:p-8"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
        >
          {uploadedFiles.length === 0 ? (
            <EmptyDropzone onFiles={addFiles} />
          ) : (
            <ThumbStrip
              files={uploadedFiles}
              onRemove={removeFile}
              onAdd={() => fileInputRef.current?.click()}
            />
          )}
        </div>

        {/* hidden input for "추가" button in ThumbStrip */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            const selected = Array.from(e.target.files ?? []);
            if (selected.length) addFiles(selected);
            e.target.value = "";
          }}
        />

        {error && (
          <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <div className="mt-8 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center sm:gap-0">
          <div className="t-body inline-flex items-center gap-2 text-text-secondary">
            <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[rgba(34,211,238,0.15)] text-accent-cyan">
              <Check size={12} />
            </span>
            {uploadedFiles.length}장 준비됨
          </div>
          <button
            type="button"
            className="uibowl-btn-primary justify-center"
            disabled={uploadedFiles.length === 0 || analyzing}
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

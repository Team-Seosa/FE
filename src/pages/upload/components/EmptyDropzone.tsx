import { Upload } from "@/components/icons";

interface EmptyDropzoneProps {
  onClick: () => void;
}

const EmptyDropzone = ({ onClick }: EmptyDropzoneProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full cursor-pointer flex-col items-center gap-3 rounded-[14px] border-[1.5px] border-dashed border-border-strong bg-bg-base p-8 transition-all hover:border-accent-indigo md:p-12 lg:p-16"
  >
    <Upload size={32} style={{ color: "var(--color-text-tertiary)" }} />
    <div className="t-h3 text-text-primary">이미지를 드래그하거나 클릭하세요</div>
    <div className="t-body-sm text-text-tertiary">PNG · JPG · 최대 10장</div>
  </button>
);

export default EmptyDropzone;

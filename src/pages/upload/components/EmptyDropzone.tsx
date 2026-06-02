import { useRef } from "react";
import { Upload } from "@/components/icons";

interface EmptyDropzoneProps {
  onFiles: (files: File[]) => void;
}

const EmptyDropzone = ({ onFiles }: EmptyDropzoneProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith("image/"),
    );
    if (dropped.length) onFiles(dropped);
  };

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="flex w-full cursor-pointer flex-col items-center gap-3 rounded-[14px] border-[1.5px] border-dashed border-border-strong bg-bg-base p-8 transition-all hover:border-accent-indigo md:p-12 lg:p-16"
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => {
          const selected = Array.from(e.target.files ?? []);
          if (selected.length) onFiles(selected);
          e.target.value = "";
        }}
      />
      <Upload size={32} style={{ color: "var(--color-text-tertiary)" }} />
      <div className="t-h3 text-text-primary">이미지를 드래그하거나 클릭하세요</div>
      <div className="t-body-sm text-text-tertiary">PNG · JPG · 최대 30장</div>
    </button>
  );
};

export default EmptyDropzone;

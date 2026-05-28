import { Plus } from "@/components/icons";

interface AddThumbCardProps {
  onClick: () => void;
}

const AddThumbCard = ({ onClick }: AddThumbCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex h-[360px] w-[168px] flex-shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-[14px] border-[1.5px] border-dashed border-border-strong bg-transparent text-text-tertiary transition-all hover:border-accent-indigo hover:text-accent-indigo"
  >
    <Plus size={18} />
    <span className="text-[13px]">화면 추가</span>
  </button>
);

export default AddThumbCard;

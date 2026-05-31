import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/endpoint";
import { GitHub } from "@/components/icons";

interface UIBowlNavProps {
  leftExtra?: ReactNode;
}

const UIBowlNav = ({ leftExtra }: UIBowlNavProps) => {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between gap-2 border-b border-border-subtle bg-[rgba(22,22,24,0.6)] px-4 backdrop-blur-xl md:px-8">
      <div className="flex min-w-0 items-center gap-2 md:gap-4">
        {leftExtra}
        <Link
          to={ROUTES.APP_ROOT}
          className="flex items-baseline gap-2 no-underline"
        >
          <span className="text-[15px] font-bold tracking-[-0.01em] text-text-primary">
            UIBowl
          </span>
          <span className="hidden text-[13px] text-text-tertiary sm:inline">
            / AI Pattern Classifier
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-3 md:gap-6">
        <a
          href="https://github.com/Team-Seosa"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary no-underline transition-colors hover:text-text-primary"
        >
          <GitHub size={14} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <button
          type="button"
          className="uibowl-btn-primary"
          style={{ padding: "8px 14px", fontSize: 13 }}
          onClick={() => navigate(ROUTES.UPLOAD)}
        >
          분석 시작
        </button>
      </div>
    </nav>
  );
};

export default UIBowlNav;

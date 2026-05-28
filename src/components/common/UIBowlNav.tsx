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
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border-subtle bg-[rgba(22,22,24,0.6)] px-8 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        {leftExtra}
        <Link
          to={ROUTES.APP_ROOT}
          className="flex items-baseline gap-2 no-underline"
        >
          <span className="text-[15px] font-bold tracking-[-0.01em] text-text-primary">
            UIBowl
          </span>
          <span className="text-[13px] text-text-tertiary">
            / AI Pattern Classifier
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary no-underline transition-colors hover:text-text-primary"
        >
          <GitHub size={14} />
          GitHub
        </a>
        <button
          type="button"
          className="uibowl-btn-primary"
          style={{ padding: "10px 18px", fontSize: 13 }}
          onClick={() => navigate(ROUTES.UPLOAD)}
        >
          분석 시작
        </button>
      </div>
    </nav>
  );
};

export default UIBowlNav;

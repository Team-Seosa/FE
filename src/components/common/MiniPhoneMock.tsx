import type { ReactElement } from "react";
import type { ThumbVariant } from "@/types/uibowl";

interface MiniPhoneMockProps {
  variant?: ThumbVariant;
}

const VARIANT_BLOCKS: Record<ThumbVariant, ReactElement> = {
  1: (
    <>
      <rect x="22" y="48" width="12" height="12" rx="3" fill="#33333a" />
      <rect x="18" y="64" width="20" height="3" rx="1" fill="#2a2a2e" />
    </>
  ),
  2: (
    <>
      <rect x="9" y="22" width="38" height="40" rx="4" fill="#202024" />
      <rect x="9" y="92" width="38" height="10" rx="3" fill="#3a3a40" />
    </>
  ),
  3: (
    <>
      <rect x="9" y="14" width="38" height="8" rx="2" fill="#202024" />
      <rect x="9" y="28" width="38" height="22" rx="3" fill="#202024" />
      <rect x="9" y="56" width="38" height="22" rx="3" fill="#1e1e22" />
      <rect x="14" y="92" width="28" height="8" rx="2" fill="#3a3a40" />
    </>
  ),
};

const MiniPhoneMock = ({ variant = 1 }: MiniPhoneMockProps) => (
  <svg viewBox="0 0 56 120" width="100%" height="100%" className="block">
    <rect
      x="3"
      y="3"
      width="50"
      height="114"
      rx="10"
      fill="#1c1c1f"
      stroke="#262626"
    />
    {VARIANT_BLOCKS[variant] ?? VARIANT_BLOCKS[1]}
  </svg>
);

export default MiniPhoneMock;

import type { ReactElement } from "react";
import type { ThumbVariant } from "@/types/uibowl";

interface PhoneMockUIProps {
  variant?: ThumbVariant;
  showStatusBar?: boolean;
}

const VARIANT_BLOCKS: Record<ThumbVariant, ReactElement> = {
  1: (
    <>
      <rect x="105" y="220" width="70" height="70" rx="16" fill="#2a2a2e" />
      <rect x="80" y="310" width="120" height="10" rx="3" fill="#33333a" />
      <rect x="100" y="330" width="80" height="6" rx="3" fill="#26262a" />
    </>
  ),
  2: (
    <>
      <rect x="40" y="80" width="200" height="120" rx="14" fill="#202024" />
      <rect x="56" y="100" width="60" height="60" rx="14" fill="#2a2a2e" />
      <rect x="56" y="170" width="160" height="8" rx="3" fill="#33333a" />
      <rect x="56" y="184" width="120" height="6" rx="3" fill="#26262a" />
      <rect x="40" y="220" width="200" height="14" rx="3" fill="#2a2a2e" />
      <rect x="40" y="240" width="180" height="6" rx="3" fill="#26262a" />
      <rect x="40" y="252" width="160" height="6" rx="3" fill="#26262a" />
      <rect
        x="40"
        y="430"
        width="200"
        height="44"
        rx="10"
        fill="var(--color-accent-indigo)"
        opacity="0.85"
      />
      <rect x="115" y="490" width="50" height="6" rx="3" fill="#33333a" />
    </>
  ),
  3: (
    <>
      <rect x="40" y="50" width="200" height="32" rx="8" fill="#202024" />
      <circle cx="58" cy="66" r="8" fill="#33333a" />
      <rect x="76" y="62" width="80" height="8" rx="3" fill="#33333a" />
      <rect x="40" y="100" width="200" height="120" rx="14" fill="#202024" />
      <rect x="40" y="232" width="200" height="120" rx="14" fill="#1e1e22" />
      <rect x="56" y="120" width="80" height="10" rx="3" fill="#3a3a40" />
      <rect x="56" y="140" width="160" height="6" rx="3" fill="#2a2a2e" />
      <rect x="56" y="152" width="140" height="6" rx="3" fill="#2a2a2e" />
      <rect x="40" y="430" width="200" height="44" rx="10" fill="#26262a" />
      <rect x="115" y="446" width="50" height="10" rx="3" fill="#3a3a40" />
    </>
  ),
};

const PhoneMockUI = ({ variant = 1, showStatusBar = true }: PhoneMockUIProps) => (
  <svg
    viewBox="0 0 280 580"
    width="100%"
    height="100%"
    className="block"
    preserveAspectRatio="xMidYMid meet"
  >
    {showStatusBar && (
      <g>
        <rect x="20" y="22" width="36" height="6" rx="3" fill="#3a3a40" />
        <rect x="220" y="22" width="40" height="6" rx="3" fill="#3a3a40" />
      </g>
    )}
    {VARIANT_BLOCKS[variant] ?? VARIANT_BLOCKS[1]}
  </svg>
);

export default PhoneMockUI;

import type { ReactElement } from "react";
import type { ThumbVariant } from "@/types/uibowl";

interface HeroPhoneUIProps {
  variant: ThumbVariant;
}

const VARIANT_BLOCKS: Record<ThumbVariant, ReactElement> = {
  1: (
    <>
      <rect x="20" y="60" width="200" height="34" rx="8" fill="#26262a" />
      <rect x="32" y="73" width="14" height="8" rx="2" fill="#3a3a40" />
      <rect x="56" y="73" width="60" height="8" rx="2" fill="#33333a" />
      <rect x="20" y="110" width="200" height="120" rx="12" fill="#1f1f23" />
      <rect x="32" y="124" width="80" height="10" rx="3" fill="#3a3a40" />
      <rect x="32" y="142" width="160" height="6" rx="3" fill="#2a2a2e" />
      <rect x="32" y="156" width="140" height="6" rx="3" fill="#2a2a2e" />
      <rect x="20" y="246" width="95" height="80" rx="10" fill="#1f1f23" />
      <rect x="125" y="246" width="95" height="80" rx="10" fill="#1f1f23" />
      <rect x="20" y="420" width="200" height="44" rx="10" fill="#2a2a2e" />
    </>
  ),
  2: (
    <>
      <rect x="40" y="80" width="160" height="120" rx="12" fill="#202024" />
      <circle cx="120" cy="120" r="22" fill="#2a2a2e" />
      <rect x="60" y="160" width="120" height="8" rx="3" fill="#33333a" />
      <rect x="80" y="178" width="80" height="6" rx="3" fill="#26262a" />
      <rect x="20" y="220" width="200" height="14" rx="3" fill="#26262a" />
      <rect x="20" y="240" width="180" height="6" rx="3" fill="#26262a" />
      <rect x="20" y="252" width="160" height="6" rx="3" fill="#26262a" />
      <rect x="20" y="380" width="200" height="44" rx="10" fill="#5b5fdf" opacity="0.7" />
      <rect x="20" y="430" width="200" height="36" rx="10" fill="transparent" stroke="#3a3a40" />
    </>
  ),
  3: (
    <>
      <rect x="20" y="60" width="120" height="14" rx="3" fill="#3a3a40" />
      <rect x="20" y="82" width="80" height="6" rx="3" fill="#2a2a2e" />
      <rect x="20" y="110" width="200" height="100" rx="10" fill="#202024" />
      <rect x="20" y="220" width="98" height="60" rx="10" fill="#1f1f23" />
      <rect x="122" y="220" width="98" height="60" rx="10" fill="#1f1f23" />
      <rect x="20" y="290" width="200" height="60" rx="10" fill="#1f1f23" />
      <rect x="20" y="370" width="200" height="40" rx="10" fill="#26262a" />
      <rect x="20" y="430" width="60" height="40" rx="10" fill="#202024" />
      <rect x="90" y="430" width="60" height="40" rx="10" fill="#202024" />
      <rect x="160" y="430" width="60" height="40" rx="10" fill="#202024" />
    </>
  ),
};

const HeroPhoneUI = ({ variant }: HeroPhoneUIProps) => (
  <svg
    viewBox="0 0 240 500"
    preserveAspectRatio="none"
    className="block h-full w-full"
  >
    <rect x="0" y="0" width="240" height="500" fill="#1c1c1f" />
    <rect x="100" y="14" width="40" height="6" rx="3" fill="#33333a" />
    {VARIANT_BLOCKS[variant]}
  </svg>
);

export default HeroPhoneUI;

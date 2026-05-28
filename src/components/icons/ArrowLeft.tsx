import type { IconProps } from "./types";

const ArrowLeft = ({ size = 14, ...rest }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

export default ArrowLeft;

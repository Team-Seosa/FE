import type { IconProps } from "./types";

const Check = ({ size = 14, ...rest }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Check;

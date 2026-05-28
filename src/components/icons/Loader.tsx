import type { IconProps } from "./types";

const Loader = ({ size = 14, style, ...rest }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ animation: "uibowl-spin 800ms linear infinite", ...style }}
    {...rest}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export default Loader;

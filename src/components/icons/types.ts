import type { SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "size"> & {
  size?: number;
};

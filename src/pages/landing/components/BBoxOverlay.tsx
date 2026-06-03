import { useEffect, useState } from "react";
import type { HeroBox } from "@/types/uibowl";

interface BBoxOverlayProps {
  boxes: HeroBox[];
  screenIdx: number;
}

const CORNER = 12;

const BBoxOverlay = ({ boxes, screenIdx }: BBoxOverlayProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setActiveIdx((i) => (i + 1) % boxes.length);
    }, 1600);
    return () => window.clearInterval(t);
  }, [boxes.length]);

  const box = boxes[activeIdx];
  if (!box) return null;

  const corners: Array<[number, number, number, number]> = [
    [box.x, box.y, 1, 1],
    [box.x + box.w, box.y, -1, 1],
    [box.x, box.y + box.h, 1, -1],
    [box.x + box.w, box.y + box.h, -1, -1],
  ];

  return (
    <svg
      key={`${screenIdx}-${activeIdx}`}
      viewBox="0 0 240 500"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
    >
      <defs>
        <filter id={`gl-${screenIdx}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g style={{ animation: "uibowl-bbox-cycle 1600ms var(--ease-out-expo) both" }}>
        {corners.map(([cx, cy, sx, sy], i) => (
          <g
            key={i}
            stroke="#22D3EE"
            strokeWidth="1.5"
            fill="none"
            filter={`url(#gl-${screenIdx})`}
          >
            <line
              x1={cx}
              y1={cy}
              x2={cx + sx * CORNER}
              y2={cy}
              strokeLinecap="round"
            />
            <line
              x1={cx}
              y1={cy}
              x2={cx}
              y2={cy + sy * CORNER}
              strokeLinecap="round"
            />
          </g>
        ))}
        <rect
          x={box.x}
          y={box.y}
          width={box.w}
          height={box.h}
          stroke="rgba(34,211,238,0.35)"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="rgba(34,211,238,0.04)"
        />
        <g transform={`translate(${box.x + box.w + 6}, ${box.y - 2})`}>
          <rect
            x="0"
            y="0"
            width={box.label.length * 6.5 + 16}
            height="18"
            rx="4"
            fill="rgba(10,10,11,0.85)"
            stroke="#22D3EE"
            strokeWidth="0.75"
          />
          <text
            x="8"
            y="12"
            fill="#22D3EE"
            fontFamily='"JetBrains Mono", monospace'
            fontSize="10"
            fontWeight="500"
          >
            {box.label}
          </text>
        </g>
      </g>
    </svg>
  );
};

export default BBoxOverlay;

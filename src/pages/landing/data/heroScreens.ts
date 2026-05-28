import type { HeroScreen } from "@/types/uibowl";

export const HERO_SCREENS: HeroScreen[] = [
  {
    variant: 1,
    boxes: [
      { x: 20, y: 110, w: 200, h: 120, label: "Card 88%" },
      { x: 32, y: 124, w: 80, h: 10, label: "Header 91%" },
      { x: 20, y: 420, w: 200, h: 44, label: "Button 96%" },
    ],
  },
  {
    variant: 2,
    boxes: [
      { x: 40, y: 80, w: 160, h: 120, label: "Image 87%" },
      { x: 20, y: 380, w: 200, h: 44, label: "Button 92%" },
      { x: 60, y: 160, w: 120, h: 8, label: "Title 90%" },
    ],
  },
  {
    variant: 3,
    boxes: [
      { x: 20, y: 110, w: 200, h: 100, label: "Hero 89%" },
      { x: 20, y: 430, w: 60, h: 40, label: "Tab 94%" },
      { x: 122, y: 220, w: 98, h: 60, label: "Card 86%" },
    ],
  },
];

interface PatternCycleItem {
  name: string;
  main: number;
  bars: [number, number, number];
}

export const PATTERN_CYCLE: PatternCycleItem[] = [
  { name: "온보딩", main: 92, bars: [92, 71, 54] },
  { name: "검색", main: 88, bars: [88, 64, 41] },
  { name: "로그인", main: 94, bars: [94, 73, 49] },
];

export interface LandingMetric {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export const LANDING_METRICS: LandingMetric[] = [
  { value: 63, label: "분류 가능 패턴" },
  { value: 70, suffix: "%+", label: "F1 Score" },
  { value: 3, prefix: "<", suffix: "s", label: "추론 속도" },
];

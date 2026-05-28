export type FlowId = "payment" | "onboard" | "login" | "settings";

export type ThumbVariant = 1 | 2 | 3;

export type ChipIconKind = "credit" | "rocket" | "key" | "gear";

export interface SampleFlow {
  id: FlowId;
  name: string;
  count: number;
  icon: ChipIconKind;
}

export interface Pattern {
  rank: 1 | 2 | 3;
  name: string;
  code: number;
  score: number;
}

export interface DetectedComponent {
  name: string;
  x: number;
  y: number;
}

export interface ResultScreen {
  step: number;
  label: string;
  components: DetectedComponent[];
}

export interface AnalysisResult {
  patterns: Pattern[];
  screens: ResultScreen[];
}

export interface HeroBox {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
}

export interface HeroScreen {
  variant: ThumbVariant;
  boxes: HeroBox[];
}

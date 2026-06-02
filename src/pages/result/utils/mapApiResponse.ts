import type { AnalysisResult, PredictResponse } from "@/types/uibowl";

export function mapPredictResponse(res: PredictResponse): AnalysisResult {
  return {
    patterns: res.top_k.map((t) => ({
      rank: t.rank,
      name: t.label,
      code: t.rank,
      score: t.probability,
    })),
    screens: res.screens.map((s) => ({
      step: s.screen,
      label: s.label,
      components: [],
    })),
  };
}

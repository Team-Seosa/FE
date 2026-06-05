import type { AnalysisResult, PredictResponse } from "@/types/uibowl";

export function mapPredictResponse(res: PredictResponse): AnalysisResult {
  const topLabel = res.top_k?.[0]?.label ?? "";
  return {
    patterns: (res.top_k ?? []).map((t) => ({
      rank: t.rank,
      name: t.label,
      code: t.rank,
      score: t.probability,
    })),
    screens: res.screens?.length
      ? res.screens.map((s) => ({
          step: s.screen,
          label: s.label,
          components: [],
        }))
      : Array.from({ length: res.num_screens ?? 1 }, (_, i) => ({
          step: i + 1,
          label: topLabel,
          components: [],
        })),
  };
}

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
    screens: Array.from({ length: res.num_screens }, (_, i) => ({
      step: i + 1,
      label: topLabel,
      components: [],
    })),
  };
}

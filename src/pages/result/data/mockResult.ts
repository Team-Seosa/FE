import type { AnalysisResult } from "@/types/uibowl";

export const MOCK_RESULT: AnalysisResult = {
  patterns: [
    { rank: 1, name: "온보딩", code: 43, score: 0.92 },
    { rank: 2, name: "회원가입", code: 48, score: 0.71 },
    { rank: 3, name: "튜토리얼", code: 67, score: 0.54 },
  ],
  screens: [
    {
      step: 1,
      label: "스플래시",
      components: [{ name: "인터랙션", x: 68, y: 37 }],
    },
    {
      step: 2,
      label: "권한 안내",
      components: [
        { name: "버튼", x: 68, y: 87 },
        { name: "상단 네비게이션", x: 68, y: 10 },
      ],
    },
    {
      step: 3,
      label: "기능 소개",
      components: [
        { name: "탭", x: 36, y: 15 },
        { name: "카드", x: 90, y: 29 },
        { name: "버튼", x: 82, y: 77 },
      ],
    },
  ],
};

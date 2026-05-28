import type { FlowId, SampleFlow, ThumbVariant } from "@/types/uibowl";

export const SAMPLE_FLOWS: SampleFlow[] = [
  { id: "payment", name: "결제 플로우", count: 5, icon: "credit" },
  { id: "onboard", name: "온보딩", count: 4, icon: "rocket" },
  { id: "login", name: "로그인", count: 3, icon: "key" },
  { id: "settings", name: "설정", count: 3, icon: "gear" },
];

export const FLOW_PREVIEWS: Record<FlowId, ThumbVariant[]> = {
  onboard: [1, 2, 3, 1],
  payment: [3, 2, 1, 3, 2],
  login: [1, 2, 3],
  settings: [3, 2, 1],
};

export const STEP_LABELS: Record<FlowId, string[]> = {
  onboard: ["스플래시", "권한 안내", "기능 소개", "시작하기"],
  payment: ["장바구니", "주소 선택", "결제 수단", "확인", "완료"],
  login: ["진입", "ID 입력", "비밀번호"],
  settings: ["메인", "알림", "계정"],
};

export const DEFAULT_FLOW: FlowId = "onboard";

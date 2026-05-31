import { useNavigate } from "react-router-dom";
import { ArrowRight } from "@/components/icons";
import { ROUTES } from "@/constants/endpoint";
import { HERO_SCREENS } from "../data/heroScreens";
import IsometricPhones from "./IsometricPhones";

interface HeroSectionProps {
  stage: boolean;
}

const fadeUpStyle = (stage: boolean, delayMs: number) => ({
  opacity: stage ? 1 : 0,
  transform: stage ? "translateY(0)" : "translateY(12px)",
  transition: `all 240ms var(--ease-out-expo) ${delayMs}ms`,
});

const HeroSection = ({ stage }: HeroSectionProps) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 items-center gap-8 px-4 pt-10 pb-10 md:px-8 md:pt-16 md:pb-12 lg:grid-cols-[7fr_5fr] lg:gap-12 lg:px-16">
      <div>
        <div
          className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,211,238,0.25)] bg-[rgba(34,211,238,0.08)] px-3 py-2"
          style={fadeUpStyle(stage, 100)}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent-cyan"
            style={{
              animation:
                "uibowl-pulse-live 1600ms var(--ease-in-out-expo) infinite",
            }}
          />
          <span className="t-caption tracking-[0.08em] text-accent-cyan">
            LIVE DEMO
          </span>
        </div>

        <h1
          className="t-display mt-6 text-text-primary [text-wrap:balance]"
          style={fadeUpStyle(stage, 160)}
        >
          UI 플로우를 넣으면,
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(120deg, var(--color-accent-indigo), var(--color-accent-cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            패턴이 나옵니다.
          </span>
        </h1>

        <p
          className="mt-6 max-w-[480px] text-[15px] font-normal leading-[1.5] text-text-secondary md:text-[17px]"
          style={fadeUpStyle(stage, 220)}
        >
          EfficientNet과 LSTM이 연속된 모바일 화면 흐름을 읽고, 63개 UI/UX
          패턴을 Top-3 후보와 신뢰도 점수로 자동 분류합니다.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center gap-4 md:gap-6"
          style={fadeUpStyle(stage, 280)}
        >
          <button
            type="button"
            className="uibowl-btn-primary"
            style={{ padding: "14px 24px", fontSize: 14 }}
            onClick={() => navigate(ROUTES.UPLOAD)}
          >
            분석 시작하기 <ArrowRight size={14} />
          </button>
          <button
            type="button"
            onClick={() => navigate(ROUTES.RESULT)}
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            샘플 결과 보기 <ArrowRight size={12} />
          </button>
        </div>
      </div>

      <IsometricPhones screens={HERO_SCREENS} visible={stage} />
    </div>
  );
};

export default HeroSection;

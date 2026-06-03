import type { HeroScreen } from "@/types/uibowl";
import BBoxOverlay from "./BBoxOverlay";
import HeroPhoneUI from "./HeroPhoneUI";
import PatternMatchCard from "./PatternMatchCard";

interface IsometricPhonesProps {
  screens: HeroScreen[];
  visible: boolean;
}

const PHONE_WIDTH = 240;
const PHONE_HEIGHT = 500;

const getPhonePosition = (i: number) => ({
  offsetX: i * 60 - 60,
  offsetY: i === 1 ? -10 : 0,
  offsetZ: i === 0 ? -40 : i === 1 ? 0 : 40,
});

const getPhoneShadow = (isMiddle: boolean) =>
  isMiddle
    ? "0 30px 60px rgba(0,0,0,0.5), 0 0 32px rgba(99,102,241,0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
    : "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)";

const IsometricPhones = ({ screens, visible }: IsometricPhonesProps) => (
  <div
    className="relative hidden h-[480px] md:block lg:h-[600px]"
    style={{
      perspective: "1400px",
      opacity: visible ? 1 : 0,
      transition: "opacity 480ms var(--ease-out-expo) 600ms",
    }}
  >
    <div
      className="absolute inset-0"
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-18deg) rotateX(8deg)",
      }}
    >
      {screens.map((s, i) => {
        const { offsetX, offsetY, offsetZ } = getPhonePosition(i);
        const rest = `translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px)`;
        const isMiddle = i === 1;

        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              width: PHONE_WIDTH,
              height: PHONE_HEIGHT,
              marginLeft: -PHONE_WIDTH / 2,
              marginTop: -PHONE_HEIGHT / 2,
              transform: rest,
              transformStyle: "preserve-3d",
              ["--rest" as string]: rest,
              animation: `uibowl-float 8000ms var(--ease-in-out-expo) ${i * 500}ms infinite`,
              opacity: visible ? 1 : 0,
              transition: `opacity 480ms var(--ease-out-expo) ${800 + i * 200}ms, transform 480ms var(--ease-out-expo) ${800 + i * 200}ms`,
            }}
          >
            <div
              className="absolute inset-0 overflow-hidden rounded-[28px] border border-border-strong bg-bg-overlay"
              style={{ boxShadow: getPhoneShadow(isMiddle) }}
            >
              <HeroPhoneUI variant={s.variant} />
            </div>
            <BBoxOverlay boxes={s.boxes} screenIdx={i} />
          </div>
        );
      })}
    </div>

    <PatternMatchCard visible={visible} />
  </div>
);

export default IsometricPhones;

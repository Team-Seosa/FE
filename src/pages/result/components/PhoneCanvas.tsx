import PhoneMockUI from "@/components/common/PhoneMockUI";
import type { ResultScreen, ThumbVariant } from "@/types/uibowl";
import ComponentMarker from "./ComponentMarker";

interface PhoneCanvasProps {
  screen: ResultScreen;
}

const PhoneCanvas = ({ screen }: PhoneCanvasProps) => (
  <div className="mt-6 flex justify-center">
    <div className="relative">
      <div
        className="relative h-[580px] w-[280px] overflow-hidden rounded-3xl border border-border-strong bg-bg-overlay"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
      >
        <PhoneMockUI variant={screen.step as ThumbVariant} />
      </div>
      <div className="absolute inset-0 h-[580px] w-[280px]">
        {screen.components.map((c, i) => (
          <ComponentMarker
            key={`${screen.step}-${i}`}
            component={c}
            index={i}
          />
        ))}
      </div>
    </div>
  </div>
);

export default PhoneCanvas;

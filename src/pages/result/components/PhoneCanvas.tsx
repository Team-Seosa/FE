import PhoneMockUI from "@/components/common/PhoneMockUI";
import type { ResultScreen, ThumbVariant } from "@/types/uibowl";
import ComponentMarker from "./ComponentMarker";

interface PhoneCanvasProps {
  screen: ResultScreen;
  previewUrl?: string;
}

const PhoneCanvas = ({ screen, previewUrl }: PhoneCanvasProps) => (
  <div className="mt-6 flex justify-center">
    <div className="relative origin-top max-[359px]:scale-90">
      <div
        className="relative h-[580px] w-[280px] overflow-hidden rounded-3xl border border-border-strong bg-bg-overlay"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt={`화면 ${screen.step}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <PhoneMockUI variant={screen.step as ThumbVariant} />
        )}
      </div>
      {screen.components.length > 0 && (
        <div className="absolute inset-0 h-[580px] w-[280px]">
          {screen.components.map((c, i) => (
            <ComponentMarker
              key={`${screen.step}-${i}`}
              component={c}
              index={i}
            />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default PhoneCanvas;

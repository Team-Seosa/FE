import { useEffect, useState } from "react";
import UIBowlNav from "@/components/common/UIBowlNav";
import HeroSection from "./components/HeroSection";
import LandingBackground from "./components/LandingBackground";
import LandingFooter from "./components/LandingFooter";
import MetricsStrip from "./components/MetricsStrip";

const LandingPage = () => {
  const [stage, setStage] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setStage(true), 50);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="uibowl-root relative min-h-screen w-full overflow-hidden bg-bg-base">
      <LandingBackground />
      <div className="relative z-10">
        <UIBowlNav />
        <div className="mx-auto w-full max-w-[1280px]">
          <HeroSection stage={stage} />
          <MetricsStrip />
          <LandingFooter />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

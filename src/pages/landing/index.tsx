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
    <div
      className="uibowl-root relative min-h-full overflow-hidden"
      style={{ width: 1280 }}
    >
      <LandingBackground />
      <div className="relative z-10">
        <UIBowlNav />
        <HeroSection stage={stage} />
        <MetricsStrip />
        <LandingFooter />
      </div>
    </div>
  );
};

export default LandingPage;

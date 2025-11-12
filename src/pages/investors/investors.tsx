import line from "/line_bg.svg";
import Yay2 from "/Yay2.png";
import ProblemSolution from "./components/ProblemSolution";
import BusinessMetrics from "./components/BusinessMetrics";
import MarketOpportunity from "./components/MarketOpportunity";
import WhySmatchyWins from "./components/WhySmatchyWins";
import DifferentiationSection from "./components/DifferentiationSection";
import TractionProofSection from "./components/TractionProofSection";
import PeopleSay from "./components/PeopleSay";
import ProductFeatures from "./components/ProductFeatures";
import UserJourneySection from "./components/UserJourneySection";
import BusinessModelSection from "./components/BusinessModelSection";
import RoadmapSection from "./components/RoadmapSection";
import AmbitionVisionSection from "./components/AmbitionVisionSection";
import TheTeamSection from "./components/TheTeamSection";
import JoinSmatchy from "./components/JoinSmatchy";
import InvestorsHeroBanner from "./components/InvestorsHeroBanner";

export default function InvestorsPage() {
  return (
    <div>
      <div className="relative w-full min-h-screen">
        <div className="relative container">
          {/* Line background */}
          <img
            src={line}
            alt=""
            className="absolute w-auto -top-56 left-28 scale-[7] origin-top-left z-30 px-1.5 rotate-[3.5deg]"
          />
        </div>
        <InvestorsHeroBanner />
        <div className="relative flex items-center justify-center mt-20 z-40">
          <div className="relative flex items-center justify-center text-center leading-10 bg-[#F49F3F] rounded-[30px] text-white font-bold text-[32px] w-[930px] p-6 ">
            Raising 1M€ for 20% equity to accelerate product development and
            international growth.
            <img className="absolute -top-3 left-1" src={Yay2} alt="" />
          </div>
        </div>
        <ProblemSolution />
        <BusinessMetrics />
        <MarketOpportunity />
        <WhySmatchyWins />
        <DifferentiationSection />
        <TractionProofSection />
        <PeopleSay />
        <ProductFeatures />
        <UserJourneySection />
        <BusinessModelSection />
        <RoadmapSection />
        <AmbitionVisionSection />
        <TheTeamSection />
        <JoinSmatchy />
      </div>
    </div>
  );
}

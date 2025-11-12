import HeroBanner from "../components/heroBanner";
import Yay2 from "../../public/Yay2.png";
import Presentation from "../components/presentation";
import CategorySlider from "../components/CategorySlider";
import AwardsSection from "../components/AwardsSection";
import Testimonials from "../components/Testimonials";
import line from "/line_bg.svg";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="relative container">
        {/* Line background */}
        <img
          src={line}
          alt=""
          className="absolute w-auto top-0 left-0 scale-[7.4] origin-top-left z-20 px-1.5"
        />
      </div>
      <HeroBanner />
      <div className="flex items-center justify-center mt-28">
        <div className="relative flex items-center justify-center bg-[#F49F3F] rounded-[30px] text-white font-bold text-[32px] w-[504px] h-[109px]">
          Find activities near you
          <img className="absolute top-0 left-0" src={Yay2} alt="" />
        </div>
      </div>
      <Presentation />
      <CategorySlider />
      <AwardsSection />
      <Testimonials />
    </div>
  );
}

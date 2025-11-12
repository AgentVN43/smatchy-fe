import heroBanner from "/hero-banner.png";
import Yay from "/Yay.png";
import { MdLocalPhone, MdOutlineFileDownload } from "react-icons/md";
export default function InvestorsHeroBanner() {
  return (
    <>
      <div
        className="relative w-full h-full pt-20 z-50"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="container z-50 mx-auto">
          <div className="flex flex-col items-center gap-6 py-32">
            <h2 className="relative font-bold text-5xl leading-14 text-white text-center">
              <span className="text-[#FCA13B]">SMATCHY</span>, THE PLATFORM
              CONNECTING THE SPORTS WORLD - AND TURNING IT INTO A SCALABLE
              BUSINESS
              <img className="absolute -top-24 -right-8" src={Yay} alt="" />
            </h2>
            <p className="font-medium text-2xl text-white text-center">
              A massive market, a clear need, a unique opportunity
            </p>
            <div className="flex gap-4">
              <button className="flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-[#F49F3F] text-white">
                <MdOutlineFileDownload size={24} /> Download our investor brief
              </button>
              <button className="flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0A4A60]">
                <MdLocalPhone size={24} /> Schedule a call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative h-[539px] bg-[#0A4A60]"></div>
      <div className="relative h-[145px] bg-[#0A4A60]"></div> */}
    </>
  );
}

import { FaArrowRightLong } from "react-icons/fa6";
import differentiation from "/investors/differentiation.png";
import Yay3 from "/Yay3.png";
const DifferentiationSection = () => {
  return (
    <div className="container relative z-30 pb-16!">
      <div className="flex flex-col items-center">
        <div className=" inline-flex">
          <h2 className="relative text-center text-5xl text-[#0A4A60] font-bold mb-12">
            OUR <span className="text-[#FCA13B]">DIFFERENTIATION</span>
            <img className="absolute -top-20 -right-20 " src={Yay3} alt="" />
          </h2>
        </div>
        <p className="text-center text-[#0A4A60] mb-6 text-base">
          Smatchy is not just a social network – it's the central ecosystem for
          all sports.
        </p>

        <div className="mb-8">
          <button className="flex justify-center items-center gap-2 text-white rounded-full px-4 py-2 font-semibold bg-[#FCA13B] transition">
            Learn More <FaArrowRightLong />
          </button>
        </div>

        <div className="w-full">
          <img src={differentiation} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DifferentiationSection;

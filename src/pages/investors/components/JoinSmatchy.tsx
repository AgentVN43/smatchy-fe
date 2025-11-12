import { MdLocalPhone, MdOutlineFileDownload } from "react-icons/md";
import background from "/background.png";
import Yay from "/Yay.png";

export default function JoinSmatchy() {
  return (
    <div
      className="relative z-20 w-full h-[360px] mb-80 bg-cover bg-bottom"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container py-16!">
        <div className="flex flex-col items-center">
          <div className=" inline-flex">
            <h2 className="relative text-center text-5xl text-white font-bold mb-12">
              JOIN THE<span className="text-[#FCA13B]"> SMATCHY</span> ADVENTURE
              <img className="absolute -top-20 -right-20 " src={Yay} alt="" />
            </h2>
          </div>
          <p className="text-center text-white mb-12 text-base">
            Invest in the platform transforming the sports world
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
  );
}

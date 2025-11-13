import { formatDateEvent } from "../../../utils/formatDateEvent";
import { FaArrowLeft } from "react-icons/fa6";
import type { Event } from "../../events/type";
import { useNavigate } from "react-router-dom";
export default function DetailHeroBanner({ detail }: { detail: Event }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="relative w-full h-[621px] pt-20 z-30"
        style={{
          backgroundImage: `url(${detail?.image})`,
          backgroundRepeat: "contain",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-40 bg-[#00000054]"></div>
        <div className="container relative z-50 mx-auto mt-32!">
          <button
            onClick={() => navigate("/events")}
            className="flex items-center justify-center text-[#45585E] text-xl font-medium mb-8 gap-3 bg-[#FFFFFF99] px-6 py-2 rounded-xl cursor-pointer"
          >
            <FaArrowLeft size={30} /> Back to events
          </button>
          <div className="z-50 w-full flex flex-col items-start justify-center">
            <h2 className="text-5xl font-bold text-white uppercase">
              {detail?.title}
            </h2>
            <p className="text-2xl font-medium text-center text-white mt-4">
              {formatDateEvent(detail?.date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

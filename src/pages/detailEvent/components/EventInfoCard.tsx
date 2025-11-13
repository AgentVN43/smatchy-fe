import type { Event } from "../../events/type";
import Yay3 from "/Yay3.png";

export default function EventInfoCard({ detail }: { detail: Event }) {
  return (
    <div>
      <div className="flex flex-col items-start gap-6 bg-[#FFF3E6] p-6 rounded-3xl">
        <h2 className="flex items-center justify-center relative gap-3">
          <img className="h-8 w-8" src={detail.iconType} alt="" />
          <span className="text-[28px] text-[#0F262E] font-bold uppercase        ">
            {detail.type}
          </span>
          <img className="absolute -top-14 -right-14 h-24" src={Yay3} alt="" />
        </h2>
        <div className="">
          <p className="text-[#45585E] font-medium">Duration</p>
          <p className="text-[#0F262E] text-xl font-semibold">
            {detail.duration}
          </p>
        </div>
        <div className="text-[#0F262E] text-xl">{detail.desc}</div>
      </div>
    </div>
  );
}

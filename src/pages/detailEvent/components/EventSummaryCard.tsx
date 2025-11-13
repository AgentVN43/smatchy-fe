import type { Event } from "../../events/type";
import pro from "/events/pro.png";
import map from "/events/map.png";
import level from "/events/level.png";
import user from "/events/user.png";
import download from "/events/download.png";
import pictureEvent from "/events/picture-event.png";
export default function EventSummaryCard({ detail }: { detail: Event }) {
  return (
    <div>
      {detail.price && (
        <div className="shadow-2xl bg-[#0A4A60] rounded-t-3xl px-6 pt-3 pb-12 ">
          <div className="flex items-center justify-start gap-1 p-1 text-white text-xs font-medium">
            <img className="h-8 w-8" src={pro} alt="" />

            <p className="text-2xl font-bold">
              {detail.price.toFixed(2).replace(".", ",")}
            </p>
            <span className="text-xl">€</span>
            <p className="text-[#ECEEEF]">/ Per participant</p>
          </div>
        </div>
      )}
      <div
        className={`flex flex-col gap-6 bg-white rounded-3xl px-6 pt-6 pb-16 ${
          detail.price ? "-mt-10" : ""
        } shadow-2xl`}
      >
        <div className="flex gap-4">
          <div className="inline-flex">
            <div className="bg-[#fff1e1] rounded-full p-3">
              <img className="h-9 w-9" src={map} alt="" />
            </div>
          </div>
          <div className="text-xl">
            <p className="text-[#0F262E] font-bold">Location</p>
            <p className="text-[#33474E]">{detail.location}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="inline-flex">
            <div className="bg-[#fff1e1] rounded-full p-3">
              <img className="h-9 w-9" src={level} alt="" />
            </div>
          </div>
          <div className="text-xl">
            <p className="text-[#0F262E] font-bold">Level</p>
            <p className="text-[#33474E]">{detail.level}</p>
          </div>
        </div>
        <div className="flex gap-4 border-b pb-6 border-[#DADEDF]">
          <div className="inline-flex">
            <div className="bg-[#fff1e1] rounded-full p-3">
              <img className="h-9 w-9" src={user} alt="" />
            </div>
          </div>
          <div className="text-xl">
            <p className="text-[#0F262E] font-bold">Participants</p>
            <p className="text-[#33474E]">{detail.participants}</p>
          </div>
        </div>
        <div className="flex items-end gap-4">
          <img
            className="h-16 w-16 rounded-2xl border border-[#ECEEEF]"
            src={pictureEvent}
            alt=""
          />
          <div className="flex flex-col gap-1">
            <p className="text-[#45585E]">Activity proposed by</p>
            <p className="text-xl font-semibold">Les Bornées</p>
          </div>
        </div>
        <div className="flex items-center bg-[#FFF3E6] border border-[#FCA13B] rounded-xl p-5">
          <img className="h-16" src={download} alt="" />
          <p className="text-xl text-[#0F262E]">
            Discover more exciting sports experiences on the Smatchy app
          </p>
        </div>
        <button className="flex justify-center items-center gap-4 px-6 py-3 rounded-full bg-[#F49F3F] text-white">
          Download Now
        </button>
      </div>
    </div>
  );
}

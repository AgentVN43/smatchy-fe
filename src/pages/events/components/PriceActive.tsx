import pro from "/events/pro.png";

export default function PriceActive({ price }: { price: number }) {
  return (
    <div className="bg-[#0A4A60] rounded-lg w-[130px]">
      <div className="flex items-center justify-center gap-1 p-1 text-white text-xs font-medium">
        <img className="h-3 w-3" src={pro} alt="" />
        <p>Per participant</p>
      </div>
      <div className="p-0.5">
        <div className="flex items-center justify-center bg-white rounded-b-lg p-1">
          <p className="text-xl text-[#0A4A60] font-bold">
            {price.toFixed(2).replace(".", ",")} €
          </p>
        </div>
      </div>
    </div>
  );
}

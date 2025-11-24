import type { SectionItem } from "../types";

export default function ProblemSolutionCard({
  item,
  bgColor,
}: {
  item: SectionItem;
  bgColor: string;
  accentColor: string;
}) {
  return (
    <div
      className={`rounded-lg p-3 md:p-4 lg:p-4 flex gap-3 md:gap-4 items-start shadow-md`}
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={item.icon}
        alt={item.title}
        className="w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 object-contain shrink-0"
      />
      <div>
        <h3 className="text-sm md:text-base lg:text-xl font-bold">
          {item.title}
        </h3>
        <p className="text-xs md:text-sm lg:text-base">{item.description}</p>
      </div>
    </div>
  );
}

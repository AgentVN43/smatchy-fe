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
      className={`rounded-lg p-4 flex gap-4 items-start shadow-md`}
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={item.icon}
        alt={item.title}
        className="w-14 h-14 object-contain"
      />
      <div>
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="">{item.description}</p>
      </div>
    </div>
  );
}

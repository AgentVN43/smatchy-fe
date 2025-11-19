import type { SectionItem } from "../types";
import ProblemSolutionCard from "./ProblemSolutionCard";

export default function ListProblemSolution({
  title,
  items,
  bgColor,
  accentColor,
}: {
  title: string;
  items: SectionItem[];
  bgColor: string;
  accentColor: string;
}) {
  return (
    <div className="flex-1 lg:px-4 px-2 md:px-3">
      <h2
        className="inline-flex rounded-lg text-white px-2 md:px-3 py-1 text-sm md:text-lg lg:text-2xl font-bold mb-4 md:mb-5 lg:mb-6"
        style={{ backgroundColor: accentColor }}
      >
        {title}
      </h2>
      <div className="space-y-4 md:space-y-5 lg:space-y-6">
        {items.map((item, index) => (
          <ProblemSolutionCard
            key={index}
            item={item}
            bgColor={bgColor}
            accentColor={accentColor}
          />
        ))}
      </div>
    </div>
  );
}

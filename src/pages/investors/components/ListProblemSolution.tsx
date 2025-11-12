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
    <div className="flex-1 px-4">
      <h2
        className="inline-flex rounded-lg text-white px-3 py-1 text-2xl font-bold mb-6"
        style={{ backgroundColor: accentColor }}
      >
        {title}
      </h2>
      <div className="space-y-6">
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

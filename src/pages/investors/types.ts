export interface SectionItem {
  icon: string;
  title: string;
  description: string;
}

export interface Section {
  title: string;
  items: SectionItem[];
}

export interface ProblemSolutionData {
  problem: Section;
  solution: Section;
}

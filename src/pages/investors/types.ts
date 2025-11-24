export interface SectionItem {
  icon: string;
  title: string;
  description: string;
}

export interface Section {
  title: string;
  items: SectionItem[];
  url: string;
  description: string;
}

export interface ProblemSolutionData {
  problem: Section;
  solution: Section;
  url: string;
  description: string;
}

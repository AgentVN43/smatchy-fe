// src/hooks/useInvestor.ts
import { useQuery } from '@tanstack/react-query';
import { fetchInvestor } from '../services/strapi';

interface BlockBase {
  id: number;
  __component: string;
}

export interface TitleBlock extends BlockBase {
  __component: "blocks.title";
  title: string;
  button?: Button[];
}

export interface ProblemSolutionBlock extends BlockBase {
  __component: "blocks.problem-solution";
  title: string;
  problem_title: string;
  solution_title: string;
  problem_items: Item[];
  solution_items: Item[];
}

export interface StatsBlock extends BlockBase {
  __component: "blocks.stats";
  title: string;
  stats_item: StatsItem[];
  stats_icon: StatsIcon[];
}

export interface SliderBlock extends BlockBase {
  __component: "hero.slider";
  title: string;
  heading?: string;
  sub_heading?: string;
  button?: Button[];
  slider_images?: Image[] | null;
}

export interface MediaBlock extends BlockBase {
  __component: "shared.media";
  title: string;
  file: Image | null;
}

export interface IconTextBlock extends BlockBase {
  __component: "shared.icon-text";
  title: string;
  heading: string;
  sub_heading?: string;
  description?: string;
  icon?: any;
  button?: Button | null;
}

export type Block = 
  | TitleBlock 
  | ProblemSolutionBlock 
  | StatsBlock 
  | SliderBlock 
  | MediaBlock 
  | IconTextBlock;

interface Button {
  id: number;
  label: string;
  link: string;
  style: string | null;
}

interface Item {
  id: number;
  title: string;
  description: string;
}

interface StatsItem {
  id: number;
  title: string | null;
  heading: string | null;
  description: string | null;
  sub_heading: string | null;
}

interface StatsIcon {
  id: number;
  title: string;
  description: string;
  heading: string;
  sub_heading: string;
}

interface Image {
  id: number;
  documentId: string;
  name: string;
  url: string;
  width: number;
  height: number;
  // Các fields khác...
}

export const useInvestor = () => {
  return useQuery({
    queryKey: ['investor'],
    queryFn: fetchInvestor,
  });
};
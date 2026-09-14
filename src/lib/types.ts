export type ProjectSource = 'github' | 'huggingface';

export interface Project {
  id: string;
  source: ProjectSource;
  title: string;
  slogan: string;
  description: string;
  tags: string[];
  language?: string;
  stars: number;
  downloads?: number;
  likes?: number;
  url: string;
  demoUrl?: string;
  featured: boolean;
  featuredOrder: number;
  updated: string;
}
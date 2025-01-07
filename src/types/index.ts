export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface TechStack {
  [category: string]: string[];
}
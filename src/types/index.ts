export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface TechStack {
  [category: string]: string[];
}

export interface Experience {
  company: string;
  position: string;
  description: string;
}
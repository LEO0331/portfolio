export type ProjectStatus = "live" | "archived" | "in-progress";

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  teamType: "solo" | "team";
  techStack: string[];
  categories: string[];
  features: string[];
  challenges?: string[];
  outcomes?: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  startDate?: string;
  endDate?: string;
}

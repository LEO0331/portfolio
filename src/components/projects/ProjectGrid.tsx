import type { Project } from "../../types/project";
import { Button } from "../common/Button";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onReset: () => void;
  onViewDetails?: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ProjectGrid({ projects, onReset, onViewDetails }: ProjectGridProps): JSX.Element {
  if (projects.length === 0) {
    return (
      <div className="panel p-7 text-center sm:p-10">
        <p className="eyebrow">No Match</p>
        <h3 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">No projects match your current filters</h3>
        <p className="mt-2 text-sm text-slate-600">Try clearing filters or using a different keyword.</p>
        <Button className="mt-5" variant="secondary" onClick={onReset}>
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
}

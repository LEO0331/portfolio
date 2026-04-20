import type { Project } from "../../types/project";
import { Button } from "../common/Button";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onReset: () => void;
}

export function ProjectGrid({ projects, onReset }: ProjectGridProps): JSX.Element {
  if (projects.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <h3 className="text-lg font-semibold text-slate-900">No projects match your filters</h3>
        <p className="mt-2 text-sm text-slate-600">Try clearing filters or using a different keyword.</p>
        <Button className="mt-4" variant="secondary" onClick={onReset}>
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

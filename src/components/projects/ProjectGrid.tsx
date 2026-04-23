import type { Project } from "../../types/project";
import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";
import { Button } from "../common/Button";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onReset: () => void;
  onViewDetails?: (project: Project, trigger: HTMLButtonElement) => void;
}

export function ProjectGrid({ projects, onReset, onViewDetails }: ProjectGridProps): JSX.Element {
  const { locale } = useLocale();
  const text = copy[locale];

  if (projects.length === 0) {
    return (
      <div className="panel p-7 text-center sm:p-10">
        <p className="eyebrow">{text.projects.noMatch}</p>
        <h3 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">{text.projects.noMatchTitle}</h3>
        <p className="mt-2 text-sm text-slate-600">{text.projects.noMatchDescription}</p>
        <Button className="mt-5" variant="secondary" onClick={onReset}>
          {text.projects.resetFilters}
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

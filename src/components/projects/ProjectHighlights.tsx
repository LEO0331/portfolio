import type { Project } from "../../types/project";

interface ProjectHighlightsProps {
  allProjects: Project[];
  visibleProjects: Project[];
}

export function ProjectHighlights({ allProjects, visibleProjects }: ProjectHighlightsProps): JSX.Element {
  const liveCount = allProjects.filter((project) => project.status === "live").length;
  const featuredCount = allProjects.filter((project) => project.featured).length;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Visible Projects</p>
        <p className="mt-1 text-2xl font-semibold text-slate-900">{visibleProjects.length}</p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Featured Projects</p>
        <p className="mt-1 text-2xl font-semibold text-slate-900">{featuredCount}</p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Live Projects</p>
        <p className="mt-1 text-2xl font-semibold text-slate-900">{liveCount}</p>
      </div>
    </div>
  );
}

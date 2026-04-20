import type { Project } from "../../types/project";

interface ProjectHighlightsProps {
  allProjects: Project[];
  visibleProjects: Project[];
}

export function ProjectHighlights({ allProjects, visibleProjects }: ProjectHighlightsProps): JSX.Element {
  const liveCount = allProjects.filter((project) => project.status === "live").length;
  const featuredCount = allProjects.filter((project) => project.featured).length;

  const stats = [
    { label: "Visible", value: visibleProjects.length, tone: "text-brand-700" },
    { label: "Featured", value: featuredCount, tone: "text-slate-900" },
    { label: "Live", value: liveCount, tone: "text-teal-700" }
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="panel-soft p-4">
          <p className="eyebrow">{stat.label}</p>
          <p className={`mt-1 text-3xl font-bold ${stat.tone}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

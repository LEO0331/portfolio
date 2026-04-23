import type { Project } from "../../types/project";
import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";

interface ProjectHighlightsProps {
  allProjects: Project[];
  visibleProjects: Project[];
}

export function ProjectHighlights({ allProjects, visibleProjects }: ProjectHighlightsProps): JSX.Element {
  const { locale } = useLocale();
  const text = copy[locale];
  const liveCount = allProjects.filter((project) => project.status === "live").length;
  const featuredCount = allProjects.filter((project) => project.featured).length;

  const stats = [
    { label: text.projects.visible, value: visibleProjects.length, tone: "text-brand-700" },
    { label: text.projects.featured, value: featuredCount, tone: "text-slate-900" },
    { label: text.projects.live, value: liveCount, tone: "text-teal-700" }
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

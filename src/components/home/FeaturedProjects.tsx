import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { getFeaturedProjects } from "../../utils/projectUtils";
import { getButtonClassName } from "../common/Button";
import { Section } from "../layout/Section";
import { ProjectGrid } from "../projects/ProjectGrid";

export function FeaturedProjects(): JSX.Element {
  const featuredProjects = getFeaturedProjects(projects, 3, 6);

  return (
    <Section>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-7 sm:gap-4">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Featured Projects</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            Ordered to show strongest and live work first, with direct paths to demos and repositories.
          </p>
        </div>
        <Link
          to="/projects"
          aria-label="View all projects"
          className={getButtonClassName("secondary")}
        >
          View All Projects
        </Link>
      </div>
      <ProjectGrid projects={featuredProjects} onReset={() => undefined} />
    </Section>
  );
}

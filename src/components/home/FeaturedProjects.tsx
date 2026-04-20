import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { getFeaturedProjects } from "../../utils/projectUtils";
import { Button } from "../common/Button";
import { Section } from "../layout/Section";
import { ProjectGrid } from "../projects/ProjectGrid";

export function FeaturedProjects(): JSX.Element {
  const featuredProjects = getFeaturedProjects(projects, 3, 6);

  return (
    <Section>
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Featured Projects</h2>
          <p className="mt-1 text-slate-600">Selected projects ordered by impact and live availability.</p>
        </div>
        <Link to="/projects" aria-label="View all projects">
          <Button variant="secondary">View All</Button>
        </Link>
      </div>
      <ProjectGrid projects={featuredProjects} onReset={() => undefined} />
    </Section>
  );
}

import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";
import { getLocalizedProjects } from "../../utils/projectLocalization";
import { getFeaturedProjects } from "../../utils/projectUtils";
import { getButtonClassName } from "../common/Button";
import { Section } from "../layout/Section";
import { ProjectGrid } from "../projects/ProjectGrid";

export function FeaturedProjects(): JSX.Element {
  const { locale, toLocalePath } = useLocale();
  const text = copy[locale];
  const localizedProjects = getLocalizedProjects(projects, locale);
  const featuredProjects = getFeaturedProjects(localizedProjects, 3, 6);

  return (
    <Section>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-7 sm:gap-4">
        <div>
          <p className="eyebrow">{text.home.selectedWorkEyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{text.home.featuredProjects}</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            {text.home.featuredDescription}
          </p>
        </div>
        <Link
          to={toLocalePath("/projects")}
          aria-label="View all projects"
          className={getButtonClassName("secondary")}
        >
          {text.home.viewAllProjects}
        </Link>
      </div>
      <ProjectGrid projects={featuredProjects} onReset={() => undefined} />
    </Section>
  );
}

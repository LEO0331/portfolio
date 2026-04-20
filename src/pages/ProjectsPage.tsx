import { ProjectFilters } from "../components/projects/ProjectFilters";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { ProjectHighlights } from "../components/projects/ProjectHighlights";
import { ProjectSearch } from "../components/projects/ProjectSearch";
import { Section } from "../components/layout/Section";
import { projects } from "../data/projects";
import { useProjectFilters } from "../hooks/useProjectFilters";
import { usePageSeo } from "../utils/seo";

export function ProjectsPage(): JSX.Element {
  usePageSeo(
    "Projects",
    "Filterable portfolio projects including roles, technologies, live demos, and GitHub source repositories."
  );

  const {
    searchTerm,
    selectedCategory,
    selectedTechnology,
    selectedStatus,
    categories,
    technologies,
    filteredProjects,
    setSearchTerm,
    setSelectedCategory,
    setSelectedTechnology,
    setSelectedStatus,
    resetFilters
  } = useProjectFilters();

  return (
    <Section>
      <header className="mb-6 space-y-2.5 sm:mb-7 sm:space-y-3">
        <p className="eyebrow">Portfolio Work</p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Projects</h1>
        <p className="max-w-3xl text-sm text-slate-600 sm:text-base">
          Filter by category, technology, and status. Each project includes role context, technical stack, and direct links to live demo and source code.
        </p>
      </header>

      <div className="space-y-3.5 sm:space-y-4">
        <ProjectSearch value={searchTerm} onChange={setSearchTerm} />
        <ProjectFilters
          categories={categories}
          technologies={technologies}
          selectedCategory={selectedCategory}
          selectedTechnology={selectedTechnology}
          selectedStatus={selectedStatus}
          onCategoryChange={setSelectedCategory}
          onTechnologyChange={setSelectedTechnology}
          onStatusChange={setSelectedStatus}
        />
        <ProjectHighlights allProjects={projects} visibleProjects={filteredProjects} />
        <ProjectGrid projects={filteredProjects} onReset={resetFilters} />
      </div>
    </Section>
  );
}

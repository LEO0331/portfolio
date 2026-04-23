import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectFilters } from "../components/projects/ProjectFilters";
import { ProjectDetailDrawer } from "../components/projects/ProjectDetailDrawer";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { ProjectHighlights } from "../components/projects/ProjectHighlights";
import { ProjectSearch } from "../components/projects/ProjectSearch";
import { Section } from "../components/layout/Section";
import { projects } from "../data/projects";
import { useProjectFilters } from "../hooks/useProjectFilters";
import type { Project } from "../types/project";
import { usePageSeo } from "../utils/seo";

function isValidProjectSlug(value: string): boolean {
  return /^[a-z0-9-]{1,120}$/.test(value);
}

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const updateProjectQueryParam = useCallback(
    (projectSlug: string | null, replace = false) => {
      const next = new URLSearchParams(searchParams);
      if (projectSlug) {
        next.set("project", projectSlug);
      } else {
        next.delete("project");
      }
      setSearchParams(next, { replace });
    },
    [searchParams, setSearchParams]
  );

  const selectedProject = useMemo(
    () => projects.find((project) => project.slug === selectedProjectSlug) ?? null,
    [selectedProjectSlug]
  );

  useEffect(() => {
    const paramSlug = searchParams.get("project");
    if (!paramSlug) {
      setSelectedProjectSlug(null);
      return;
    }

    if (!isValidProjectSlug(paramSlug)) {
      updateProjectQueryParam(null, true);
      return;
    }

    const projectExists = projects.some((project) => project.slug === paramSlug);
    if (projectExists) {
      setSelectedProjectSlug(paramSlug);
      return;
    }

    updateProjectQueryParam(null, true);
  }, [searchParams, updateProjectQueryParam]);

  const onOpenDetails = useCallback(
    (project: Project, trigger: HTMLButtonElement) => {
      triggerRef.current = trigger;
      setSelectedProjectSlug(project.slug);
      updateProjectQueryParam(project.slug);
    },
    [updateProjectQueryParam]
  );

  const onCloseDetails = useCallback(() => {
    setSelectedProjectSlug(null);
    updateProjectQueryParam(null);
    triggerRef.current?.focus();
  }, [updateProjectQueryParam]);

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
        <ProjectGrid projects={filteredProjects} onReset={resetFilters} onViewDetails={onOpenDetails} />
      </div>

      {selectedProject ? (
        <ProjectDetailDrawer project={selectedProject} isOpen={Boolean(selectedProject)} onClose={onCloseDetails} />
      ) : null}
    </Section>
  );
}

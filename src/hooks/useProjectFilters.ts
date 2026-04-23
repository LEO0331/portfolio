import { useMemo, useState } from "react";
import type { Project, ProjectStatus } from "../types/project";
import {
  extractUniqueCategories,
  extractUniqueTechnologies,
  filterProjects,
  sortProjects
} from "../utils/projectUtils";

export interface UseProjectFiltersResult {
  searchTerm: string;
  selectedCategory: string;
  selectedTechnology: string;
  selectedStatus: "all" | ProjectStatus;
  categories: string[];
  technologies: string[];
  filteredProjects: Project[];
  setSearchTerm: (value: string) => void;
  setSelectedCategory: (value: string) => void;
  setSelectedTechnology: (value: string) => void;
  setSelectedStatus: (value: "all" | ProjectStatus) => void;
  resetFilters: () => void;
}

export function useProjectFilters(projectList: Project[]): UseProjectFiltersResult {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState<"all" | ProjectStatus>("all");

  const categories = useMemo(() => extractUniqueCategories(projectList), [projectList]);
  const technologies = useMemo(() => extractUniqueTechnologies(projectList), [projectList]);

  const filteredProjects = useMemo(
    () =>
      sortProjects(
        filterProjects(projectList, {
          searchTerm,
          category: selectedCategory,
          technology: selectedTechnology,
          status: selectedStatus
        })
      ),
    [projectList, searchTerm, selectedCategory, selectedTechnology, selectedStatus]
  );

  return {
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
    resetFilters: () => {
      setSearchTerm("");
      setSelectedCategory("all");
      setSelectedTechnology("all");
      setSelectedStatus("all");
    }
  };
}


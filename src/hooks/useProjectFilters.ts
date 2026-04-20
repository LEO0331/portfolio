import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import type { ProjectStatus } from "../types/project";
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
  filteredProjects: typeof projects;
  setSearchTerm: (value: string) => void;
  setSelectedCategory: (value: string) => void;
  setSelectedTechnology: (value: string) => void;
  setSelectedStatus: (value: "all" | ProjectStatus) => void;
  resetFilters: () => void;
}

export function useProjectFilters(): UseProjectFiltersResult {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState<"all" | ProjectStatus>("all");

  const categories = useMemo(() => extractUniqueCategories(projects), []);
  const technologies = useMemo(() => extractUniqueTechnologies(projects), []);

  const filteredProjects = useMemo(
    () =>
      sortProjects(
        filterProjects(projects, {
          searchTerm,
          category: selectedCategory,
          technology: selectedTechnology,
          status: selectedStatus
        })
      ),
    [searchTerm, selectedCategory, selectedTechnology, selectedStatus]
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

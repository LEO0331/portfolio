import type { ProjectStatus } from "../../types/project";

interface ProjectFiltersProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTechnology: string;
  selectedStatus: "all" | ProjectStatus;
  onCategoryChange: (value: string) => void;
  onTechnologyChange: (value: string) => void;
  onStatusChange: (value: "all" | ProjectStatus) => void;
}

export function ProjectFilters({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  selectedStatus,
  onCategoryChange,
  onTechnologyChange,
  onStatusChange
}: ProjectFiltersProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-3">
      <label className="space-y-1 text-sm text-slate-700">
        <span className="font-medium">Category</span>
        <select
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-brand-600 focus:outline-none"
        >
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-1 text-sm text-slate-700">
        <span className="font-medium">Technology</span>
        <select
          value={selectedTechnology}
          onChange={(event) => onTechnologyChange(event.target.value)}
          className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-brand-600 focus:outline-none"
        >
          <option value="all">All technologies</option>
          {technologies.map((technology) => (
            <option key={technology} value={technology}>
              {technology}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-1 text-sm text-slate-700">
        <span className="font-medium">Status</span>
        <select
          value={selectedStatus}
          onChange={(event) => onStatusChange(event.target.value as "all" | ProjectStatus)}
          className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-brand-600 focus:outline-none"
        >
          <option value="all">All statuses</option>
          <option value="live">Live</option>
          <option value="in-progress">In Progress</option>
          <option value="archived">Archived</option>
        </select>
      </label>
    </div>
  );
}

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProjectSearch({ value, onChange }: ProjectSearchProps): JSX.Element {
  return (
    <label className="block text-sm text-slate-700">
      <span className="mb-1 block font-medium">Search projects</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by name, tagline, description, category, or tech"
        className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-brand-600 focus:outline-none"
      />
    </label>
  );
}

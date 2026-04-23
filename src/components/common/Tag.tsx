interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps): JSX.Element {
  return (
    <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
      {label}
    </span>
  );
}

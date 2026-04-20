interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps): JSX.Element {
  return (
    <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
      {label}
    </span>
  );
}

import { cn } from "../../utils/cn";

interface BadgeProps {
  label: string;
  tone?: "neutral" | "success" | "warning";
  className?: string;
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral: "bg-slate-100 text-slate-700",
  success: "bg-emerald-100 text-emerald-800",
  warning: "bg-amber-100 text-amber-800"
};

export function Badge({ label, tone = "neutral", className }: BadgeProps): JSX.Element {
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-medium", toneClasses[tone], className)}>
      {label}
    </span>
  );
}

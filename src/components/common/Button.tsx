import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
}

type ButtonProps = BaseProps &
  ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement> | {
    as: "a";
  } & AnchorHTMLAttributes<HTMLAnchorElement>);

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-600",
  secondary:
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-500",
  ghost: "text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-500"
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm"
};

export function Button(props: ButtonProps): JSX.Element {
  const { className, children, variant = "primary", size = "md" } = props;
  const classes = cn(
    "inline-flex items-center justify-center rounded-md font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (props.as === "a") {
    const { as: _as, ...anchorProps } = props;
    return (
      <a {...anchorProps} className={classes}>
        {children}
      </a>
    );
  }

  const { as: _as, type = "button", ...buttonProps } = props;
  return (
    <button {...buttonProps} type={type} className={classes}>
      {children}
    </button>
  );
}

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  children: ReactNode;
  label?: string;
  className?: string;
}

export function ExternalLink({ children, label, className, ...props }: ExternalLinkProps): JSX.Element {
  return (
    <a
      {...props}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={cn("text-brand-700 hover:text-brand-800 hover:underline", className)}
    >
      {children}
    </a>
  );
}

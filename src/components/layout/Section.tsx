import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { PageContainer } from "./PageContainer";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps): JSX.Element {
  return (
    <section id={id} className={cn("py-12 sm:py-16", className)}>
      <PageContainer>{children}</PageContainer>
    </section>
  );
}

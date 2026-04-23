import { useEffect, useState } from "react";
import type { Project } from "../../types/project";
import { copy } from "../../i18n/copy";
import { useLocale } from "../../i18n/LocaleContext";
import { resolveProjectImageSources } from "../../utils/projectImage";
import { toSafeExternalHref } from "../../utils/urlSafety";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { ExternalLink } from "../common/ExternalLink";
import { Tag } from "../common/Tag";

interface ProjectDetailDrawerProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

interface ListSectionProps {
  title: string;
  items?: string[];
  itemKeyPrefix: string;
}

const STATUS_TONE: Record<Project["status"], "success" | "warning" | "neutral"> = {
  live: "success",
  "in-progress": "warning",
  archived: "neutral"
};

function formatTimeline(startDate: string | undefined, endDate: string | undefined, presentLabel: string): string | undefined {
  if (!startDate && !endDate) return undefined;
  if (startDate && endDate) return `${startDate} - ${endDate}`;
  if (startDate) return `${startDate} - ${presentLabel}`;
  return endDate;
}

function getStatusLabel(
  status: Project["status"],
  labels: { live: string; inProgress: string; archived: string }
): string {
  if (status === "live") return labels.live;
  if (status === "in-progress") return labels.inProgress;
  return labels.archived;
}

function ListSection({ title, items, itemKeyPrefix }: ListSectionProps): JSX.Element | null {
  if (!items?.length) return null;

  return (
    <section className="space-y-1.5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
        {items.map((item, index) => (
          <li key={`${itemKeyPrefix}-${index}-${item}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectDetailDrawer({ project, isOpen, onClose }: ProjectDetailDrawerProps): JSX.Element | null {
  const { locale } = useLocale();
  const text = copy[locale];
  const [imageFailed, setImageFailed] = useState(false);
  const { primary: primaryImage, fallback: fallbackImage } = resolveProjectImageSources(project.image);
  const hasImage = !imageFailed && Boolean(primaryImage || fallbackImage);
  const safeDemoUrl = toSafeExternalHref(project.demoUrl);
  const safeRepoUrl = toSafeExternalHref(project.repoUrl);
  const safeCaseStudyUrl = toSafeExternalHref(project.caseStudyUrl);
  const timeline = formatTimeline(project.startDate, project.endDate, text.projects.present);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      data-testid="project-detail-overlay"
      className="fixed inset-0 z-50 flex items-end bg-slate-900/50 backdrop-blur-[1px] sm:items-stretch sm:justify-end"
      onClick={onClose}
      role="presentation"
    >
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`${text.projects.drawerAriaLabelPrefix} ${project.name}`}
        className="h-[88vh] w-full overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:h-full sm:w-[42rem] sm:max-w-[calc(100vw-2rem)] sm:rounded-none sm:rounded-l-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex h-full flex-col">
          <div className="border-b border-slate-200 px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="eyebrow">{text.projects.drawerTitle}</p>
                <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">{project.name}</h2>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose} aria-label={text.projects.closeDetailsAria}>
                {text.projects.close}
              </Button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
            <div className="relative h-44 overflow-hidden rounded-xl bg-slate-100 sm:h-56">
              {hasImage ? (
                <picture>
                  {primaryImage?.endsWith(".webp") ? <source srcSet={primaryImage} type="image/webp" /> : null}
                  <img
                    src={fallbackImage ?? primaryImage}
                    alt={`${project.name}: ${project.tagline}`}
                    className="h-full w-full object-cover"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, 672px"
                    onError={() => setImageFailed(true)}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4 text-center text-sm font-semibold text-slate-600">
                  {project.name} {text.projects.previewComingSoon}
                </div>
              )}
            </div>

            <div className="mt-4 space-y-4 sm:mt-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  label={getStatusLabel(project.status, {
                    live: text.projects.live,
                    inProgress: text.projects.inProgress,
                    archived: text.projects.archived
                  })}
                  tone={STATUS_TONE[project.status]}
                />
                <Tag label={project.teamType === "solo" ? text.projects.teamSolo : text.projects.teamTeam} />
              </div>

              <p className="text-sm font-semibold text-slate-800 sm:text-base">{project.tagline}</p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">{text.projects.role}</span> {project.role}
              </p>

              {project.fullDescription ? (
                <section className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-slate-900">{text.projects.overview}</h3>
                  <p className="text-sm leading-6 text-slate-700">{project.fullDescription}</p>
                </section>
              ) : null}

              {timeline ? (
                <section className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-slate-900">{text.projects.timeline}</h3>
                  <p className="text-sm text-slate-700">{timeline}</p>
                </section>
              ) : null}

              <section className="space-y-1.5">
                <h3 className="text-sm font-semibold text-slate-900">{text.projects.techStack}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Tag key={`${project.id}-detail-${tech}`} label={tech} />
                  ))}
                </div>
              </section>

              <ListSection title={text.projects.features} items={project.features} itemKeyPrefix={`${project.id}-feature`} />
              <ListSection title={text.projects.challenges} items={project.challenges} itemKeyPrefix={`${project.id}-challenge`} />
              <ListSection title={text.projects.outcomes} items={project.outcomes} itemKeyPrefix={`${project.id}-outcome`} />

              {safeDemoUrl || safeRepoUrl || safeCaseStudyUrl ? (
                <section className="space-y-1.5 border-t border-slate-200 pt-4">
                  <h3 className="text-sm font-semibold text-slate-900">{text.projects.links}</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {safeDemoUrl ? (
                      <ExternalLink href={safeDemoUrl} label={`Open live demo for ${project.name}`}>
                        {text.projects.liveDemo}
                      </ExternalLink>
                    ) : null}
                    {safeRepoUrl ? (
                      <ExternalLink href={safeRepoUrl} label={`Open repository for ${project.name}`}>
                        {text.projects.githubRepo}
                      </ExternalLink>
                    ) : null}
                    {safeCaseStudyUrl ? (
                      <ExternalLink href={safeCaseStudyUrl} label={`Open case study for ${project.name}`}>
                        {text.projects.caseStudy}
                      </ExternalLink>
                    ) : null}
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

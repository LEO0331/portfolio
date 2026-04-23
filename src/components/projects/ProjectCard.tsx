import { useState } from "react";
import type { Project } from "../../types/project";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { Tag } from "../common/Tag";
import { resolveProjectImageSources } from "../../utils/projectImage";
import { toSafeExternalHref } from "../../utils/urlSafety";

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (project: Project, trigger: HTMLButtonElement) => void;
}

const MAX_TECH_PREVIEW = 6;
const MAX_FEATURE_PREVIEW = 3;

function statusTone(status: Project["status"]): "success" | "warning" | "neutral" {
  if (status === "live") return "success";
  if (status === "in-progress") return "warning";
  return "neutral";
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps): JSX.Element {
  const [imageFailed, setImageFailed] = useState(false);
  const { primary: primaryImage, fallback: fallbackImage } = resolveProjectImageSources(project.image);
  const shouldShowImage = !imageFailed && Boolean(primaryImage || fallbackImage);
  const safeDemoUrl = toSafeExternalHref(project.demoUrl);
  const safeRepoUrl = toSafeExternalHref(project.repoUrl);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-slate-300">
      <div className="relative h-44 bg-slate-100 sm:h-48">
        {shouldShowImage ? (
          <picture>
            {primaryImage?.endsWith(".webp") ? <source srcSet={primaryImage} type="image/webp" /> : null}
            <img
              src={fallbackImage ?? primaryImage}
              alt={`${project.name} preview`}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              onError={() => setImageFailed(true)}
              loading="lazy"
            />
          </picture>
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4 text-center text-sm font-semibold text-slate-600">
            {project.name} preview image coming soon
          </div>
        )}
        <div className="absolute left-4 top-4">
          <Badge label={project.status} tone={statusTone(project.status)} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2.5 sm:mb-3">
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">{project.name}</h3>
        </div>

        <p className="mb-1.5 text-sm font-semibold leading-6 text-slate-800">{project.tagline}</p>
        <p className="mb-2.5 text-sm leading-6 text-slate-600">{project.shortDescription}</p>
        <p className="mb-2.5 text-sm text-slate-600">
          <span className="font-semibold text-slate-800">Role:</span> {project.role}
        </p>

        <div className="mb-3.5 flex flex-wrap gap-1.5 sm:gap-2">
          {project.techStack.slice(0, MAX_TECH_PREVIEW).map((tech) => (
            <Tag key={`${project.id}-${tech}`} label={tech} />
          ))}
        </div>

        <div className="mb-4">
          <p className="mb-1.5 text-sm font-semibold text-slate-800">Feature Preview</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
            {project.features.slice(0, MAX_FEATURE_PREVIEW).map((feature) => (
              <li key={`${project.id}-${feature}`}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-3.5 sm:pt-4">
          {safeDemoUrl ? (
            <Button as="a" href={safeDemoUrl} target="_blank" rel="noopener noreferrer" size="sm">
              Live Demo
            </Button>
          ) : null}
          {safeRepoUrl ? (
            <Button
              as="a"
              href={safeRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
            >
              GitHub Repo
            </Button>
          ) : null}
          {onViewDetails ? (
            <Button
              variant="ghost"
              size="sm"
              aria-label={`View details for ${project.name}`}
              onClick={(event) => onViewDetails(project, event.currentTarget)}
            >
              View Details
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

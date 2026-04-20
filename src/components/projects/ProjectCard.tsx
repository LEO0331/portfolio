import { useState } from "react";
import type { Project } from "../../types/project";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { Tag } from "../common/Tag";

interface ProjectCardProps {
  project: Project;
}

function statusTone(status: Project["status"]): "success" | "warning" | "neutral" {
  if (status === "live") return "success";
  if (status === "in-progress") return "warning";
  return "neutral";
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
      <div className="h-44 bg-slate-100">
        {!imageFailed ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover"
            onError={() => setImageFailed(true)}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-4 text-center text-sm font-medium text-slate-600">
            {project.name} preview image coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
          <Badge label={project.status} tone={statusTone(project.status)} />
        </div>

        <p className="mb-2 text-sm font-medium text-slate-700">{project.tagline}</p>
        <p className="mb-3 text-sm leading-6 text-slate-600">{project.shortDescription}</p>
        <p className="mb-3 text-sm text-slate-600">
          <span className="font-medium text-slate-700">Role:</span> {project.role}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <Tag key={`${project.id}-${tech}`} label={tech} />
          ))}
        </div>

        <div className="mb-4">
          <p className="mb-2 text-sm font-medium text-slate-700">Key features</p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
            {project.features.slice(0, 3).map((feature) => (
              <li key={`${project.id}-${feature}`}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.demoUrl ? (
            <Button as="a" href={project.demoUrl} target="_blank" rel="noreferrer" size="sm">
              Live Demo
            </Button>
          ) : null}
          {project.repoUrl ? (
            <Button
              as="a"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              size="sm"
            >
              GitHub Repo
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

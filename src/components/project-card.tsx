import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCover } from "@/components/project-cover";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index = 0,
  variant = "default",
}: {
  project: Project;
  index?: number;
  variant?: "default" | "horizontal";
}) {
  const number = String(index + 1).padStart(2, "0");

  if (variant === "horizontal") {
    return (
      <Link
        href={`/projets/${project.slug}`}
        className="group card card-interactive grid overflow-hidden md:grid-cols-[1.05fr_1fr]"
      >
        <div className="relative p-3 md:p-4">
          <ProjectCover
            variant={project.cover}
            label={`Illustration du projet ${project.title}`}
            className="aspect-[16/9] h-full min-h-56 md:aspect-auto md:min-h-[22rem]"
          />
          <span className="absolute left-6 top-6 rounded-full border border-border bg-bg/85 px-2.5 py-1 text-[10px] font-medium text-muted backdrop-blur md:left-7 md:top-7">
            {project.category}
          </span>
        </div>
        <div className="flex flex-col p-5 pt-3 md:p-8">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-subtle">
            <span>Projet {number}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-4 font-display text-3xl leading-none tracking-tight text-text md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between gap-4 pt-7">
            <span className="text-[11px] text-subtle">{project.kind}</span>
            <span className="grid size-10 place-items-center rounded-full border border-border bg-surface text-muted transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast">
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/projets/${project.slug}`}
      className="group card card-interactive flex flex-col overflow-hidden"
    >
      <div className="relative p-3">
        <ProjectCover
          variant={project.cover}
          label={`Illustration du projet ${project.title}`}
          className="aspect-[16/10]"
        />
        <span className="absolute left-6 top-6 rounded-full border border-border bg-bg/85 px-2.5 py-1 text-[10px] font-medium text-muted backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 pt-3">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-subtle">
          <span>Projet {number}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl leading-none tracking-tight text-text">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.subtitle}
        </p>
        <div
          className={cn(
            "mt-auto flex items-end justify-between gap-3 pt-5",
          )}
        >
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-surface text-muted transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

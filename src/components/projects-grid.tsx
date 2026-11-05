"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [active, setActive] = useState<"Tous" | ProjectCategory>("Tous");

  const filtered = useMemo(() => {
    if (active === "Tous") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrer les projets par catégorie">
        {projectCategories.map((category) => {
          const count =
            category === "Tous"
              ? projects.length
              : projects.filter((project) => project.category === category).length;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors",
                active === category
                  ? "border-accent bg-accent text-accent-contrast"
                  : "border-border bg-surface text-muted hover:border-border-strong hover:text-text",
              )}
            >
              {category}
              <span
                className={cn(
                  "text-[10px] tabular-nums",
                  active === category ? "text-accent-contrast/70" : "text-subtle",
                )}
              >
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-subtle" aria-live="polite">
        {filtered.length} projet{filtered.length > 1 ? "s" : ""} affiché
        {filtered.length > 1 ? "s" : ""}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filtered.map((project, index) => (
          <div
            key={project.slug}
            className={index === 0 ? "md:col-span-2" : undefined}
          >
            <ProjectCard
              project={project}
              index={index}
              variant={index === 0 ? "horizontal" : "default"}
            />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card mt-8 p-10 text-center text-sm text-muted">
          Aucun projet dans cette catégorie pour le moment.
        </div>
      )}
    </div>
  );
}

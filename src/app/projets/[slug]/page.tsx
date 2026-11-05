import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Calendar,
  Layers,
  User,
} from "lucide-react";
import { ProjectCover } from "@/components/project-cover";
import {
  getNextProject,
  getProject,
  projects,
} from "@/lib/projects";
import { site } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projets/${project.slug}` },
    openGraph: {
      title: `${project.title} · ${site.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const nextProject = getNextProject(project.slug);

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-8 pb-12 md:pt-10 md:pb-16">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-[11px] font-medium text-muted transition-colors hover:text-accent-strong"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Tous les projets
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end">
            <div>
              <p className="eyebrow">
                {project.category} · {project.kind}
              </p>
              <h1 className="page-title mt-4 max-w-3xl text-text">
                {project.title}
                <span className="text-accent">.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted md:text-base">
                {project.subtitle}
              </p>
            </div>

            <div className="card p-5">
              <p className="eyebrow">Fiche projet</p>
              <dl className="mt-4 space-y-3 text-[12px]">
                <div className="flex items-start gap-2.5">
                  <User
                    className="mt-0.5 size-3.5 shrink-0 text-accent-strong"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-subtle">Rôle</dt>
                    <dd className="mt-0.5 font-medium text-text">{project.role}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Calendar
                    className="mt-0.5 size-3.5 shrink-0 text-accent-strong"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-subtle">Année</dt>
                    <dd className="mt-0.5 font-medium text-text">{project.year}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <BadgeCheck
                    className="mt-0.5 size-3.5 shrink-0 text-accent-strong"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-subtle">Statut</dt>
                    <dd className="mt-0.5 font-medium text-text">{project.status}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10">
            <ProjectCover
              variant={project.cover}
              label={`Illustration du projet ${project.title}`}
              className="aspect-[16/8] md:aspect-[16/6]"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
          <article className="space-y-14">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="eyebrow">Contexte</p>
                <p className="prose-case mt-4">{project.context}</p>
              </div>
              <div>
                <p className="eyebrow">Le défi</p>
                <p className="prose-case mt-4">{project.challenge}</p>
              </div>
            </div>

            <div>
              <p className="eyebrow">Ma démarche</p>
              <h2 className="section-title mt-3 text-text">
                Les choix qui ont compté
                <span className="text-accent">.</span>
              </h2>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {project.approach.map((step, index) => (
                  <div key={step.title} className="card p-5">
                    <p className="text-[10px] tabular-nums text-accent-strong">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-lg tracking-tight text-text">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6 md:p-7">
              <p className="eyebrow">Résultat</p>
              <h2 className="mt-2 font-display text-2xl tracking-tight text-text">
                Ce que le projet permet aujourd&apos;hui
              </h2>
              <ul className="mt-5 space-y-3">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-[13px] leading-relaxed text-muted">
                    <BadgeCheck
                      className="mt-0.5 size-4 shrink-0 text-accent-strong"
                      aria-hidden="true"
                    />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Recul</p>
              <h2 className="section-title mt-3 text-text">
                Ce que j&apos;en retiens
                <span className="text-accent">.</span>
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {project.learnings.map((learning, index) => (
                  <li key={learning} className="rounded-2xl border border-border bg-surface/60 p-5">
                    <span className="font-display text-2xl leading-none text-border-strong">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4 text-[12px] leading-relaxed text-muted">
                      {learning}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="card p-5">
              <div className="flex items-center gap-2">
                <Layers className="size-3.5 text-accent-strong" aria-hidden="true" />
                <p className="text-[10px] uppercase tracking-[0.16em] text-subtle">
                  Stack
                </p>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-5">
              <p className="text-sm font-medium text-text">
                Un projet dans le même esprit ?
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-muted">
                Je suis disponible pour une alternance ou une
                première opportunité.
              </p>
              <Link href="/contact" className="btn btn-primary mt-4 w-full">
                Me contacter
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/projets"
                className="mt-3 block text-center text-[11px] text-subtle transition-colors hover:text-text"
              >
                Retour au catalogue
              </Link>
            </div>

            <div className="rounded-2xl border border-dashed border-border-strong p-4 text-[11px] leading-relaxed text-subtle">
              Cette étude de cas décrit un projet de formation ou
              d&apos;apprentissage. Les résultats sont qualitatifs et ne
              prétendent pas à des métriques de production.
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-page py-12 md:py-16">
          <Link
            href={`/projets/${nextProject.slug}`}
            className="group card card-interactive grid overflow-hidden md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="p-3 md:p-4">
              <ProjectCover
                variant={nextProject.cover}
                label={`Illustration du projet ${nextProject.title}`}
                className="aspect-[16/10] h-full min-h-52 md:aspect-auto"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <p className="eyebrow">Projet suivant</p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-text md:text-4xl">
                {nextProject.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {nextProject.subtitle}
              </p>
              <span className="link-arrow mt-6">
                Découvrir l&apos;étude de cas
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

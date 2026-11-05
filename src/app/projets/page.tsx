import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, FileText } from "lucide-react";
import { ProjectsGrid } from "@/components/projects-grid";
import { PageHeader } from "@/components/ui/page-header";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Applications web, analyses de données et expérimentations : les projets de William Mbongue, développeur fullstack orienté data.",
  alternates: { canonical: "/projets" },
};

const method = [
  {
    title: "Comprendre",
    text: "Le problème, les utilisateurs, les contraintes. Avant de choisir une stack.",
  },
  {
    title: "Construire",
    text: "Une version utile, testable, avec les bons états et les bonnes validations.",
  },
  {
    title: "Expliquer",
    text: "Documenter les choix, les limites et ce que le projet m'a appris.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projets"
        title={
          <>
            Des projets qui vont
            <span className="text-accent-strong"> du clic à la donnée.</span>
          </>
        }
        description="Sept projets documentés : des applications web complètes, des analyses de données, une première approche du machine learning et une expérimentation IoT. Chaque étude de cas présente le contexte, les choix et les limites."
        meta={[
          { label: "Projets", value: `${String(projects.length).padStart(2, "0")} documentés` },
          { label: "Disciplines", value: "Web · Data · IA · IoT" },
          { label: "Approche", value: "Du problème au résultat" },
          { label: "Documentation", value: "Études de cas détaillées" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Catalogue</p>
              <h2 className="mt-2 font-display text-2xl tracking-tight text-text">
                Filtrer par discipline
              </h2>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-muted">
              Trois projets web, une analyse exploratoire, un modèle supervisé
              et une mesure capteur. Le fil rouge : rendre la complexité
              lisible.
            </p>
          </div>

          <ProjectsGrid />
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            <div>
              <p className="eyebrow">Méthode</p>
              <h2 className="section-title mt-3 text-text">
                Comment un projet
                <span className="text-accent-strong"> prend forme.</span>
              </h2>
              <Link href="/contact" className="link-arrow mt-6 inline-flex">
                Parler d&apos;un projet
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {method.map((item, index) => (
                <article key={item.title} className="card p-5">
                  <p className="text-[10px] tabular-nums text-accent-strong">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-lg tracking-tight text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-dashed border-border-strong bg-surface/50 p-6 md:flex-row md:items-center">
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 size-4 shrink-0 text-accent-strong" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-text">
                  Les projets sont documentés, pas seulement exposés.
                </p>
                <p className="mt-1 text-[12px] text-muted">
                  Contexte, démarche, résultat, limites et apprentissages.
                </p>
              </div>
            </div>
            <Link href="/cv" className="btn btn-outline">
              <FileText className="size-4" aria-hidden="true" />
              Voir mon CV
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

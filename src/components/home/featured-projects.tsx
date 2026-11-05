import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const [first, second, third] = featuredProjects;

  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="01 — Sélection"
          title={
            <>
              Trois projets pour comprendre
              <span className="text-accent-strong"> comment je travaille.</span>
            </>
          }
          description="Un SaaS, une application de confiance et une analyse de données. Trois façons d'aborder le même objectif : rendre quelque chose de complexe lisible et utile."
          href="/projets"
          linkLabel="Tous les projets"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ProjectCard project={first} index={0} />
          </div>

          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="card relative flex-1 overflow-hidden p-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-accent-soft blur-2xl"
              />
              <p className="eyebrow">Le fil conducteur</p>
              <p className="mt-3 font-display text-2xl leading-tight tracking-tight text-text">
                Un produit ne s&apos;arrête pas au déploiement.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Les données qu&apos;il produit sont la prochaine étape : les
                comprendre, les nettoyer, les interroger et en tirer une
                décision.
              </p>
              <Link href="/a-propos" className="link-arrow mt-5 inline-flex">
                Mon approche
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>

            <ProjectCard project={second} index={1} />
          </div>

          <div className="lg:col-span-12">
            <ProjectCard project={third} index={2} variant="horizontal" />
          </div>
        </div>
      </div>
    </section>
  );
}

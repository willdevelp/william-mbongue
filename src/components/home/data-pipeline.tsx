import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { focusSkills } from "@/lib/skills";

const steps = [
  {
    number: "01",
    title: "Interface",
    detail: "Un parcours clair, responsive et accessible.",
    tech: "React · Next.js · Tailwind",
  },
  {
    number: "02",
    title: "API",
    detail: "Des règles métier explicites et des réponses prévisibles.",
    tech: "Laravel · Route Handlers",
  },
  {
    number: "03",
    title: "Stockage",
    detail: "Un modèle relationnel lisible, des contraintes utiles.",
    tech: "PostgreSQL · MySQL · Prisma",
  },
  {
    number: "04",
    title: "Analyse",
    detail: "Nettoyer, interroger et visualiser sans masquer les limites.",
    tech: "Python · pandas · SQL",
  },
  {
    number: "05",
    title: "Décision",
    detail: "Une information qui aide vraiment à choisir la suite.",
    tech: "Dashboard · récit · produit",
  },
];

export function DataPipeline() {
  return (
    <section className="section border-t border-border">
      <div className="container-page">
        <div className="card relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-surface opacity-80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-24 size-72 rounded-full bg-accent-soft blur-3xl"
          />

          <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div>
              <p className="eyebrow">03 — Le fil conducteur</p>
              <h2 className="section-title mt-3 text-text">
                Du clic à la décision,
                <span className="text-accent-strong"> la donnée circule.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
                Un formulaire produit une ligne. Une ligne devient une mesure.
                Une mesure devient une décision. C&apos;est cette chaîne que
                j&apos;apprends à construire de bout en bout — avec la même
                exigence de clarté à chaque étape.
              </p>

              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-[0.16em] text-subtle">
                  En progression en ce moment
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {focusSkills.map((skill) => (
                    <span key={skill} className="chip">
                      <span className="size-1 rounded-full bg-accent" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Link href="/projets?categorie=data" className="link-arrow mt-7 inline-flex">
                Voir les projets data
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>

            <ol className="relative space-y-2.5">
              {steps.map((step, index) => (
                <li
                  key={step.number}
                  className="group relative flex gap-4 rounded-2xl border border-transparent p-3.5 transition-colors hover:border-border hover:bg-surface-2/60"
                >
                  <div className="relative flex flex-col items-center">
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border text-[10px] font-semibold tabular-nums ${
                        index === 3
                          ? "border-accent bg-accent text-accent-contrast"
                          : "border-border bg-surface text-muted"
                      }`}
                    >
                      {step.number}
                    </span>
                    {index < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-1 w-px flex-1 bg-border"
                      />
                    )}
                  </div>
                  <div className="pb-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-base tracking-tight text-text">
                        {step.title}
                      </h3>
                      <span className="text-[9px] uppercase tracking-[0.14em] text-subtle">
                        {step.tech}
                      </span>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

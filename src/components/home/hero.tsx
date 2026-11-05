import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Circle,
  CircleDot,
  Database,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { site } from "@/lib/site";

const profileRows = [
  { label: "rôle", value: "Développeur fullstack" },
  { label: "focus", value: "Data engineering" },
  { label: "stack", value: "Next.js · Laravel · Python" },
];

const track = [
  { label: "Interfaces & produit", state: "done" as const },
  { label: "API & bases de données", state: "done" as const },
  { label: "SQL analytique & Python", state: "current" as const },
  { label: "Pipelines & data engineering", state: "next" as const },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-surface opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="container-page relative pt-14 pb-14 md:pt-20 md:pb-20 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div>
            <div className="animate-enter inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent-soft px-3 py-1.5 text-[11px] font-medium text-accent-strong">
              <span className="status-dot" aria-hidden="true" />
              Disponible · alternance ou première opportunité
            </div>

            <h1 className="hero-title animate-enter animate-enter-delay-1 mt-6 text-text">
              Je construis des produits web.
              <span className="mt-2 block text-accent-strong">
                Je fais parler les données.
              </span>
            </h1>

            <p className="animate-enter animate-enter-delay-2 mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">
              Moi, c&apos;est {site.name}. Développeur fullstack basé au
              Cameroun, je conçois des applications complètes avec React,
              Next.js et Laravel — et j&apos;explore la data avec Python et SQL.
            </p>

            <div className="animate-enter animate-enter-delay-3 mt-8 flex flex-wrap items-center gap-3">
              <Link href="/projets" className="btn btn-primary">
                Découvrir mes projets
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Me contacter
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/cv"
                className="btn btn-ghost hidden sm:inline-flex"
              >
                Voir mon CV
              </Link>
            </div>

            <dl className="animate-enter animate-enter-delay-3 mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[11px] text-subtle">
              <div className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-accent-strong" aria-hidden="true" />
                <dt className="sr-only">Localisation</dt>
                <dd>Cameroun · à distance</dd>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <GraduationCap className="size-3.5 text-accent-strong" aria-hidden="true" />
                <dt className="sr-only">Diplôme</dt>
                <dd>Licence en Génie Logiciel</dd>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Database className="size-3.5 text-accent-strong" aria-hidden="true" />
                <dt className="sr-only">Objectif</dt>
                <dd>Cap : la data</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[3rem] bg-accent-soft blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-4 rotate-3 rounded-[2rem] border border-border/60 bg-surface/40"
            />

            <div className="card relative overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="size-1.5 rounded-full bg-border-strong" />
                  <span className="size-1.5 rounded-full bg-border-strong" />
                  <span className="size-1.5 rounded-full bg-accent" />
                </span>
                <span className="ml-1 font-mono text-[10px] text-subtle">
                  william.profile.ts
                </span>
                <span className="ml-auto text-[9px] uppercase tracking-[0.16em] text-subtle">
                  2026
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-2xl bg-accent font-display text-sm font-bold text-accent-contrast">
                    {site.initials}
                  </div>
                  <div>
                    <p className="font-display text-lg leading-none text-text">
                      {site.name}
                    </p>
                    <p className="mt-1.5 text-[11px] text-subtle">
                      Fullstack developer · data-minded
                    </p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft px-2 py-1 text-[9px] font-medium text-accent-strong">
                    <span className="size-1 rounded-full bg-accent" />
                    Open
                  </span>
                </div>

                <dl className="mt-6 divide-y divide-border border-y border-border font-mono text-[11px]">
                  {profileRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 py-2.5"
                    >
                      <dt className="text-subtle">{row.label}</dt>
                      <dd className="text-right text-text">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-subtle">
                    Parcours de progression
                  </p>
                  <ul className="mt-3 space-y-2">
                    {track.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-center gap-2.5 text-[11px]"
                      >
                        {item.state === "done" && (
                          <Check
                            className="size-3.5 text-accent-strong"
                            aria-hidden="true"
                          />
                        )}
                        {item.state === "current" && (
                          <CircleDot
                            className="size-3.5 text-accent"
                            aria-hidden="true"
                          />
                        )}
                        {item.state === "next" && (
                          <Circle
                            className="size-3.5 text-subtle"
                            aria-hidden="true"
                          />
                        )}
                        <span
                          className={
                            item.state === "next"
                              ? "text-subtle"
                              : item.state === "current"
                                ? "text-text"
                                : "text-muted"
                          }
                        >
                          {item.label}
                        </span>
                        {item.state === "current" && (
                          <span className="ml-auto text-[8px] uppercase tracking-[0.14em] text-accent-strong">
                            now
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
                  {[
                    ["02", "certifs"],
                    ["06", "projets"],
                    ["01", "cap"],
                  ].map(([value, label]) => (
                    <div key={label} className="text-center">
                      <p className="font-display text-xl leading-none text-text">
                        {value}
                      </p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-subtle">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-16 hidden rotate-2 rounded-xl border border-border bg-surface px-3 py-2 text-[10px] font-medium text-muted shadow-lg xl:block">
              SQL · Python
            </div>
            <div className="absolute -left-4 bottom-20 hidden -rotate-2 rounded-xl border border-border bg-surface px-3 py-2 text-[10px] font-medium text-muted shadow-lg xl:block">
              Next.js · Laravel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

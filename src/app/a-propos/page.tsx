import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { learningFocus } from "@/lib/certifications";
import { principles, quickFacts, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Le parcours de William Mbongue : licence en Génie Logiciel, certification fullstack Simplon, certification IA et progression vers la data.",
  alternates: { canonical: "/a-propos" },
};

const timeline = [
  {
    period: "2021 – 2022",
    title: "Baccalauréat D",
    place: "Institut Jean Paul II",
    text: "Fin du secondaire, première rencontre avec la programmation et l'envie d'en faire un métier.",
  },
  {
    period: "2022 – 2024",
    title: "BTS en Génie Logiciel",
    place: "Institut Universitaire de la Côte",
    text: "Fondamentaux de l'informatique, algorithmique, bases de données et développement.",
  },
  {
    period: "Juil. – Août 2023",
    title: "Stage en maintenance de machines",
    place: "ASECNA",
    text: "Un premier contact avec un environnement technique exigeant : diagnostic, rigueur et documentation.",
  },
  {
    period: "2024 – 2025",
    title: "Licence en Génie Logiciel",
    place: "Institut Universitaire des Technologies",
    text: "Conception logicielle, gestion de projet et projets web plus complets.",
  },
  {
    period: "Jan. – Mai 2025",
    title: "Certification développeur web fullstack",
    place: "Simplon.co · OIF",
    text: "Formation intensive : React, Laravel, Tailwind CSS, Figma et MySQL. Le passage du cours au produit.",
  },
  {
    period: "Août 2025",
    title: "Certification en principes de l'IA",
    place: "Heure IA",
    text: "Une première grille de lecture sur le machine learning, les données et les limites des modèles.",
  },
  {
    period: "2026",
    title: "Cap data",
    place: "IBM SkillsBuild · projets personnels",
    text: "SQL analytique, Python, pandas et modélisation. La suite logique du fullstack : comprendre ce que les applications produisent.",
    current: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title={
          <>
            Développeur par construction,
            <span className="text-accent-strong"> data par curiosité.</span>
          </>
        }
        description="Je m'appelle William Mbongue. Je conçois des applications web de bout en bout, et je consacre une partie croissante de mon temps à comprendre ce que les données racontent — et ce qu'elles ne racontent pas."
        meta={[
          { label: "Basé au", value: "Cameroun · à distance" },
          { label: "Formation", value: "Licence en Génie Logiciel" },
          { label: "Focus", value: "Fullstack → Data" },
          { label: "Statut", value: "Disponible" },
        ]}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="font-display text-2xl leading-snug tracking-tight text-text md:text-[1.75rem]">
              Je ne veux pas seulement livrer des pages. Je veux comprendre ce
              que le produit fait aux données, et ce que les données font au
              produit.
            </p>

            <div className="prose-case mt-7">
              <p>
                Mon parcours a commencé par le génie logiciel : algorithmes,
                bases de données, architecture. Puis la pratique est arrivée
                avec React, Next.js, Laravel et PostgreSQL. J&apos;aime voir une
                idée se transformer en interface, une règle métier devenir une
                API, et un formulaire produire une ligne en base.
              </p>
              <p>
                Aujourd&apos;hui, je fais évoluer cette pratique vers la data.
                Pas par effet de mode : parce qu&apos;un produit génère des
                données, et que ces données ne servent à rien si personne ne
                les nettoie, ne les interroge et ne les raconte. J&apos;apprends
                le SQL analytique, Python et la modélisation avec des projets
                concrets, en documentant chaque étape.
              </p>
              <p>
                Je cherche une expérience exigeante — 
                alternance ou poste junior — où je peux continuer à construire
                des produits complets tout en approfondissant la data. Je
                préfère les équipes qui documentent, qui mesurent et qui
                prennent le temps de bien poser les problèmes.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: GraduationCap, label: "Licence", value: "Génie Logiciel" },
                { icon: Briefcase, label: "Expérience", value: "Stage ASECNA" },
                { icon: Sparkles, label: "Cap", value: "Data engineering" },
              ].map((item) => (
                <div key={item.label} className="card p-4">
                  <item.icon
                    className="size-4 text-accent-strong"
                    aria-hidden="true"
                  />
                  <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-subtle">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-text">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="card relative overflow-hidden p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 grid-surface opacity-70"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface-2">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-52 rounded-full bg-accent-soft blur-2xl"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-muted">
                      Portfolio / 2026
                    </span>
                    <span className="status-dot mt-1" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-[7rem] leading-[0.75] tracking-tighter text-text md:text-[8rem]">
                      WM
                      <span className="text-accent">.</span>
                    </p>
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      William Mbongue
                    </p>
                    <p className="mt-1 text-[11px] text-subtle">
                      Fullstack developer · data-minded
                    </p>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute bottom-6 right-6 size-16 rounded-full border border-accent/30"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-10 right-10 size-8 rounded-full bg-accent/80"
                />
              </div>
            </div>

            <div className="card p-5">
              <p className="eyebrow">En bref</p>
              <dl className="mt-4 space-y-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-[11px] text-subtle">{fact.label}</dt>
                    <dd className="text-right text-[11px] font-medium text-text">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="card flex items-center justify-between gap-4 p-4 transition-colors hover:border-accent-strong"
            >
              <div>
                <p className="text-xs font-medium text-text">GitHub</p>
                <p className="mt-0.5 text-[10px] text-subtle">{site.github.replace("https://", "")}</p>
              </div>
              <ArrowUpRight className="size-4 text-accent-strong" aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Parcours</p>
              <h2 className="section-title mt-3 text-text">
                Une trajectoire,
                <span className="text-accent-strong"> pas un saut.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Chaque étape a ajouté une couche : les fondations techniques, la
              pratique du produit, puis la donnée.
            </p>
          </div>

          <ol className="mt-10 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {timeline.map((item, index) => (
              <li key={item.period} className="relative flex gap-4 pb-8">
                <div className="flex flex-col items-center">
                  <span
                    className={`mt-1 grid size-7 shrink-0 place-items-center rounded-full border text-[9px] font-semibold tabular-nums ${
                      item.current
                        ? "border-accent bg-accent text-accent-contrast"
                        : "border-border bg-surface text-muted"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < timeline.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mt-2 w-px flex-1 bg-border"
                    />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-subtle">
                    {item.period}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg tracking-tight text-text">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-medium text-accent-strong">
                    {item.place}
                  </p>
                  <p className="mt-2 max-w-md text-[13px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            <div>
              <p className="eyebrow">Méthode</p>
              <h2 className="section-title mt-3 text-text">
                Quatre principes
                <span className="text-accent-strong"> de travail.</span>
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <article key={principle.title} className="card p-5">
                  <p className="text-[10px] tabular-nums text-accent-strong">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-lg tracking-tight text-text">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <p className="eyebrow">En ce moment</p>
            <h2 className="section-title mt-3 text-text">
              J&apos;apprends,
              <span className="text-accent-strong"> en construisant.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              La théorie seule ne tient pas longtemps. Chaque sujet que
              j&apos;apprends finit dans un notebook, une requête ou un projet
              documenté.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">
                <BookOpen className="size-3.5 text-accent-strong" aria-hidden="true" />
                Documentation officielle
              </span>
              <span className="chip">
                <MapPin className="size-3.5 text-accent-strong" aria-hidden="true" />
                Apprentissage à distance
              </span>
            </div>
          </div>

          <ul className="space-y-3">
            {learningFocus.map((item) => (
              <li key={item.title} className="card flex items-start gap-4 p-4">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="text-sm font-medium text-text">{item.title}</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-page">
          <div className="card flex flex-col items-start justify-between gap-6 p-7 md:flex-row md:items-center md:p-9">
            <div>
              <p className="eyebrow">La suite</p>
              <p className="mt-2 font-display text-2xl tracking-tight text-text">
                Envie de voir ce que ça donne concrètement ?
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/projets" className="btn btn-primary">
                Voir les projets
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

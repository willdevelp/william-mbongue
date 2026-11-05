import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { PrintButton } from "@/components/print-button";
import { certifications, education } from "@/lib/certifications";
import { featuredProjects } from "@/lib/projects";
import { quickFacts, site } from "@/lib/site";
import { skillGroups } from "@/lib/skills";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV de William Mbongue, développeur fullstack orienté data : compétences, projets, diplômes et certifications.",
  alternates: { canonical: "/cv" },
};

const experience = [
  {
    role: "Stagiaire en maintenance de machines",
    organization: "ASECNA",
    period: "Juil. – Août 2023",
    description:
      "Diagnostic, rigueur et documentation dans un environnement technique exigeant.",
  },
];

export default function CvPage() {
  const obtainedCertifications = certifications.filter(
    (certification) => certification.status === "obtenue",
  );

  return (
    <div className="print-page container-page max-w-4xl py-10 md:py-16">
      <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-3">
        <Link href="/a-propos" className="link-arrow">
          Découvrir mon parcours
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
        <PrintButton />
      </div>

      <header className="cv-section print-break-avoid border-b border-border pb-8">
        <p className="eyebrow">Curriculum vitæ · 2026</p>
        <h1 className="page-title mt-3 text-text">
          {site.name}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-3 font-display text-xl text-accent-strong">
          Développeur fullstack · Cap data
        </p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-accent-strong" aria-hidden="true" />
            {site.location} · à distance
          </span>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 hover:text-accent-strong"
          >
            <Mail className="size-3.5 text-accent-strong" aria-hidden="true" />
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent-strong"
          >
            github.com/willdevelp
          </a>
        </div>
      </header>

      <section className="cv-section mt-8">
        <h2 className="eyebrow">Profil</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          Je conçois des applications web de bout en bout avec React, Next.js
          et Laravel. Je développe en parallèle mes compétences en analyse de
          données avec Python, pandas et SQL, à travers des projets pratiques
          documentés. Je recherche une alternance ou une première
          opportunité en développement fullstack ou dans la data.
        </p>
      </section>

      <section className="cv-section mt-8">
        <h2 className="eyebrow">Compétences</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="print-card card p-4">
              <h3 className="font-display text-base text-text">{group.title}</h3>
              <p className="mt-1 text-[11px] text-muted">
                {group.items.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section mt-8">
        <h2 className="eyebrow">Projets sélectionnés</h2>
        <div className="mt-4 space-y-3">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="print-card print-break-avoid card p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-base text-text">
                  {project.title}
                  <span className="ml-2 font-sans text-xs font-normal text-muted">
                    {project.category} · {project.year}
                  </span>
                </h3>
                <span className="text-[11px] text-muted">{project.role}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {project.summary}
              </p>
              <p className="mt-2 text-[10px] text-subtle">
                {project.stack.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section mt-8">
        <h2 className="eyebrow">Expérience</h2>
        <div className="mt-4 space-y-3">
          {experience.map((item) => (
            <article
              key={item.organization}
              className="print-card print-break-avoid card p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-base text-text">{item.role}</h3>
                <span className="text-[11px] text-muted">{item.period}</span>
              </div>
              <p className="mt-1 text-xs font-medium text-accent-strong">
                {item.organization}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-section mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="eyebrow">Formation</h2>
          <ul className="mt-4 space-y-3">
            {education.map((item) => (
              <li key={item.degree} className="print-break-avoid">
                <h3 className="text-sm font-medium text-text">{item.degree}</h3>
                <p className="mt-0.5 text-xs text-accent-strong">{item.school}</p>
                <p className="mt-0.5 text-[11px] text-muted">
                  {item.period} · {item.note}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Certifications obtenues</h2>
          <ul className="mt-4 space-y-3">
            {obtainedCertifications.map((certification) => (
              <li key={certification.title} className="print-break-avoid">
                <h3 className="text-sm font-medium text-text">
                  {certification.title}
                </h3>
                <p className="mt-0.5 text-xs text-accent-strong">
                  {certification.issuer} · {certification.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cv-section mt-8 border-t border-border pt-5">
        <h2 className="eyebrow">Informations complémentaires</h2>
        <dl className="mt-3 grid gap-2 text-xs sm:grid-cols-2">
          {quickFacts
            .filter((fact) => fact.label !== "Basé au" && fact.label !== "Focus")
            .map((fact) => (
              <div key={fact.label} className="flex gap-2">
                <dt className="text-muted">{fact.label} :</dt>
                <dd className="text-text">{fact.value}</dd>
              </div>
            ))}
          <div className="flex gap-2">
            <dt className="text-muted">Disponibilité :</dt>
            <dd className="text-text">{site.availability}</dd>
          </div>
        </dl>
      </section>

      <div className="no-print mt-10 border-t border-border pt-6">
        <Link href="/contact" className="btn btn-primary">
          Me contacter
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
        <p className="mt-3 text-xs text-muted">
          Pour créer un PDF, choisissez « Enregistrer au format PDF » dans la
          fenêtre d’impression.
        </p>
      </div>
    </div>
  );
}

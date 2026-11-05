import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, ShieldCheck } from "lucide-react";
import { CertificationCard } from "@/components/certification-card";
import { PageHeader } from "@/components/ui/page-header";
import { certifications, education, learningFocus } from "@/lib/certifications";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Certifications & formation",
  description:
    "Certifications, diplômes et apprentissages en cours de William Mbongue : fullstack Simplon, principes de l'IA Heure IA, Licence en Génie Logiciel et cap data.",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  const obtained = certifications.filter((item) => item.status === "obtenue");
  const inProgress = certifications.filter((item) => item.status === "en-cours");

  return (
    <>
      <PageHeader
        eyebrow="Certifications & formation"
        title={
          <>
            Des preuves,
            <span className="text-accent-strong"> pas des promesses.</span>
          </>
        }
        description="Mes diplômes et certifications, avec les identifiants quand ils existent. Les parcours encore en cours sont indiqués comme tels : apprendre fait partie du travail, le revendiquer sans l'avoir terminé non."
        meta={[
          { label: "Certifications", value: "02 obtenues" },
          { label: "En cours", value: "02 parcours" },
          { label: "Diplômes", value: "03 niveaux" },
          { label: "Contact", value: site.email },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Obtenues</p>
              <h2 className="mt-2 font-display text-2xl tracking-tight text-text">
                Certifications validées
              </h2>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-muted">
              Les certificats originaux peuvent être présentés sur demande. Les
              identifiants sont affichés lorsqu&apos;ils sont disponibles.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {obtained.map((certification, index) => (
              <CertificationCard
                key={certification.title}
                certification={certification}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">En cours</p>
              <h2 className="mt-2 font-display text-2xl tracking-tight text-text">
                La suite, sans précipitation
              </h2>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-muted">
              Deux parcours structurent mon évolution vers la data. Ils
              alimentent directement mes projets et notebooks.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {inProgress.map((certification, index) => (
              <CertificationCard
                key={certification.title}
                certification={certification}
                index={index + obtained.length}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Diplômes</p>
              <h2 className="section-title mt-3 text-text">
                Les fondations
                <span className="text-accent-strong"> académiques.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Un parcours classique en génie logiciel, complété par des
              formations professionnelles orientées pratique.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {education.map((item, index) => (
              <article key={item.degree} className="card flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl border border-border bg-surface-2 text-accent-strong">
                    <GraduationCap className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-[10px] tabular-nums text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-6 text-[10px] uppercase tracking-[0.16em] text-subtle">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-xl tracking-tight text-text">
                  {item.degree}
                </h3>
                <p className="mt-1 text-[12px] font-medium text-accent-strong">
                  {item.school}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Apprentissage continu</p>
            <h2 className="section-title mt-3 text-text">
              Ce que j&apos;apprends
              <span className="text-accent-strong"> maintenant.</span>
            </h2>
            <div className="mt-5 inline-flex items-start gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 text-[12px] text-muted">
              <ShieldCheck
                className="mt-0.5 size-4 shrink-0 text-accent-strong"
                aria-hidden="true"
              />
              Une certification non terminée n&apos;est pas une certification
              obtenue. Cette page restera à jour.
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {learningFocus.map((item) => (
              <li key={item.title} className="card p-5">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg tracking-tight text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-page">
          <div className="card flex flex-col items-start justify-between gap-6 p-7 md:flex-row md:items-center md:p-9">
            <div>
              <p className="eyebrow">Vérification</p>
              <p className="mt-2 max-w-lg font-display text-2xl tracking-tight text-text">
                Un certificat à vérifier ? Écrivez-moi, je vous envoie le
                document original.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Demander un justificatif
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

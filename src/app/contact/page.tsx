import type { Metadata } from "next";
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Clock3,
  CodeXml,
  Mail,
  MapPin,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CopyEmail } from "@/components/copy-email";
import { Faq } from "@/components/faq";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter William Mbongue pour une opportunité, une alternance ou une collaboration autour du développement web et de la data.",
  alternates: { canonical: "/contact" },
};

const lookingFor = [
  "Une alternance en data engineering / analyse de données",
  "Un poste junior fullstack avec une forte composante produit",
  "Une collaboration sur un projet web bien cadré",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Parlons d&apos;un projet,
            <span className="text-accent-strong"> d&apos;un stage ou d&apos;une donnée.</span>
          </>
        }
        description="Une opportunité, une question sur un projet ou simplement envie d'échanger ? Décrivez-moi le contexte en quelques lignes. Je réponds sous 24 à 48 heures."
        meta={[
          { label: "Email", value: site.email },
          { label: "Localisation", value: "Cameroun · à distance" },
          { label: "Réponse", value: "24 – 48 h" },
          { label: "Statut", value: "Disponible" },
        ]}
      />

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="space-y-4">
            <div className="card p-6">
              <p className="eyebrow">Coordonnées</p>
              <ul className="mt-5 space-y-5">
                <li className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-accent-strong">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-subtle">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-0.5 block break-all text-sm font-medium text-text transition-colors hover:text-accent-strong"
                    >
                      {site.email}
                    </a>
                    <div className="mt-1">
                      <CopyEmail email={site.email} />
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-accent-strong">
                    <CodeXml className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-subtle">
                      GitHub
                    </p>
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-text transition-colors hover:text-accent-strong"
                    >
                      @willdevelp
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-accent-strong">
                    <MapPin className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-subtle">
                      Localisation
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-text">
                      {site.location} · travail à distance
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 text-accent-strong">
                    <Clock3 className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-subtle">
                      Délai de réponse
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-text">
                      24 à 48 heures ouvrées
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2">
                <Briefcase className="size-4 text-accent-strong" aria-hidden="true" />
                <p className="eyebrow">Ce que je recherche</p>
              </div>
              <ul className="mt-4 space-y-3">
                {lookingFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-accent-strong" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/25 bg-accent-soft p-5">
              <div className="flex items-center gap-2 text-[11px] font-medium text-accent-strong">
                <span className="status-dot" aria-hidden="true" />
                {site.status} pour de nouvelles opportunités
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-muted">
                alternance, poste junior ou collaboration : si le projet
                a du sens, je serai heureux d&apos;en discuter.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5">
              <p className="eyebrow">Message</p>
              <h2 className="mt-2 font-display text-2xl tracking-tight text-text">
                Quelques lignes suffisent pour commencer.
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title mt-3 text-text">
              Les questions
              <span className="text-accent-strong"> qui reviennent.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Une autre question ? Le formulaire est là pour ça, ou écrivez-moi
              directement par email.
            </p>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}

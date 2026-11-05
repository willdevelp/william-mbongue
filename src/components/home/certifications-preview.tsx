import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { CertificationCard } from "@/components/certification-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/lib/certifications";

export function CertificationsPreview() {
  const obtained = certifications.filter(
    (certification) => certification.status === "obtenue",
  );
  const inProgress = certifications.filter(
    (certification) => certification.status === "en-cours",
  );

  return (
    <section className="section border-t border-border">
      <div className="container-page">
        <SectionHeading
          eyebrow="05 — Preuves"
          title={
            <>
              Des certificats,
              <span className="text-accent-strong"> pas des promesses.</span>
            </>
          }
          description="Deux formations certifiantes obtenues, deux parcours en cours. Les documents et identifiants sont indiqués pour que chacun puisse vérifier."
          href="/certifications"
          linkLabel="Certifications & formation"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr_0.8fr]">
          {obtained.map((certification, index) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
              index={index}
            />
          ))}

          <div className="card relative overflow-hidden p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent-soft blur-2xl"
            />
            <span className="grid size-10 place-items-center rounded-xl border border-dashed border-border-strong bg-surface-2 text-accent-strong">
              <Clock3 className="size-4" aria-hidden="true" />
            </span>
            <p className="eyebrow mt-6">En cours</p>
            <h3 className="mt-2 font-display text-xl leading-tight text-text">
              La suite se construit maintenant.
            </h3>
            <ul className="mt-4 space-y-3">
              {inProgress.map((item) => (
                <li key={item.title}>
                  <p className="text-sm font-medium text-text">{item.title}</p>
                  <p className="mt-0.5 text-[11px] text-subtle">{item.issuer}</p>
                </li>
              ))}
            </ul>
            <Link href="/certifications" className="link-arrow mt-6 inline-flex">
              Voir le détail
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

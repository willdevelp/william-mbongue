import { BadgeCheck, Clock3, ExternalLink } from "lucide-react";
import type { Certification } from "@/lib/certifications";

export function CertificationCard({
  certification,
  index,
}: {
  certification: Certification;
  index: number;
}) {
  const inProgress = certification.status === "en-cours";

  return (
    <article
      className={`card flex h-full flex-col p-6 ${
        inProgress ? "border-dashed border-border-strong" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-10 place-items-center rounded-xl border border-border bg-surface-2 text-accent-strong">
          {inProgress ? (
            <Clock3 className="size-4" aria-hidden="true" />
          ) : (
            <BadgeCheck className="size-4" aria-hidden="true" />
          )}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium ${
            inProgress
              ? "bg-surface-2 text-muted"
              : "bg-accent-soft text-accent-strong"
          }`}
        >
          <span className="size-1 rounded-full bg-current" />
          {inProgress ? "En cours" : "Obtenue"}
        </span>
      </div>

      <p className="mt-6 text-[10px] uppercase tracking-[0.16em] text-subtle">
        {String(index + 1).padStart(2, "0")} · {certification.issuer}
      </p>
      <h3 className="mt-2 font-display text-xl leading-tight tracking-tight text-text">
        {certification.title}
      </h3>
      <p className="mt-2 text-xs text-subtle">{certification.date}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {certification.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {certification.skills.map((skill) => (
          <span key={skill} className="tag">
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-4">
        <span className="text-[10px] uppercase tracking-[0.14em] text-subtle">
          {certification.credentialId
            ? `ID ${certification.credentialId}`
            : "Formation certifiante"}
        </span>
        {certification.href ? (
          <a
            href={certification.href}
            target="_blank"
            rel="noreferrer"
            className="link-arrow text-[11px]"
          >
            Vérifier
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-[10px] text-subtle">Document disponible</span>
        )}
      </div>
    </article>
  );
}

import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section className="section border-t border-border">
      <div className="container-page">
        <div className="card relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-surface opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-accent-soft blur-3xl"
          />

          <div className="relative grid gap-10 p-7 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:p-12">
            <div>
              <p className="eyebrow">06 — Prochaine étape</p>
              <h2 className="section-title mt-3 max-w-2xl text-text">
                Un projet, une équipe ou une donnée
                <span className="text-accent-strong"> à comprendre ?</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
                Je cherche une première expérience exigeante où je peux
                construire des produits complets et approfondir la data. Une
                question, une opportunité ou simplement envie d&apos;échanger ?
                Écrivez-moi.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href={`mailto:${site.email}`} className="btn btn-primary">
                  <Mail className="size-4" aria-hidden="true" />
                  Envoyer un message
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Page contact
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface-2/70 p-5 backdrop-blur">
              <div className="flex items-center gap-2 text-[11px] font-medium text-accent-strong">
                <span className="status-dot" aria-hidden="true" />
                {site.status} pour de nouvelles opportunités
              </div>
              <ul className="mt-5 space-y-3.5 text-xs text-muted">
                <li className="flex items-start gap-2.5">
                  <MapPin
                    className="mt-0.5 size-3.5 shrink-0 text-accent-strong"
                    aria-hidden="true"
                  />
                  {site.location} · travail à distance possible
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock3
                    className="mt-0.5 size-3.5 shrink-0 text-accent-strong"
                    aria-hidden="true"
                  />
                  Réponse sous 24 à 48 h
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail
                    className="mt-0.5 size-3.5 shrink-0 text-accent-strong"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all transition-colors hover:text-text"
                  >
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

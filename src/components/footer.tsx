import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  Mail,
  MapPin,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="no-print border-t border-border bg-surface/40">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Développeur fullstack orienté data. Je construis des applications
              web complètes, puis j&apos;apprends à en faire parler les données.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="chip hover:border-accent-strong hover:text-accent-strong"
              >
                <CodeXml className="size-3.5" aria-hidden="true" />
                GitHub
              </a>
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="chip hover:border-accent-strong hover:text-accent-strong"
                >
                  <BriefcaseBusiness className="size-3.5" aria-hidden="true" />
                  LinkedIn
                </a>
              )}
              <a
                href={`mailto:${site.email}`}
                className="chip hover:border-accent-strong hover:text-accent-strong"
              >
                <Mail className="size-3.5" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-start gap-2 text-muted transition-colors hover:text-text"
                >
                  <Mail
                    className="mt-0.5 size-3.5 shrink-0 text-accent-strong"
                    aria-hidden="true"
                  />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-muted">
                <MapPin
                  className="mt-0.5 size-3.5 shrink-0 text-accent-strong"
                  aria-hidden="true"
                />
                {site.location} · à distance
              </li>
              <li className="flex items-start gap-2 text-muted">
                <span className="status-dot mt-2 shrink-0" />
                <span>{site.status} pour de nouvelles opportunités</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="link-arrow mt-5 inline-flex"
            >
              Écrire un message
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-[11px] text-subtle md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Conçu et développé avec
            soin.
          </p>
          <div className="flex items-center gap-4">
            <span>Next.js · Tailwind CSS · Bricolage Grotesque</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent-strong"
            >
              Haut de page
              <ArrowUp className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label={`${site.name} — accueil`}
    >
      <span className="relative grid size-9 place-items-center rounded-xl border border-border bg-surface font-display text-[13px] font-bold tracking-tight text-text transition-colors group-hover:border-accent-strong">
        WM
        <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-accent" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[14px] font-semibold tracking-tight text-text">
            william<span className="text-accent-strong">.</span>mbongue
          </span>
          <span className="mt-1.5 text-[8px] font-medium uppercase tracking-[0.22em] text-subtle">
            fullstack · data
          </span>
        </span>
      )}
    </Link>
  );
}

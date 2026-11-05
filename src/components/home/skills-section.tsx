import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Database,
  LineChart,
  Server,
  Wrench,
} from "lucide-react";
import { skillGroups } from "@/lib/skills";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = {
  code: Code2,
  server: Server,
  database: Database,
  chart: LineChart,
  tools: Wrench,
};

export function SkillsSection() {
  return (
    <section className="section border-t border-border">
      <div className="container-page grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="04 — Outils"
            title={
              <>
                Une base fullstack,
                <span className="text-accent-strong"> un cap data.</span>
              </>
            }
            description="Je préfère dire ce que je sais faire plutôt que d'empiler des logos. Voici les outils que j'utilise réellement dans mes projets."
          />
          <Link href="/a-propos" className="link-arrow mt-6 inline-flex">
            Voir mon parcours complet
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <div
                key={group.title}
                className="card p-5 transition-colors hover:border-border-strong"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg border border-border bg-surface-2 text-accent-strong">
                    <Icon className="size-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-text">
                      {group.title}
                    </h3>
                    <p className="text-[10px] text-subtle">{group.description}</p>
                  </div>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

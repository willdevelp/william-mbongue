import { Code2, LayoutDashboard, LineChart } from "lucide-react";
import { services } from "@/lib/site";

const icons = {
  code: Code2,
  chart: LineChart,
  layout: LayoutDashboard,
};

export function Services() {
  return (
    <section className="section border-t border-border">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">02 — Ce que je fais</p>
            <h2 className="section-title mt-3 text-text">
              Du front-end au raisonnement data,
              <span className="text-accent-strong"> sans rupture.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Je ne sépare pas l&apos;interface, le back-end et les données : ce
            sont trois couches d&apos;un même produit.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                key={service.number}
                className="card group relative overflow-hidden p-6 transition-colors hover:border-border-strong"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1 -top-4 font-display text-[5.5rem] font-semibold leading-none text-border/60"
                >
                  {service.number}
                </span>
                <span className="relative grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-accent-strong">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="relative mt-6 font-display text-xl tracking-tight text-text">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

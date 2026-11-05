import { stats } from "@/lib/site";

export function StatsBar() {
  return (
    <section className="border-b border-border">
      <dl className="container-page grid grid-cols-2 divide-x divide-border md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-5 py-7 md:px-6 md:py-8 ${
              index >= 2 ? "border-t border-border md:border-t-0" : ""
            }`}
          >
            <dd className="font-display text-3xl leading-none tracking-tight text-text md:text-4xl">
              {stat.value}
              <span className="text-accent">.</span>
            </dd>
            <dt className="mt-2 text-[11px] font-medium text-text">{stat.label}</dt>
            <p className="mt-1 text-[10px] leading-snug text-subtle">{stat.note}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}

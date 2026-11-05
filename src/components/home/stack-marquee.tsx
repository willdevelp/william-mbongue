import { toolbelt } from "@/lib/skills";

export function StackMarquee() {
  const items = [...toolbelt, ...toolbelt];

  return (
    <div className="marquee border-b border-border bg-surface/30 py-3.5">
      <div className="marquee-track items-center gap-8 px-4">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-8"
            data-duplicate={index >= toolbelt.length ? "true" : undefined}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              {item}
            </span>
            <span aria-hidden="true" className="size-1 rounded-full bg-accent/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "muted";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium",
        tone === "accent"
          ? "border-accent/30 bg-accent-soft text-accent-strong"
          : tone === "muted"
            ? "border-border bg-surface-2 text-muted"
            : "border-border bg-surface text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

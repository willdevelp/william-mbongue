import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className ?? ""}`}
    >
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title mt-3 text-text">{title}</h2>
        {description && (
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="link-arrow shrink-0 self-start md:self-auto"
        >
          {linkLabel}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

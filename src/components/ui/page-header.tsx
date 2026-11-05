import { cn } from "@/lib/utils";

type Meta = { label: string; value: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  meta,
  children,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  meta?: Meta[];
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("border-b border-border", className)}>
      <div className="container-page pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="page-title mt-4 max-w-3xl text-text">{title}</h1>
            {description && (
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted md:text-base">
                {description}
              </p>
            )}
          </div>
          {meta && meta.length > 0 && (
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-l-0 border-border lg:border-l lg:pl-8">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-subtle">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium leading-snug text-text">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

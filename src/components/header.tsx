"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border/70 bg-[var(--header)] backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors",
                  active ? "text-text" : "text-muted hover:text-text",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-px bg-accent transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="btn btn-primary hidden sm:inline-flex"
          >
            Me contacter
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="grid size-9 place-items-center rounded-full border border-border bg-surface text-text lg:hidden"
          >
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={cn(
          "border-t border-border bg-bg/95 backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          aria-label="Navigation mobile"
          className="container-page flex flex-col py-4"
        >
          {nav.map((item, index) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between border-b border-border/60 py-3.5 text-base transition-colors",
                  active ? "text-accent-strong" : "text-text hover:text-accent-strong",
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="text-[10px] tabular-nums text-subtle">
                    0{index + 1}
                  </span>
                  {item.label}
                </span>
                <ArrowUpRight className="size-4 opacity-50" aria-hidden="true" />
              </Link>
            );
          })}
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/contact" className="btn btn-primary w-full">
              Démarrer une conversation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="text-center text-xs text-muted hover:text-text"
            >
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

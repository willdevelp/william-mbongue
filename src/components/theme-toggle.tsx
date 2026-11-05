"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      title={isDark ? "Thème clair" : "Thème sombre"}
      className="grid size-9 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-text"
    >
      {isDark ? (
        <Sun className="size-[1.05rem]" aria-hidden="true" />
      ) : (
        <Moon className="size-[1.05rem]" aria-hidden="true" />
      )}
    </button>
  );
}

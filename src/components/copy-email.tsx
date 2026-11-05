"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 text-[10px] font-medium text-muted transition-colors hover:text-accent-strong"
      aria-label={copied ? "Adresse email copiée" : "Copier l'adresse email"}
    >
      {copied ? (
        <>
          <Check className="size-3" aria-hidden="true" />
          Copié
        </>
      ) : (
        <>
          <Copy className="size-3" aria-hidden="true" />
          Copier
        </>
      )}
    </button>
  );
}

"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn btn-outline"
    >
      <Printer className="size-4" aria-hidden="true" />
      Imprimer / enregistrer en PDF
    </button>
  );
}

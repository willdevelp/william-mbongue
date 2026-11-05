"use client";

import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  type: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  type: "Opportunité professionnelle",
  message: "",
};

const requestTypes = [
  "Opportunité professionnelle",
  "Stage ou alternance",
  "Projet / collaboration",
  "Question sur un projet",
  "Autre",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Indiquez votre nom.";
    if (!form.email.trim()) {
      nextErrors.email = "Indiquez votre adresse email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Cette adresse email semble invalide.";
    }
    if (form.message.trim().length < 20) {
      nextErrors.message = "Décrivez votre demande en quelques mots (20 caractères minimum).";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = `[Portfolio] ${form.type} — ${form.name}`;
    const body = [
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      `Type de demande : ${form.type}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card p-7 md:p-8">
        <div className="grid size-11 place-items-center rounded-xl border border-accent/30 bg-accent-soft text-accent-strong">
          <Send className="size-4" aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-display text-2xl tracking-tight text-text">
          Votre message est prêt.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Votre application mail devrait s&apos;ouvrir avec le message
          pré-rempli. Si ce n&apos;est pas le cas, écrivez directement à{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent-strong underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setForm(initialState);
              setSent(false);
            }}
            className="btn btn-outline"
          >
            Écrire un autre message
          </button>
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            Ouvrir mon client mail
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle"
          >
            Nom *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Votre nom"
            className="mt-2 w-full rounded-xl border border-border bg-bg/60 px-3.5 py-2.5 text-sm text-text placeholder:text-subtle focus:border-accent-strong focus:outline-none focus:ring-2 focus:ring-accent/25"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-[11px] text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="vous@exemple.com"
            className="mt-2 w-full rounded-xl border border-border bg-bg/60 px-3.5 py-2.5 text-sm text-text placeholder:text-subtle focus:border-accent-strong focus:outline-none focus:ring-2 focus:ring-accent/25"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-[11px] text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="type"
          className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle"
        >
          Type de demande
        </label>
        <select
          id="type"
          name="type"
          value={form.type}
          onChange={(event) => update("type", event.target.value)}
          className="mt-2 w-full appearance-none rounded-xl border border-border bg-bg/60 px-3.5 py-2.5 text-sm text-text focus:border-accent-strong focus:outline-none focus:ring-2 focus:ring-accent/25"
        >
          {requestTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Contexte, objectif, timeline… quelques lignes suffisent."
          className="mt-2 w-full resize-y rounded-xl border border-border bg-bg/60 px-3.5 py-2.5 text-sm leading-relaxed text-text placeholder:text-subtle focus:border-accent-strong focus:outline-none focus:ring-2 focus:ring-accent/25"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-[11px] text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary">
          <Send className="size-4" aria-hidden="true" />
          Envoyer le message
        </button>
        <p className="text-[10px] leading-relaxed text-subtle">
          Ouvre votre application mail. Aucune donnée n&apos;est stockée sur ce
          site.
        </p>
      </div>
    </form>
  );
}

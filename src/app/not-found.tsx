import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-surface opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div className="container-page relative flex min-h-[70vh] flex-col justify-center py-20">
        <p className="eyebrow">Erreur 404</p>
        <p className="mt-4 font-display text-[8rem] leading-none tracking-tighter text-border-strong md:text-[12rem]">
          404
          <span className="text-accent">.</span>
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-tight text-text md:text-4xl">
          Cette page n&apos;existe pas.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          La page a peut-être été déplacée, ou l&apos;adresse contient une
          coquille. Le plus simple reste de revenir à l&apos;accueil.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <Link href="/projets" className="btn btn-outline">
            Voir les projets
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

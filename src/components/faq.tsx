import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Quel type de poste ou de mission cherchez-vous ?",
    answer:
      "Je cherche une première expérience en développement fullstack ou en data engineering junior : stage, alternance ou poste junior. Les missions où je peux toucher au produit, aux APIs et aux données m'intéressent particulièrement.",
  },
  {
    question: "Êtes-vous disponible immédiatement ?",
    answer:
      "Oui, je suis disponible pour une alternance ou une opportunité junior. Le travail à distance ne me pose aucun problème ; je peux aussi m'adapter à un fuseau horaire différent.",
  },
  {
    question: "Travaillez-vous en freelance ?",
    answer:
      "Pour de petits projets web ou des missions d'intégration, oui, selon le périmètre. Pour un projet plus long, je préfère d'abord échanger sur les besoins et la faisabilité avant de m'engager.",
  },
  {
    question: "Comment se passe une collaboration ?",
    answer:
      "On commence par un échange court pour clarifier le problème, les utilisateurs et les contraintes. Je propose ensuite un périmètre réaliste, des étapes livrables et une façon de travailler transparente. La documentation fait partie du livrable.",
  },
  {
    question: "Peut-on vérifier vos certifications ?",
    answer:
      "Oui. Les identifiants disponibles sont indiqués sur la page Certifications, et je peux envoyer les documents originaux sur demande. Je distingue toujours clairement ce qui est obtenu de ce qui est en cours.",
  },
];

export function Faq() {
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          className="group card overflow-hidden [&::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-sm font-medium text-text">
            <span className="flex items-baseline gap-3">
              <span className="text-[10px] tabular-nums text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              {faq.question}
            </span>
            <Plus
              className="size-4 shrink-0 text-accent-strong transition-transform duration-300 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="px-5 pb-5 pl-[3.1rem] text-[13px] leading-relaxed text-muted">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

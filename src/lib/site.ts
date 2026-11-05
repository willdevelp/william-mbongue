export const site = {
  name: "William Mbongue",
  displayName: "William Mbongue",
  shortName: "William",
  initials: "WM",
  role: "Développeur fullstack",
  focus: "Cap data",
  tagline: "Des interfaces claires, des APIs solides, des données qui racontent quelque chose.",
  email: "mbonguefeukou@gmail.com",
  phone: "+237 695 461 204",
  location: "Cameroun",
  availability: "Ouvert aux stages, alternances et premières opportunités",
  status: "Disponible",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://williammbongue.vercel.app",
  description:
    "Portfolio de William Mbongue, développeur fullstack orienté data. Applications web avec React, Next.js et Laravel, analyse de données avec Python et SQL.",
  keywords: [
    "William Mbongue",
    "développeur fullstack",
    "data analyst",
    "data engineer junior",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "PostgreSQL",
    "Python",
    "SQL",
    "portfolio",
  ],
  github: "https://github.com/willdevelp",
  linkedin: null as string | null,
  socials: [
    { label: "GitHub", href: "https://github.com/willdevelp", handle: "@willdevelp" },
    { label: "Email", href: "mailto:mbonguefeukou@gmail.com", handle: "mbonguefeukou@gmail.com" },
  ],
};

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projets" },
  { label: "À propos", href: "/a-propos" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projets" },
  { label: "À propos", href: "/a-propos" },
  { label: "Certifications", href: "/certifications" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: "06", label: "projets documentés", note: "web, data & expérimentations" },
  { value: "02", label: "certifications", note: "IA & développement fullstack" },
  { value: "03", label: "diplômes", note: "Bac, BTS, Licence" },
  { value: "01", label: "cap clair", note: "la data, sans lâcher le produit" },
];

export const services = [
  {
    number: "01",
    title: "Développement fullstack",
    text: "Des applications complètes, de l'interface à la base de données : authentification, rôles, tableaux de bord et parcours métier.",
    tags: ["Next.js", "React", "TypeScript", "Laravel", "PostgreSQL"],
    icon: "code" as const,
  },
  {
    number: "02",
    title: "Données & analyse",
    text: "Nettoyer, interroger et rendre lisible ce que les données ont à dire. Une pratique encore jeune, mais déjà au centre de mes projets.",
    tags: ["Python", "pandas", "SQL", "Jupyter", "Visualisation"],
    icon: "chart" as const,
  },
  {
    number: "03",
    title: "Produits & interfaces",
    text: "Des interfaces sobres et accessibles, pensées mobile d'abord, avec un système de design cohérent plutôt que des pages isolées.",
    tags: ["Tailwind CSS", "Design system", "Accessibilité", "Figma"],
    icon: "layout" as const,
  },
];

export const principles = [
  {
    title: "Clarté avant complexité",
    text: "Un produit se comprend avant de se coder. Je commence par les parcours, les rôles et les états, puis j'écris le minimum de code qui tient debout.",
  },
  {
    title: "Les données racontent une histoire",
    text: "Une table, un graphique ou une API ne valent que par la décision qu'ils rendent possible. Je remonte toujours du résultat vers la question.",
  },
  {
    title: "Livrer, puis améliorer",
    text: "Une version utile vaut mieux qu'une architecture parfaite sur le papier. Je construis par petits incréments, je mesure et je corrige.",
  },
  {
    title: "Apprendre en continu",
    text: "Je documente ce que je fais, je lis les erreurs et je partage ce que je comprends. La curiosité est une compétence de travail, pas un trait de personnalité.",
  },
];

export const quickFacts = [
  { label: "Basé au", value: "Cameroun" },
  { label: "Travail", value: "À distance / hybride" },
  { label: "Focus", value: "Fullstack → Data" },
  { label: "Langues", value: "Français · Anglais (bases)" },
];

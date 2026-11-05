export type SkillGroup = {
  title: string;
  description: string;
  icon: "code" | "server" | "database" | "chart" | "tools";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    description: "Interfaces & intégration",
    icon: "code",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Back-end",
    description: "APIs & logique métier",
    icon: "server",
    items: ["Laravel", "PHP", "Route Handlers", "Prisma", "Supabase"],
  },
  {
    title: "Données",
    description: "Analyse & modélisation",
    icon: "chart",
    items: ["Python", "pandas", "SQL", "Jupyter", "Matplotlib", "scikit-learn (bases)"],
  },
  {
    title: "Bases de données",
    description: "Stockage & requêtes",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "Modélisation relationnelle", "Requêtes analytiques"],
  },
  {
    title: "Outils",
    description: "Versioning & livraison",
    icon: "tools",
    items: ["Git", "GitHub", "Vercel", "Figma", "VS Code"],
  },
];

export const focusSkills = [
  "SQL analytique",
  "Python & pandas",
  "Modélisation de données",
  "Visualisation",
  "Next.js",
  "PostgreSQL",
];

export const toolbelt = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "PHP",
  "PostgreSQL",
  "MySQL",
  "Python",
  "pandas",
  "SQL",
  "Jupyter",
  "Git",
  "GitHub",
  "Figma",
  "Vercel",
];

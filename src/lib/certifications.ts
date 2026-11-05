export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  skills: string[];
  href?: string;
  status: "obtenue" | "en-cours";
};

export const certifications: Certification[] = [
  {
    title: "Principes fondamentaux de l'intelligence artificielle",
    issuer: "Heure IA",
    date: "17 août 2025",
    credentialId: "0000000478",
    description:
      "Les bases de l'IA : données, apprentissage automatique, cas d'usage et limites. Une première grille de lecture pour aborder les projets data avec recul.",
    skills: ["Intelligence artificielle", "Machine learning", "Éthique & limites"],
    status: "obtenue",
  },
  {
    title: "Développeur web fullstack",
    issuer: "Simplon.co · soutenu par l'OIF",
    date: "Janvier – mai 2025",
    description:
      "Formation intensive et certifiante autour de la conception et du développement d'applications web modernes, du parcours utilisateur à la base de données.",
    skills: ["React", "Laravel", "Tailwind CSS", "MySQL", "Figma"],
    status: "obtenue",
  },
  {
    title: "Data Analytics",
    issuer: "IBM SkillsBuild",
    date: "Parcours en cours · 2026",
    description:
      "Un parcours structuré autour de la préparation des données, du SQL, de la visualisation et de la démarche analytique. En cours, avec des projets pratiques à l'appui.",
    skills: ["SQL", "Python", "Visualisation", "Storytelling"],
    status: "en-cours",
  },
  {
    title: "SQL analytique appliqué",
    issuer: "Autoformation · projets personnels",
    date: "En continu · 2026",
    description:
      "Requêtes de lecture, agrégations, jointures et sous-requêtes sur des jeux de données réels, avec un focus sur la clarté et la performance des requêtes.",
    skills: ["PostgreSQL", "Jointures", "Agrégations", "Modélisation"],
    status: "en-cours",
  },
];

export const education = [
  {
    degree: "Licence en Génie Logiciel",
    school: "Institut Universitaire des Technologies",
    period: "2024 – 2025",
    note: "Conception logicielle, bases de données, développement web et gestion de projet.",
  },
  {
    degree: "BTS en Génie Logiciel",
    school: "Institut Universitaire de la Côte",
    period: "2022 – 2024",
    note: "Fondamentaux de l'informatique, programmation, réseaux et analyse.",
  },
  {
    degree: "Baccalauréat D",
    school: "Institut Jean Paul II",
    period: "2021 – 2022",
    note: "Scientifique.",
  },
];

export const learningFocus = [
  {
    title: "SQL analytique",
    detail: "Jointures, agrégations, fenêtres et lisibilité des requêtes.",
  },
  {
    title: "Python pour la data",
    detail: "pandas, NumPy, notebooks reproductibles et visualisation.",
  },
  {
    title: "Modélisation",
    detail: "Schémas relationnels, normalisation et qualité des données.",
  },
  {
    title: "Culture produit",
    detail: "Transformer une analyse en décision compréhensible par tous.",
  },
];

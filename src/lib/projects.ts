export type ProjectCategory = "Web" | "Data" | "IA" | "IoT";
export type CoverVariant =
  | "orb"
  | "stack"
  | "grid"
  | "wave"
  | "bars"
  | "nodes"
  | "pulse";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  kind: string;
  year: string;
  role: string;
  stack: string[];
  cover: CoverVariant;
  featured: boolean;
  status: string;
  summary: string;
  context: string;
  challenge: string;
  approach: { title: string; text: string }[];
  results: string[];
  learnings: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "eventza",
    title: "Eventza",
    subtitle: "Un SaaS pour créer, publier et piloter des événements.",
    category: "Web",
    kind: "SaaS événementiel",
    year: "2026",
    role: "Conception & développement fullstack",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Vercel",
    ],
    cover: "orb",
    featured: true,
    status: "Projet de formation · démonstration",
    summary:
      "Une plateforme qui permet aux organisateurs de créer leurs événements, d'ouvrir les inscriptions et de suivre les participants depuis un tableau de bord.",
    context:
      "Les organisateurs d'événements jonglent souvent entre un formulaire, une feuille de calcul et une messagerie. Le suivi devient fragile dès que le nombre de participants augmente.",
    challenge:
      "Centraliser la création d'événements, les inscriptions et le suivi des participants, avec un espace séparé pour les organisateurs et une page publique simple pour les visiteurs.",
    approach: [
      {
        title: "Un espace par organisateur",
        text: "Chaque organisateur dispose de son propre espace, avec ses événements et ses participants. Les rôles et permissions empêchent un compte d'accéder aux données d'un autre.",
      },
      {
        title: "Un parcours d'inscription direct",
        text: "Chaque événement possède une page publique avec les informations essentielles, un formulaire court et une confirmation claire. Le parcours est pensé d'abord pour le mobile.",
      },
      {
        title: "Un tableau de bord actionnable",
        text: "L'organisateur retrouve ses inscriptions, filtre par événement et suit l'état de chaque participant. Les actions importantes restent accessibles sans quitter la page.",
      },
      {
        title: "Une base relationnelle fiable",
        text: "Le modèle PostgreSQL relie organisateurs, événements et inscriptions. Les contraintes d'unicité et les validations évitent les doublons et les inscriptions incomplètes.",
      },
    ],
    results: [
      "Un organisateur peut créer un événement, publier une page d'inscription et suivre les participants sans quitter l'application.",
      "Le parcours visiteur reste court et lisible sur mobile, avec une confirmation immédiate après l'inscription.",
      "Les rôles et les validations serveur protègent les données de chaque organisateur.",
    ],
    learnings: [
      "Un SaaS se conçoit d'abord autour des rôles et des permissions.",
      "Un formulaire public doit rester simple même quand le modèle de données est riche.",
      "Un tableau de bord utile montre l'état courant et l'action suivante.",
    ],
  },
  {
    slug: "cafe-commande",
    title: "Commande au café",
    subtitle: "Commander en ligne, suivre la préparation en cuisine.",
    category: "Web",
    kind: "Application web",
    year: "2025",
    role: "Développement fullstack",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "PHP",
      "PostgreSQL",
    ],
    cover: "stack",
    featured: false,
    status: "Projet de formation",
    summary:
      "Une application de commande pour un café : menu, panier, validation et espace administrateur pour suivre les commandes et gérer les produits.",
    context:
      "Dans un café, les commandes prises à l'oral ou par téléphone sont difficiles à suivre quand l'activité s'intensifie. L'équipe a besoin d'une vue unique sur ce qui doit être préparé.",
    challenge:
      "Offrir un parcours client simple pour choisir un produit et commander, tout en donnant à l'équipe un espace pour voir les commandes, changer leur statut et gérer le menu.",
    approach: [
      {
        title: "Un menu lisible",
        text: "Les produits sont classés par catégorie, avec leur prix et leur disponibilité. Le client voit immédiatement ce qui peut être commandé.",
      },
      {
        title: "Un panier sans friction",
        text: "Le client ajuste les quantités, vérifie le total et valide sa commande en quelques étapes. Les erreurs de saisie sont traitées avant l'envoi.",
      },
      {
        title: "Des statuts explicites",
        text: "Une commande passe par des états clairs : en attente, en préparation, prête, récupérée. L'équipe sait toujours quoi faire ensuite.",
      },
      {
        title: "Un espace admin protégé",
        text: "Le dashboard regroupe les commandes du jour, la gestion du menu et les informations utiles au service. L'accès est réservé aux personnes autorisées.",
      },
    ],
    results: [
      "Le client compose sa commande et l'envoie depuis son téléphone.",
      "L'équipe suit chaque commande dans un dashboard et met à jour son statut jusqu'au retrait.",
      "Le modèle de données sépare produits, commandes et lignes de commande pour garder l'historique intact.",
    ],
    learnings: [
      "Un parcours de commande repose sur des états simples et prévisibles.",
      "Un espace admin doit montrer ce qui est urgent avant ce qui est intéressant.",
      "Le mobile n'est pas une version réduite du desktop : c'est le point de départ.",
    ],
  },
  {
    slug: "verification-certificats",
    title: "Certificats vérifiables",
    subtitle: "Un QR code, une page publique, une preuve fiable.",
    category: "Web",
    kind: "Application web",
    year: "2025",
    role: "Conception & développement fullstack",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Supabase",
    ],
    cover: "grid",
    featured: true,
    status: "Projet de formation",
    summary:
      "Une application qui permet à un centre de formation d'ajouter des certificats, de générer un QR code unique et de laisser chacun vérifier la validité d'un document.",
    context:
      "Les certificats papier ou PDF circulent facilement et peuvent être modifiés. Vérifier leur authenticité demande souvent un échange manuel avec l'établissement.",
    challenge:
      "Créer une source unique pour les certificats, un identifiant difficile à deviner et une page publique de vérification accessible en scannant un QR code.",
    approach: [
      {
        title: "Un espace admin pour les certificats",
        text: "L'administrateur renseigne l'apprenant, la formation, la date et le statut. Chaque certificat reçoit un identifiant unique.",
      },
      {
        title: "Un QR code par certificat",
        text: "Le QR code encode l'URL de vérification du certificat. Il peut être imprimé sur le document ou partagé sous forme numérique.",
      },
      {
        title: "Une page publique de vérification",
        text: "En scannant le code, l'utilisateur arrive sur une page qui indique si le certificat est valide, avec le nom de l'apprenant, la formation et la date. Aucune donnée sensible n'est exposée.",
      },
      {
        title: "Une base fiable",
        text: "Les identifiants sont uniques, les statuts sont explicites et les créations sont tracées. La vérification ne dépend pas d'un fichier PDF qu'il suffirait de modifier.",
      },
    ],
    results: [
      "L'administrateur ajoute un certificat et obtient un QR code à imprimer.",
      "Un recruteur scanne le code et voit immédiatement si le certificat est valide, sans contacter l'établissement.",
      "La page de vérification expose uniquement les informations nécessaires à la preuve.",
    ],
    learnings: [
      "Un identifiant public doit être unique, stable et difficile à deviner.",
      "Une page de vérification doit prouver sans exposer d'informations personnelles inutiles.",
      "Un QR code n'est utile que si la page d'arrivée est immédiatement compréhensible.",
    ],
  },
  {
    slug: "vehicules-electriques",
    title: "Mobilité électrique",
    subtitle: "Un catalogue clair pour comprendre avant de choisir.",
    category: "Web",
    kind: "Site vitrine",
    year: "2025",
    role: "Développement front-end",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    cover: "wave",
    featured: false,
    status: "Projet de formation",
    summary:
      "Un site de présentation de véhicules électriques : catalogue, fiches détaillées, arguments et formulaire de demande d'essai.",
    context:
      "Un acteur de la mobilité électrique voulait présenter ses véhicules avec un discours clair sur l'autonomie, la recharge et l'usage quotidien.",
    challenge:
      "Rendre les informations comparables et permettre aux visiteurs de manifester simplement leur intérêt, sans les noyer sous les caractéristiques techniques.",
    approach: [
      {
        title: "Un catalogue structuré",
        text: "Les modèles sont présentés dans une grille cohérente, avec les informations essentielles visibles sans ouvrir chaque fiche.",
      },
      {
        title: "Des fiches qui répondent aux questions",
        text: "Chaque fiche détaille l'autonomie, la recharge, les équipements et les usages, dans un langage accessible à un visiteur qui découvre l'électrique.",
      },
      {
        title: "Une demande d'essai simple",
        text: "Un formulaire court permet de choisir un modèle et de laisser ses coordonnées. La confirmation explique la prochaine étape.",
      },
      {
        title: "Performance et responsive",
        text: "Les images sont dimensionnées et chargées avec parcimonie, les mises en page s'adaptent au mobile et la navigation reste fluide.",
      },
    ],
    results: [
      "Le visiteur parcourt le catalogue, ouvre une fiche et envoie une demande d'essai.",
      "Le site reste lisible et rapide sur mobile, avec un parcours qui mène naturellement au contact.",
      "La hiérarchie visuelle met les informations de décision avant les détails techniques.",
    ],
    learnings: [
      "Un catalogue doit être pensé comme un contenu, pas comme une galerie d'images.",
      "Les fiches produit doivent répondre aux objections avant de mettre en avant les options.",
      "La performance fait partie de l'expérience, surtout sur mobile.",
    ],
  },
  {
    slug: "data-exploration",
    title: "De la donnée brute à l'insight",
    subtitle: "Nettoyer, explorer et raconter un jeu de données.",
    category: "Data",
    kind: "Analyse exploratoire",
    year: "2026",
    role: "Analyse & documentation",
    stack: ["Python", "pandas", "NumPy", "Jupyter", "Matplotlib", "SQL"],
    cover: "bars",
    featured: true,
    status: "Projet d'apprentissage · notebook reproductible",
    summary:
      "Un notebook qui part d'un jeu de données brut, documente les problèmes de qualité, nettoie les données et construit des visualisations pour répondre à des questions simples.",
    context:
      "Un jeu de données brut contient rarement ce qu'il faut pour répondre directement à une question : valeurs manquantes, types incohérents, doublons et colonnes peu lisibles font partie du travail.",
    challenge:
      "Transformer un fichier difficile à lire en une analyse reproductible, avec des choix de nettoyage explicites et des visualisations qui racontent une histoire plutôt que d'empiler des graphiques.",
    approach: [
      {
        title: "Auditer avant de toucher",
        text: "Premier passage sur les dimensions, les types, les valeurs manquantes et les doublons. Chaque problème est noté avant d'être corrigé.",
      },
      {
        title: "Nettoyer avec des règles",
        text: "Les transformations sont isolées dans des cellules lisibles et commentées : typage, valeurs aberrantes, doublons, colonnes dérivées.",
      },
      {
        title: "Explorer par questions",
        text: "L'analyse suit une série de questions simples : quelles sont les tendances, les groupes, les valeurs extrêmes ? Chaque graphique répond à une question.",
      },
      {
        title: "Documenter les limites",
        text: "Le notebook précise ce que les données ne permettent pas de conclure. Une analyse honnête dit aussi ce qu'elle ne sait pas.",
      },
    ],
    results: [
      "Un notebook structuré, exécutable de bout en bout, qui sépare audit, nettoyage, exploration et conclusions.",
      "Des visualisations lisibles qui mettent en évidence les tendances et les groupes principaux.",
      "Une liste explicite des limites et des questions à approfondir avec plus de données.",
    ],
    learnings: [
      "Le nettoyage représente une grande partie du travail, et il doit être documenté.",
      "Un bon graphique répond à une question précise, pas à toutes à la fois.",
      "La reproductibilité vaut mieux qu'un résultat isolé.",
    ],
  },
  {
    slug: "ml-classification",
    title: "Premier modèle supervisé",
    subtitle: "Construire une baseline, puis mesurer honnêtement.",
    category: "IA",
    kind: "Machine learning",
    year: "2026",
    role: "Expérimentation & évaluation",
    stack: ["Python", "scikit-learn", "pandas", "Matplotlib", "Jupyter"],
    cover: "nodes",
    featured: false,
    status: "Projet d'apprentissage",
    summary:
      "Une expérimentation de classification supervisée qui part d'une baseline simple, compare quelques modèles et analyse les erreurs au-delà de la précision globale.",
    context:
      "Un premier modèle peut sembler bon avec une seule métrique. Le vrai travail consiste à comprendre ce qu'il apprend, où il se trompe et dans quelles conditions il reste utile.",
    challenge:
      "Éviter le piège du modèle « boîte noire » : préparer les données sans fuite, choisir une baseline, comparer des modèles et interpréter les résultats avec recul.",
    approach: [
      {
        title: "Préparer sans fuite",
        text: "Séparation entraînement / test avant toute transformation, encodage des variables et normalisation ajustés uniquement sur l'entraînement.",
      },
      {
        title: "Commencer simple",
        text: "Une baseline lisible est mise en place avant les modèles plus complexes, pour savoir si la complexité apporte réellement quelque chose.",
      },
      {
        title: "Comparer avec les bonnes métriques",
        text: "La précision est complétée par la matrice de confusion et le rappel, car une erreur peut coûter plus cher dans un sens que dans l'autre.",
      },
      {
        title: "Analyser les erreurs",
        text: "Les faux positifs et faux négatifs sont examinés pour identifier les variables manquantes, les classes déséquilibrées et les limites du jeu de données.",
      },
    ],
    results: [
      "Un pipeline clair, de la préparation des données à l'évaluation du modèle.",
      "Une comparaison entre baseline et modèles plus complexes, avec les métriques adaptées.",
      "Une analyse des erreurs qui compte autant que le score final.",
    ],
    learnings: [
      "Une seule métrique peut cacher un modèle inutile.",
      "La préparation des données détermine une grande partie du résultat.",
      "Un modèle doit être expliqué avant d'être déployé.",
    ],
  },
  {
    slug: "station-meteo-esp32",
    title: "Station météo ESP32",
    subtitle: "Mesurer le réel, du capteur au dashboard.",
    category: "IoT",
    kind: "Expérimentation IoT",
    year: "2025",
    role: "Montage & programmation embarquée",
    stack: ["ESP32", "C++", "DHT22", "Arduino", "Wokwi"],
    cover: "pulse",
    featured: false,
    status: "Projet d'apprentissage",
    summary:
      "Un montage qui lit la température et l'humidité avec un capteur DHT22, affiche les mesures et documente le câblage pour pouvoir reproduire l'expérience.",
    context:
      "La data commence souvent par un capteur. Comprendre comment une mesure est produite, transmise et stockée aide à mieux juger la qualité des données en aval.",
    challenge:
      "Obtenir des mesures stables avec un capteur simple, gérer les erreurs de lecture et rendre le montage compréhensible pour quelqu'un qui le découvre.",
    approach: [
      {
        title: "Câblage documenté",
        text: "Le schéma de connexion et les broches utilisées sont documentés, avec les précautions d'alimentation du capteur.",
      },
      {
        title: "Lecture robuste",
        text: "Le programme lit le capteur à intervalle régulier, vérifie les valeurs reçues et ignore les mesures manifestement invalides.",
      },
      {
        title: "Restitution lisible",
        text: "Les mesures sont affichées et journalisées dans un format simple, prêt à être envoyé vers un stockage ou un tableau de bord.",
      },
      {
        title: "Reproductibilité",
        text: "Le code et le montage sont décrits pas à pas pour être rejoués sur une autre carte ou dans un simulateur.",
      },
    ],
    results: [
      "Un montage fonctionnel qui lit température et humidité et affiche les valeurs.",
      "Un code commenté avec gestion des erreurs de lecture.",
      "Une documentation qui relie la mesure physique à la donnée exploitable.",
    ],
    learnings: [
      "Une donnée n'est jamais neutre : elle dépend du capteur et du protocole de mesure.",
      "Les erreurs de lecture doivent être gérées, pas ignorées.",
      "Un projet embarqué se documente autant qu'il se code.",
    ],
  },
];

export const projectCategories: Array<"Tous" | ProjectCategory> = [
  "Tous",
  "Web",
  "Data",
  "IA",
  "IoT",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}

export const featuredProjects = projects.filter((project) => project.featured);

import { NavItem, NavChild } from "./types";

export const footerNav: NavItem[] = [
  {
    label: "Qui sommes-nous",
    href: "/qui-sommes-nous",
    children: [
      { label: "Vision, mission, valeurs", href: "/qui-sommes-nous/vision-mission-valeurs" },
      { label: "Équipe", href: "/qui-sommes-nous/equipe" },
      { label: "Engagements & politiques", href: "/qui-sommes-nous/engagements-politiques" },
      { label: "Recherche & développement", href: "/qui-sommes-nous/recherche-developpement" },
      { label: "Carrières", href: "/carrieres" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Études", href: "/services/etudes" },
      { label: "Suivis & évaluations", href: "/services/suivis-evaluations" },
      { label: "Formations & coachings", href: "/services/formations-coachings" },
    ],
  },
  {
    label: "Domaines",
    href: "/domaines",
    children: [
      { label: "Management des organisations", href: "/domaines/management-des-organisations" },
      { label: "Analyse & développement des chaînes de valeur", href: "/domaines/chaines-de-valeur" },
      { label: "Évaluation de genre de projets & programmes de développement", href: "/domaines/evaluation-genre" },
      { label: "Plaidoyer", href: "/domaines/plaidoyer" },
    ],
  },
  {
    label: "Références",
    href: "/references",
    children: [
      { label: "Clients & partenaires", href: "/references/clients-partenaires" },
      { label: "Projets récents ou en cours", href: "/references/projets" },
    ],
  },
];

export const footerInfoLinks: NavChild[] = [
  { label: "Contact", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politiques de protection des données personnelles", href: "/confidentialite" },
];

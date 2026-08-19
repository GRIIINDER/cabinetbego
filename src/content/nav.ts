import { NavItem, NavChild } from "./types";

export const nav: NavItem[] = [
  {
    label: "Qui sommes-nous",
    href: "/qui-sommes-nous",
    children: [
      { label: "Vision, mission, valeurs", href: "/qui-sommes-nous/vision-mission-valeurs" },
      { label: "Équipe", href: "/qui-sommes-nous/equipe" },
      { label: "Recherche & développement", href: "/qui-sommes-nous/recherche-developpement" },
      { label: "Engagements & politiques", href: "/qui-sommes-nous/engagements-politiques" },
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
      { label: "Plaidoyer et gestion communautaire", href: "/domaines/plaidoyer" },
    ],
  },
  {
    label: "Références",
    href: "/references",
    children: [
      { label: "Clients & partenaires", href: "/references/clients-partenaires" },
      { label: "Nos réalisations", href: "/references/projets" },
    ],
  },
  {
    label: "Ressources",
    href: "/ressources",
    children: [
      { label: "Agrométéorologie", href: "/ressources/agrometeorologie" },
      { label: "Intelligence économique", href: "/ressources/intelligence-economique" },
      { label: "Autres", href: "/ressources/autres" },
    ],
  },
];

export const topNav: NavChild[] = [
  { label: "Carrières", href: "/carrieres" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

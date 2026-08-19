import { NavItem, NavChild } from "./types";
import { Locale } from "./site";

export const footerNav: Record<Locale, NavItem[]> = {
  fr: [
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
  ],
  en: [
    {
      label: "About us",
      href: "/qui-sommes-nous",
      children: [
        { label: "Vision, mission, values", href: "/qui-sommes-nous/vision-mission-valeurs" },
        { label: "Team", href: "/qui-sommes-nous/equipe" },
        { label: "Commitments & policies", href: "/qui-sommes-nous/engagements-politiques" },
        { label: "Research & development", href: "/qui-sommes-nous/recherche-developpement" },
        { label: "Careers", href: "/carrieres" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Studies", href: "/services/etudes" },
        { label: "Monitoring & evaluations", href: "/services/suivis-evaluations" },
        { label: "Training & coaching", href: "/services/formations-coachings" },
      ],
    },
    {
      label: "Focus Areas",
      href: "/domaines",
      children: [
        { label: "Organizational management", href: "/domaines/management-des-organisations" },
        { label: "Value chain analysis & development", href: "/domaines/chaines-de-valeur" },
        { label: "Gender evaluation of development projects & programmes", href: "/domaines/evaluation-genre" },
        { label: "Advocacy", href: "/domaines/plaidoyer" },
      ],
    },
    {
      label: "References",
      href: "/references",
      children: [
        { label: "Clients & partners", href: "/references/clients-partenaires" },
        { label: "Recent & ongoing projects", href: "/references/projets" },
      ],
    },
  ],
};

export const footerInfoLinks: Record<Locale, NavChild[]> = {
  fr: [
    { label: "Contact", href: "/contact" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politiques de protection des données personnelles", href: "/confidentialite" },
  ],
  en: [
    { label: "Contact", href: "/contact" },
    { label: "Legal notice", href: "/mentions-legales" },
    { label: "Personal data protection policy", href: "/confidentialite" },
  ],
};

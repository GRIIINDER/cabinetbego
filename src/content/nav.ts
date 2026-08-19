import { NavItem, NavChild } from "./types";
import { Locale } from "./site";

export const nav: Record<Locale, NavItem[]> = {
  fr: [
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
  ],
  en: [
    {
      label: "About us",
      href: "/qui-sommes-nous",
      children: [
        { label: "Vision, mission, values", href: "/qui-sommes-nous/vision-mission-valeurs" },
        { label: "Team", href: "/qui-sommes-nous/equipe" },
        { label: "Research & development", href: "/qui-sommes-nous/recherche-developpement" },
        { label: "Commitments & policies", href: "/qui-sommes-nous/engagements-politiques" },
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
        { label: "Advocacy & community management", href: "/domaines/plaidoyer" },
      ],
    },
    {
      label: "References",
      href: "/references",
      children: [
        { label: "Clients & partners", href: "/references/clients-partenaires" },
        { label: "Our achievements", href: "/references/projets" },
      ],
    },
    {
      label: "Resources",
      href: "/ressources",
      children: [
        { label: "Agrometeorology", href: "/ressources/agrometeorologie" },
        { label: "Economic intelligence", href: "/ressources/intelligence-economique" },
        { label: "Other", href: "/ressources/autres" },
      ],
    },
  ],
};

export const topNav: Record<Locale, NavChild[]> = {
  fr: [
    { label: "Carrières", href: "/carrieres" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  en: [
    { label: "Careers", href: "/carrieres" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
};

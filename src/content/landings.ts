import { LandingContent } from "./types";

export const landings: Record<string, LandingContent> = {
  "qui-sommes-nous": {
    kicker: "Qui sommes-nous",
    title: "Un cabinet basé à Lomé, au service du développement en Afrique de l'Ouest",
    intro:
      "BEGO accompagne les organisations publiques, privées et communautaires dans la réalisation de projets à fort impact. Notre équipe permanente, complétée par un réseau de consultants spécialisés, agit dans trois domaines stratégiques : le management des organisations, l'analyse et le développement des chaînes de valeur, et l'évaluation de genre des projets.",
    cards: [
      {
        title: "Vision, mission, valeurs",
        description: "Les principes qui guident chacune de nos interventions.",
        href: "/qui-sommes-nous/vision-mission-valeurs",
      },
      {
        title: "Équipe",
        description: "Une équipe permanente et un réseau de consultants à travers l'Afrique de l'Ouest.",
        href: "/qui-sommes-nous/equipe",
      },
      {
        title: "Recherche & développement",
        description: "Des solutions innovantes fondées sur des données de terrain.",
        href: "/qui-sommes-nous/recherche-developpement",
      },
      {
        title: "Engagements & politiques",
        description: "Transparence, éthique et responsabilité au cœur de nos pratiques.",
        href: "/qui-sommes-nous/engagements-politiques",
      },
    ],
  },

  services: {
    kicker: "Services",
    title: "Trois axes de services, enrichis par des offres sur mesure",
    intro:
      "Chez BEGO, nous accompagnons les entreprises, institutions et organisations dans la réussite de leurs projets, à travers des services spécialisés et adaptés à leurs besoins.",
    cards: [
      {
        title: "Études",
        description: "Études de marché, de faisabilité, de référence et d'impact, fondées sur une méthodologie rigoureuse.",
        href: "/services/etudes",
      },
      {
        title: "Suivis & évaluations",
        description: "Des systèmes d'évaluation performants pour mesurer et améliorer l'impact de vos projets.",
        href: "/services/suivis-evaluations",
      },
      {
        title: "Formations & coachings",
        description: "Des formations pratiques et un coaching personnalisé pour renforcer vos équipes.",
        href: "/services/formations-coachings",
      },
    ],
  },

  domaines: {
    kicker: "Domaines",
    title: "Quatre axes stratégiques, ancrés dans les réalités du terrain",
    intro:
      "BEGO mobilise son expertise pour aider les entreprises, institutions et organisations à relever les enjeux du développement durable en Afrique de l'Ouest.",
    cards: [
      {
        title: "Management des organisations",
        description: "Gouvernance, structuration et performance des organisations.",
        href: "/domaines/management-des-organisations",
      },
      {
        title: "Chaînes de valeur",
        description: "Analyse et développement des chaînes de valeur agricoles et agroalimentaires.",
        href: "/domaines/chaines-de-valeur",
      },
      {
        title: "Évaluation de genre",
        description: "Intégration du genre dans les projets et programmes de développement.",
        href: "/domaines/evaluation-genre",
      },
      {
        title: "Plaidoyer",
        description: "Influence des politiques publiques pour un développement équitable et durable.",
        href: "/domaines/plaidoyer",
      },
    ],
  },

  references: {
    kicker: "Références",
    title: "Une expertise éprouvée auprès d'institutions et d'entreprises d'Afrique de l'Ouest",
    intro:
      "BEGO collabore avec des institutions gouvernementales, des organisations internationales et régionales, des entreprises et des cabinets de conseil dans les domaines de l'agriculture, du développement économique, de l'entrepreneuriat et de la finance inclusive.",
    cards: [
      {
        title: "Clients & partenaires",
        description: "Nos catégories de clients et partenaires, et pourquoi ils choisissent BEGO.",
        href: "/references/clients-partenaires",
      },
      {
        title: "Projets récents",
        description: "Un aperçu de nos missions récentes et en cours à travers la région.",
        href: "/references/projets",
      },
    ],
  },

  ressources: {
    kicker: "Ressources",
    title: "Bulletins, analyses et publications",
    intro:
      "BEGO met à disposition des bulletins et ressources pour appuyer la prise de décision des acteurs du développement en Afrique de l'Ouest.",
    cards: [
      {
        title: "Agrométéorologie",
        description: "Bulletins trimestriels agrométéorologiques et climat-santé.",
        href: "/ressources/agrometeorologie",
      },
      {
        title: "Intelligence économique",
        description: "Analyses et veille économique.",
        href: "/ressources/intelligence-economique",
      },
      {
        title: "Autres",
        description: "Autres publications et ressources de BEGO.",
        href: "/ressources/autres",
      },
    ],
  },
};

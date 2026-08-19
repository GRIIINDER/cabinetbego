import { Locale } from "./site";

export type NewsItem = {
  title: string;
  location: string;
  excerpt: string;
};

export const newsPage: Record<Locale, { kicker: string; intro: string }> = {
  fr: {
    kicker: "Actualités",
    intro:
      "Le Bureau d'Études et de Gestion des Organisations (BEGO), acteur majeur du développement durable en Afrique de l'Ouest, vous présente ici les actualités récentes de ses interventions. Formations, audits, accompagnements techniques, études de marché... restez informés de l'avancement de nos projets et de leurs effets sur le terrain.",
  },
  en: {
    kicker: "News",
    intro:
      "The Organizational Studies and Management Bureau (BEGO), a major player in sustainable development in West Africa, presents its recent activity here. Training, audits, technical support, market studies... stay informed of the progress of our projects and their effects on the ground.",
  },
};

export const staticNews: Record<Locale, NewsItem[]> = {
  fr: [
    {
      title: "Études socio-économiques dans la préfecture de la Basse-Kotto",
      location: "République centrafricaine",
      excerpt:
        "Analyse des organisations de producteurs et des opportunités d'emploi dans les régions d'Alindao et de Mobaye, avec un focus sur les besoins de renforcement de capacités et de structuration des coopératives.",
    },
    {
      title: "Évaluation initiale DelAgua",
      location: "Togo",
      excerpt:
        "Évaluation des pratiques culinaires actuelles en vue d'améliorer les conditions de vie par la distribution de foyers améliorés et la sensibilisation.",
    },
    {
      title: "Étude diagnostique dans la préfecture du Zio",
      location: "Togo",
      excerpt:
        "Cartographie des filières commerciales et de la transformation agricole et halieutique utilisant l'énergie biomasse, en vue de proposer des solutions énergétiques durables.",
    },
    {
      title: "Cartographie de l'écosystème entrepreneurial",
      location: "Togo",
      excerpt: "Analyse des réseaux de secteurs prioritaires et de la dimension genre, pour renforcer les capacités des acteurs et les liens au sein de l'écosystème.",
    },
    {
      title: "Cartographie de l'écosystème des femmes entrepreneures",
      location: "Togo",
      excerpt: "Focus sur les secteurs de la transformation verte, pour identifier les besoins de services des femmes entrepreneures.",
    },
    {
      title: "Coaching JULADO REHOBOTH",
      location: "Togo",
      excerpt: "Appui au développement d'un modèle d'agriculture contractuelle, avec une priorité donnée à la filière gingembre écologique.",
    },
    {
      title: "Appui aux modèles économiques de PME",
      location: "Togo",
      excerpt: "Accompagnement dans l'élaboration de modèles économiques sensibles au genre et prêts à être financés.",
    },
    {
      title: "Diagnostics stratégiques de deux TPME togolaises",
      location: "Togo",
      excerpt: "Diagnostics incluant la dimension numérique, avec des livrables de mise à niveau et de plans d'affaires pour la compétitivité.",
    },
  ],
  en: [
    {
      title: "Socio-economic studies in the Basse-Kotto prefecture",
      location: "Central African Republic",
      excerpt:
        "Analysis of producer organizations and employment opportunities in the Alindao and Mobaye regions, with a focus on capacity-building needs and cooperative structuring.",
    },
    {
      title: "DelAgua baseline assessment",
      location: "Togo",
      excerpt:
        "Assessment of current cooking practices with a view to improving living conditions through the distribution of improved cookstoves and awareness-raising.",
    },
    {
      title: "Diagnostic study in the Zio prefecture",
      location: "Togo",
      excerpt:
        "Mapping of trade sectors and agricultural and fisheries processing using biomass energy, with a view to proposing sustainable energy solutions.",
    },
    {
      title: "Mapping of the entrepreneurial ecosystem",
      location: "Togo",
      excerpt: "Analysis of priority sector networks and the gender dimension, to strengthen actors' capacities and ecosystem linkages.",
    },
    {
      title: "Mapping of the women entrepreneurs' ecosystem",
      location: "Togo",
      excerpt: "Focus on green processing sectors, to identify the service needs of women entrepreneurs.",
    },
    {
      title: "Coaching for JULADO REHOBOTH",
      location: "Togo",
      excerpt: "Support for developing a contract farming model, with priority given to the organic ginger sector.",
    },
    {
      title: "Support for SME business models",
      location: "Togo",
      excerpt: "Support in developing gender-sensitive, investment-ready business models.",
    },
    {
      title: "Strategic diagnostics of two Togolese MSMEs",
      location: "Togo",
      excerpt: "Diagnostics including the digital dimension, with deliverables covering upgrading and business plans for competitiveness.",
    },
  ],
};

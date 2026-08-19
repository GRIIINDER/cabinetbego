import { LandingContent } from "./types";
import { Locale } from "./site";

export const landings: Record<Locale, Record<string, LandingContent>> = {
  fr: {
    "qui-sommes-nous": {
      kicker: "Qui sommes-nous",
      title: "Un cabinet basé à Lomé, au service du développement en Afrique de l'Ouest",
      intro:
        "BEGO accompagne les organisations publiques, privées et communautaires dans la réalisation de projets à fort impact. Notre équipe permanente, complétée par un réseau de consultants spécialisés, agit dans trois domaines stratégiques : le management des organisations, l'analyse et le développement des chaînes de valeur, et l'évaluation de genre des projets.",
    },
    services: {
      kicker: "Services",
      title: "Trois axes de services, enrichis par des offres sur mesure",
      intro:
        "Chez BEGO, nous accompagnons les entreprises, institutions et organisations dans la réussite de leurs projets, à travers des services spécialisés et adaptés à leurs besoins.",
    },
    domaines: {
      kicker: "Domaines",
      title: "Quatre axes stratégiques, ancrés dans les réalités du terrain",
      intro:
        "BEGO mobilise son expertise pour aider les entreprises, institutions et organisations à relever les enjeux du développement durable en Afrique de l'Ouest.",
    },
    references: {
      kicker: "Références",
      title: "Une expertise éprouvée auprès d'institutions et d'entreprises d'Afrique de l'Ouest",
      intro:
        "BEGO collabore avec des institutions gouvernementales, des organisations internationales et régionales, des entreprises et des cabinets de conseil dans les domaines de l'agriculture, du développement économique, de l'entrepreneuriat et de la finance inclusive.",
    },
    ressources: {
      kicker: "Ressources",
      title: "Bulletins, analyses et publications",
      intro:
        "BEGO met à disposition des bulletins et ressources pour appuyer la prise de décision des acteurs du développement en Afrique de l'Ouest.",
    },
  },
  en: {
    "qui-sommes-nous": {
      kicker: "About us",
      title: "A firm based in Lomé, serving development across West Africa",
      intro:
        "BEGO supports public, private, and community organizations in delivering high-impact projects. Our permanent team, backed by a network of specialized consultants, works across three strategic areas: organizational management, value chain analysis and development, and gender evaluation of projects.",
    },
    services: {
      kicker: "Services",
      title: "Three areas of service, enriched by tailored offerings",
      intro:
        "At BEGO, we support businesses, institutions, and organizations in the success of their projects, through specialized services adapted to their needs.",
    },
    domaines: {
      kicker: "Focus Areas",
      title: "Four strategic pillars, rooted in field realities",
      intro:
        "BEGO mobilizes its expertise to help businesses, institutions, and organizations effectively address sustainable development challenges in West Africa.",
    },
    references: {
      kicker: "References",
      title: "Proven expertise with institutions and businesses across West Africa",
      intro:
        "BEGO works with government institutions, international and regional organizations, businesses, and consulting firms in agriculture, economic development, entrepreneurship, and inclusive finance.",
    },
    ressources: {
      kicker: "Resources",
      title: "Bulletins, analyses, and publications",
      intro:
        "BEGO provides bulletins and resources to support decision-making for development actors in West Africa.",
    },
  },
};

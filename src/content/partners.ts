import { Locale } from "./site";

export const partners: Record<
  Locale,
  {
    intro: string;
    categories: { title: string; description: string }[];
    whyUs: string[];
    kicker: string;
    pageTitle: string;
    whyUsTitle: string;
  }
> = {
  fr: {
    intro:
      "BEGO collabore à travers plusieurs secteurs en offrant des services de qualité en matière de management des organisations, d'analyse et de développement des chaînes de valeur, et d'évaluation de projets et programmes. Nous travaillons avec des institutions gouvernementales, des organisations internationales, des entreprises privées et des ONG actives dans l'agriculture, le développement économique, l'entrepreneuriat et la finance inclusive.",
    categories: [
      { title: "Institutions gouvernementales", description: "Partenaires publics au Togo et dans la sous-région." },
      { title: "Organisations internationales & régionales", description: "Agences de coopération et institutions régionales de développement." },
      { title: "Entreprises & cabinets de conseil", description: "Acteurs privés et cabinets partenaires." },
    ],
    whyUs: [
      "Expertise avérée dans le conseil et l'accompagnement stratégique",
      "Un solide réseau de partenaires pour des solutions innovantes",
      "Une approche personnalisée pour chaque projet",
    ],
    kicker: "Références",
    pageTitle: "Clients & partenaires",
    whyUsTitle: "Pourquoi travailler avec BEGO ?",
  },
  en: {
    intro:
      "BEGO collaborates across multiple sectors, offering high-quality services in organizational management, value chain analysis and development, and project and programme evaluation. We work with government institutions, international organizations, private businesses, and NGOs active in agriculture, economic development, entrepreneurship, and inclusive finance.",
    categories: [
      { title: "Government institutions", description: "Public partners in Togo and the sub-region." },
      { title: "International & regional organizations", description: "Cooperation agencies and regional development institutions." },
      { title: "Businesses & consulting firms", description: "Private actors and partner firms." },
    ],
    whyUs: [
      "Proven expertise in strategic consulting and support",
      "A strong network of partners for innovative solutions",
      "A personalized approach for every project",
    ],
    kicker: "References",
    pageTitle: "Clients & Partners",
    whyUsTitle: "Why work with BEGO?",
  },
};

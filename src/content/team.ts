import { Locale } from "./site";

export const team: Record<
  Locale,
  {
    intro: string;
    members: { name: string; role: string }[];
    partnersNote: string;
    culture: string;
    kicker: string;
    pageTitle: string;
    networkTitle: string;
    cultureTitle: string;
  }
> = {
  fr: {
    intro:
      "BEGO est fier de compter sur une équipe de professionnels dévoués et expérimentés, passionnés par le développement économique et social de l'Afrique de l'Ouest.",
    members: [
      { name: "TOUNOUVI Komi Mawuko", role: "Directeur Général" },
      { name: "ATIEGO-NOGLO Aku Mawupemo", role: "Responsable administratif et financier" },
      { name: "BAWANA Kodjovi Delfin", role: "Responsable Division Prospective" },
      { name: "DOSSOUVI Kouassi Romain", role: "Responsable Division Études" },
    ],
    partnersNote:
      "BEGO collabore également avec des spécialistes externes à travers le Togo et l'Afrique de l'Ouest, dans les domaines de l'agro-industrie, de la sécurité alimentaire, de l'entrepreneuriat et de la formation.",
    culture:
      "Notre organisation place la collaboration, l'innovation, l'excellence et la diversité au cœur de son approche du travail.",
    kicker: "Qui sommes-nous",
    pageTitle: "Équipe",
    networkTitle: "Un réseau de consultants",
    cultureTitle: "Notre culture d'entreprise",
  },
  en: {
    intro:
      "BEGO is proud to rely on a team of dedicated, experienced professionals passionate about the economic and social development of West Africa.",
    members: [
      { name: "TOUNOUVI Komi Mawuko", role: "Managing Director" },
      { name: "ATIEGO-NOGLO Aku Mawupemo", role: "Administrative and Financial Manager" },
      { name: "BAWANA Kodjovi Delfin", role: "Head of Foresight Division" },
      { name: "DOSSOUVI Kouassi Romain", role: "Head of Studies Division" },
    ],
    partnersNote:
      "BEGO also collaborates with external specialists across Togo and West Africa, in agro-industry, food security, entrepreneurship, and training.",
    culture:
      "Our organization places collaboration, innovation, excellence, and diversity at the heart of its approach to work.",
    kicker: "About us",
    pageTitle: "Team",
    networkTitle: "A network of consultants",
    cultureTitle: "Our corporate culture",
  },
};

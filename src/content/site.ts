export const site = {
  name: "Cabinet BEGO",
  address: {
    line1: "Adidogomé – Apédokoin, près de la clinique panafricaine Les Marrons",
    line2: "Lomé, Togo",
    postal: "BP : 31044 Lomé – Togo",
  },
  phones: ["(+228) 90 35 23 86", "(+228) 99 72 52 85", "(+228) 98 94 37 93"],
  email: "contact@cabinetbego.com",
  careersEmail: "direction.bego@cabinetbego.com",
  social: {
    facebook: "https://facebook.com/cabinetbego",
    linkedin: "https://linkedin.com/company/cabinetbego",
    x: "https://x.com/cabinetbego",
  },
  translations: {
    fr: {
      fullName: "Bureau d'Études et de Gestion des Organisations",
      baseline: "Compétence – Confidentialité – Coopération",
      description:
        "Le Bureau d'Études et de Gestion des Organisations (BEGO) offre des services d'études, de formations, de coaching et de gestion d'entreprises et des organisations en Afrique de l'Ouest.",
      hours: "Du lundi au vendredi, de 8h00 à 18h00",
      hoursNote: "Nous sommes également disponibles sur rendez-vous en dehors de ces horaires.",
      stats: [
        { value: "6+", label: "Pays d'intervention" },
        { value: "5+", label: "Salariés" },
        { value: "40+", label: "Contractuels" },
        { value: "17+", label: "Projets" },
      ],
    },
    en: {
      fullName: "Organizational Studies and Management Bureau",
      baseline: "Competence – Confidentiality – Cooperation",
      description:
        "The Organizational Studies and Management Bureau (BEGO) provides studies, training, coaching, and business and organizational management services across West Africa.",
      hours: "Monday to Friday, 8:00 am to 6:00 pm",
      hoursNote: "We are also available by appointment outside these hours.",
      stats: [
        { value: "6+", label: "Countries of operation" },
        { value: "5+", label: "Staff" },
        { value: "40+", label: "Contractors" },
        { value: "17+", label: "Projects" },
      ],
    },
  },
} as const;

export type Locale = "fr" | "en";

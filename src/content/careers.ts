import { Locale } from "./site";

export const careers: Record<
  Locale,
  {
    intro: string;
    reasons: string[];
    process: { step: string; title: string; description: string }[];
    diversity: string;
    applicationNote: string;
    closing: string;
    pageKicker: string;
    openPositions: string;
    noOpenPositions: string;
    deadline: string;
    diversityTitle: string;
    spontaneousTitle: string;
    spontaneousSubject: string;
  }
> = {
  fr: {
    intro:
      "Le capital humain est la première richesse d'une organisation. BEGO intervient à travers l'Afrique de l'Ouest, en particulier au Togo, et invite les professionnels à rejoindre son équipe.",
    reasons: [
      "Des missions à fort impact en agriculture, entrepreneuriat, sécurité alimentaire, gouvernance et innovation sociale",
      "Une équipe pluridisciplinaire d'experts",
      "Un développement professionnel continu, par la formation et le mentorat",
      "Des valeurs fortes : intégrité, responsabilité, excellence et innovation",
    ],
    process: [
      { step: "1", title: "Accusé de réception", description: "Confirmation de votre candidature sous 48 heures." },
      { step: "2", title: "Présélection", description: "Analyse du profil et de l'expérience par l'équipe RH." },
      { step: "3", title: "Entretien", description: "Entretien en présentiel ou en visioconférence." },
      { step: "4", title: "Décision finale", description: "Notification de la décision finale." },
    ],
    diversity:
      "BEGO accueille les candidatures de tous horizons, sans distinction de genre, d'âge, d'ethnicité, de handicap ou de toute autre caractéristique personnelle, dans une volonté de construire un environnement de travail inclusif.",
    applicationNote:
      "Candidatures spontanées à envoyer à l'adresse ci-dessous, avec pour objet « Candidature spontanée », accompagnées d'un CV actualisé et d'une lettre de motivation.",
    closing:
      "Rejoindre BEGO, c'est contribuer à construire des solutions locales et durables face aux défis économiques, sociaux et environnementaux de la région.",
    pageKicker: "Rejoignez le cabinet BEGO",
    openPositions: "Offres ouvertes",
    noOpenPositions: "Aucune offre n'est publiée pour le moment. Nous vous invitons à nous transmettre une candidature spontanée.",
    deadline: "Date limite",
    diversityTitle: "Diversité & inclusion",
    spontaneousTitle: "Candidature spontanée",
    spontaneousSubject: "Candidature spontanée",
  },
  en: {
    intro:
      "Human capital is an organization's greatest asset. BEGO operates across West Africa, particularly in Togo, and invites professionals to join its team.",
    reasons: [
      "High-impact assignments in agriculture, entrepreneurship, food security, governance, and social innovation",
      "A multidisciplinary team of experts",
      "Continuous professional development through training and mentorship",
      "Strong values: integrity, accountability, excellence, and innovation",
    ],
    process: [
      { step: "1", title: "Acknowledgement of receipt", description: "Confirmation of your application within 48 hours." },
      { step: "2", title: "Shortlisting", description: "Review of profile and experience by the HR team." },
      { step: "3", title: "Interview", description: "In-person or video-conference interview." },
      { step: "4", title: "Final decision", description: "Notification of the final decision." },
    ],
    diversity:
      "BEGO welcomes applications from all backgrounds, regardless of gender, age, ethnicity, disability, or any other personal characteristic, as part of our commitment to building an inclusive work environment.",
    applicationNote:
      "Unsolicited applications should be sent to the address below, with the subject line \"Spontaneous Application\", along with an updated CV and cover letter.",
    closing:
      "Joining BEGO means helping to build local, sustainable solutions to the region's economic, social, and environmental challenges.",
    pageKicker: "Join Cabinet BEGO",
    openPositions: "Open positions",
    noOpenPositions: "No positions are currently published. We invite you to send us a spontaneous application.",
    deadline: "Deadline",
    diversityTitle: "Diversity & inclusion",
    spontaneousTitle: "Spontaneous application",
    spontaneousSubject: "Spontaneous application",
  },
};

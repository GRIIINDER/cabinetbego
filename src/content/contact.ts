import { Locale } from "./site";

export const contactPage: Record<
  Locale,
  {
    title: string;
    intro: string;
    mapSection: { title: string; text: string; note: string };
    addressSection: {
      title: string;
      physicalAddress: string;
      phone: string;
      email: string;
      postalBox: string;
    };
    hoursSection: { title: string };
    formSection: { title: string; intro: string };
    socialSection: { title: string; intro: string };
    confidentialitySection: { title: string; text: string; policyLink: string };
    mapTitle: string;
    closing: { title: string; text: string };
    formFields: {
      lastName: string;
      firstName: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      submit: string;
      sending: string;
      successTitle: string;
      successText: string;
      genericError: string;
      networkError: string;
    };
  }
> = {
  fr: {
    title: "Contactez-nous",
    intro:
      "Prenons contact ! Le Bureau d'Études et de Gestion des Organisations (BEGO) est à votre disposition pour répondre à toutes vos questions, demandes d'informations ou propositions de collaboration. N'hésitez pas à nous contacter via les coordonnées ci-dessous ou à utiliser le formulaire de contact disponible sur cette page.",
    mapSection: {
      title: "Nous situer sur la carte",
      text: "Pour nous trouver plus facilement, consultez la carte ci-dessous. Notre bureau est situé à Adidogomé – Apédokoin, près de la clinique panafricaine Les Marrons, à Lomé.",
      note: "Cliquez sur la carte pour obtenir un itinéraire ou lancer Google Maps.",
    },
    addressSection: {
      title: "Coordonnées du siège",
      physicalAddress: "Adresse physique",
      phone: "Téléphone",
      email: "E-mail",
      postalBox: "Boîte postale",
    },
    hoursSection: { title: "Horaires d'ouverture" },
    formSection: {
      title: "Formulaire de contact",
      intro:
        "Pour nous envoyer un message directement depuis notre site, veuillez remplir le formulaire ci-dessous. Nous nous engageons à vous répondre dans les plus brefs délais.",
    },
    socialSection: {
      title: "Réseaux sociaux",
      intro: "Suivez-nous sur nos réseaux sociaux pour rester informé de nos actualités, projets et événements.",
    },
    confidentialitySection: {
      title: "Confidentialité",
      text: "Toutes les informations que vous nous transmettez via ce formulaire ou par e-mail sont traitées avec la plus grande confidentialité. Pour en savoir plus sur la manière dont nous protégeons vos données, consultez notre",
      policyLink: "Politique de protection des données personnelles",
    },
    mapTitle: "Localisation du Cabinet BEGO à Lomé",
    closing: {
      title: "Nous sommes à votre écoute !",
      text: "L'équipe de BEGO est à votre disposition pour vous accompagner dans vos projets et répondre à vos besoins en matière d'études, de formations, de coaching et de gestion des organisations. N'hésitez pas à nous contacter, nous serons ravis de vous aider.",
    },
    formFields: {
      lastName: "Nom",
      firstName: "Prénom",
      email: "Adresse e-mail",
      phone: "Numéro de téléphone",
      subject: "Sujet de la demande",
      message: "Message",
      submit: "Envoyer",
      sending: "Envoi en cours…",
      successTitle: "Message envoyé",
      successText: "Merci de nous avoir contactés. Notre équipe reviendra vers vous dans les meilleurs délais.",
      genericError: "Une erreur est survenue.",
      networkError: "Impossible d'envoyer le message. Vérifiez votre connexion.",
    },
  },
  en: {
    title: "Contact us",
    intro:
      "Let's talk! The Organizational Studies and Management Bureau (BEGO) is here to answer all your questions, information requests, or collaboration proposals. Feel free to reach us using the details below or the contact form on this page.",
    mapSection: {
      title: "Find us on the map",
      text: "To find us more easily, check the map below. Our office is located at Adidogomé – Apédokoin, near the Les Marrons pan-African clinic, in Lomé.",
      note: "Click the map to get directions or launch Google Maps.",
    },
    addressSection: {
      title: "Head office details",
      physicalAddress: "Physical address",
      phone: "Phone",
      email: "E-mail",
      postalBox: "P.O. box",
    },
    hoursSection: { title: "Opening hours" },
    formSection: {
      title: "Contact form",
      intro:
        "To send us a message directly from our site, please fill in the form below. We commit to replying as soon as possible.",
    },
    socialSection: {
      title: "Social media",
      intro: "Follow us on social media to stay informed about our news, projects, and events.",
    },
    confidentialitySection: {
      title: "Confidentiality",
      text: "All information you send us through this form or by e-mail is handled with the utmost confidentiality. To learn more about how we protect your data, see our",
      policyLink: "Personal Data Protection Policy",
    },
    mapTitle: "Cabinet BEGO location in Lomé",
    closing: {
      title: "We're listening!",
      text: "The BEGO team is available to support you with your projects and meet your needs in studies, training, coaching, and organizational management. Feel free to contact us, we'll be glad to help.",
    },
    formFields: {
      lastName: "Last name",
      firstName: "First name",
      email: "Email address",
      phone: "Phone number",
      subject: "Subject",
      message: "Message",
      submit: "Send",
      sending: "Sending…",
      successTitle: "Message sent",
      successText: "Thank you for contacting us. Our team will get back to you as soon as possible.",
      genericError: "An error occurred.",
      networkError: "Unable to send the message. Please check your connection.",
    },
  },
};

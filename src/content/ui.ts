import { Locale } from "./site";

export const ui: Record<
  Locale,
  {
    contactCta: string;
    openMenu: string;
    closeMenu: string;
    footerInfos: string;
    copyright: string;
    ctaBandTitle: string;
    ctaBandText: string;
    ctaBandButton: string;
  }
> = {
  fr: {
    contactCta: "Nous contacter",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    footerInfos: "Infos",
    copyright: `© ${new Date().getFullYear()} Cabinet BEGO. Tous droits réservés.`,
    ctaBandTitle: "Parlez-nous de votre projet",
    ctaBandText: "Nous rencontrer pour explorer ensemble les meilleures solutions pour votre organisation.",
    ctaBandButton: "Contactez-nous",
  },
  en: {
    contactCta: "Contact us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    footerInfos: "Info",
    copyright: `© ${new Date().getFullYear()} Cabinet BEGO. All rights reserved.`,
    ctaBandTitle: "Tell us about your project",
    ctaBandText: "Meet with us to explore the best solutions for your organization together.",
    ctaBandButton: "Contact us",
  },
};

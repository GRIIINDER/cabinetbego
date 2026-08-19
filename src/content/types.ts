export interface ContentSection {
  heading?: string;
  paragraphs?: string[];
  itemsTitle?: string;
  items?: string[];
}

export interface InfoPageContent {
  slug: string;
  kicker: string;
  title: string;
  intro?: string;
  sections: ContentSection[];
}

export interface LandingCard {
  title: string;
  description: string;
  href: string;
}

export interface LandingContent {
  kicker: string;
  title: string;
  intro: string;
  cards: LandingCard[];
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

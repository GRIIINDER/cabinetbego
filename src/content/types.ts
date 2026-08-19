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

export interface LandingContent {
  kicker: string;
  title: string;
  intro: string;
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

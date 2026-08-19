import { Locale } from "./site";

export const home: Record<Locale, {
  hero: {
    kicker: string;
    title: string;
    lead: string;
    links: { label: string; href: string }[];
  };
  intro: { title: string; lead: string };
  services: { title: string; description: string; href: string }[];
  domainsIntro: { title: string; lead: string };
  domains: { title: string; description: string; href: string }[];
  cta: { title: string; lead: string; buttonLabel: string; href: string };
  newsIntro: { lead: string; buttonLabel: string; href: string };
  servicesKicker: string;
  moreLink: string;
  domainsHeading: string;
  discoverLink: string;
  newsKicker: string;
  essentialsBadge: string;
  essentialsLine: string;
}> = {
  fr: {
    hero: {
      kicker: "BEGO – Bureau d'Études et de Gestion des Organisations",
      title: "Compétence, confidentialité, coopération.",
      lead: "Le Bureau d'Études et de Gestion des Organisations (BEGO) est une société qui offre des services d'études, de formations, de coaching, de gestion d'entreprises et des organisations à travers ses départements spécialisés. BEGO offre ses compétences dans les domaines du management des organisations, de l'entrepreneuriat, de l'agro-industrie, de la sécurité alimentaire et nutritionnelle, de l'agro-sylvo-pastoralisme, etc.",
      links: [
        { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
        { label: "Nos équipes", href: "/qui-sommes-nous/equipe" },
        { label: "Nos projets", href: "/references/projets" },
      ],
    },
    intro: {
      title: "Des services sur mesure, à chaque étape de vos projets",
      lead: "À BEGO, nous soutenons les entreprises, instituts et organisations dans l'accomplissement de leurs projets en leur offrant des services sur mesure et spécifiques à leurs exigences. Nos services se concentrent sur trois axes principaux, enrichis par des offres sur mesure.",
    },
    services: [
      {
        title: "Études",
        description:
          "Le Bureau d'Études et de Gestion des Organisations (BEGO) mène des recherches multisectorielles afin de guider les stratégies de développement, consolider les politiques publiques et soutenir les projets privés et communautaires. Toutes les recherches menées par BEGO s'appuient sur une méthodologie stricte, participative et ajustée aux circonstances du terrain.",
        href: "/services/etudes",
      },
      {
        title: "Suivis & évaluations",
        description:
          "L'évaluation et le suivi représentent des instruments cruciaux pour assurer l'efficacité et la pérennité des programmes et projets de développement. BEGO guide ses clients dans l'instauration de systèmes d'évaluation efficaces, facilitant l'analyse des performances et l'amélioration des impacts des initiatives déployées.",
        href: "/services/suivis-evaluations",
      },
      {
        title: "Formations & coachings",
        description:
          "Selon BEGO, l'amélioration des compétences est un outil crucial pour le succès des entreprises, des organisations et des entrepreneurs. C'est pour cette raison que nous offrons des formations pratiques et des séances de mentorat personnalisées en fonction des nécessités de nos clients, en privilégiant des méthodes avant-gardistes et interactives.",
        href: "/services/formations-coachings",
      },
    ],
    domainsIntro: {
      title: "Nos domaines de compétence",
      lead: "À BEGO, nous mettons notre savoir-faire au profit des entreprises, institutions et organisations pour relever efficacement les enjeux du développement durable en Afrique de l'Ouest. Nos domaines d'expertise reposent sur quatre axes stratégiques qui sont à la fois complémentaires et ancrés dans les réalités du terrain.",
    },
    domains: [
      {
        title: "Management des organisations",
        description:
          "À BEGO, nous soutenons les organisations, les entreprises et les institutions dans l'optimisation de leur fonctionnement, leur gouvernance et leur performance générale. Avec une expertise confirmée, notre cabinet offre son intervention à divers échelons de la gestion organisationnelle, en suggérant des solutions sur mesure et pérennes.",
        href: "/domaines/management-des-organisations",
      },
      {
        title: "Analyse & développement des chaînes de valeur",
        description:
          "Le cabinet BEGO concentre ses actions sur l'optimisation des chaînes de valeur dans les secteurs agricole, agroalimentaire et animal. En utilisant une expertise approfondie et des approches participatives, nous soutenons les intervenants à tous les niveaux, de la production à la vente, afin d'améliorer la compétitivité, l'inclusion et la durabilité des chaînes de valeur.",
        href: "/domaines/chaines-de-valeur",
      },
      {
        title: "Évaluation de genre de projets & programmes de développement",
        description:
          "À BEGO, nous considérons l'intégration du genre comme un outil crucial pour la transformation sociale et l'amélioration de l'impact des projets de développement. Nous assistons nos collaborateurs dans l'évaluation, la conception et la réalisation de projets qui sont sensibles au genre, justes et inclusifs.",
        href: "/domaines/evaluation-genre",
      },
      {
        title: "Plaidoyer",
        description:
          "Le BEGO est fortement impliqué dans le plaidoyer visant à favoriser la mutation des systèmes agricoles, économiques et sociaux en Afrique de l'Ouest. Nous nous efforçons d'influer sur les politiques publiques, les pratiques institutionnelles et les comportements collectifs par nos initiatives dans le but de favoriser un développement équitable, durable et inclusif.",
        href: "/domaines/plaidoyer",
      },
    ],
    cta: {
      title: "Parlez-nous de votre projet !",
      lead: "Vous souhaitez discuter de votre idée et de ses objectifs ? En savoir plus sur Cabinet BEGO et nos domaines d'expertise ? Nous rencontrer pour explorer ensemble les meilleures solutions ?",
      buttonLabel: "Contactez-nous",
      href: "/contact",
    },
    newsIntro: {
      lead: "Le Bureau d'Études et de Gestion des Organisations (BEGO), acteur majeur du développement durable en Afrique de l'Ouest, vous présente ici les actualités récentes de ses interventions. Formations, vérifications, soutiens techniques, analyses de marché... Restez informé de l'avancement de nos projets et des effets qu'ils produisent sur le terrain.",
      buttonLabel: "Toutes nos news",
      href: "/news",
    },
    servicesKicker: "Nos services",
    moreLink: "En savoir plus",
    domainsHeading: "Quatre axes stratégiques, ancrés dans le terrain",
    discoverLink: "Découvrir",
    newsKicker: "Actualités",
    essentialsBadge: "Cabinet BEGO, l'essentiel",
    essentialsLine: "Compétence, confidentialité, coopération : trois piliers pour une gestion efficace des organisations.",
  },
  en: {
    hero: {
      kicker: "BEGO – Organizational Studies and Management Bureau",
      title: "Competence, confidentiality, cooperation.",
      lead: "The Organizational Studies and Management Bureau (BEGO) is a company that provides studies, training, coaching, and business and organizational management services through its specialized departments. BEGO offers expertise in organizational management, entrepreneurship, agro-industry, food and nutrition security, agro-sylvo-pastoralism, and more.",
      links: [
        { label: "About us", href: "/qui-sommes-nous" },
        { label: "Our team", href: "/qui-sommes-nous/equipe" },
        { label: "Our projects", href: "/references/projets" },
      ],
    },
    intro: {
      title: "Tailored services, at every stage of your projects",
      lead: "At BEGO, we support businesses, institutes, and organizations in achieving their projects by offering tailored services specific to their requirements. Our services focus on three main areas, enriched by custom offerings.",
    },
    services: [
      {
        title: "Studies",
        description:
          "The Organizational Studies and Management Bureau (BEGO) conducts multi-sector research to guide development strategies, strengthen public policy, and support private and community projects. All research carried out by BEGO relies on a rigorous, participatory methodology adapted to field conditions.",
        href: "/services/etudes",
      },
      {
        title: "Monitoring & evaluations",
        description:
          "Evaluation and monitoring are crucial tools for ensuring the effectiveness and sustainability of development programs and projects. BEGO guides its clients in establishing effective evaluation systems, facilitating performance analysis and improving the impact of the initiatives deployed.",
        href: "/services/suivis-evaluations",
      },
      {
        title: "Training & coaching",
        description:
          "According to BEGO, skills improvement is a crucial tool for the success of businesses, organizations, and entrepreneurs. That is why we offer practical training and personalized mentoring sessions tailored to our clients' needs, favoring forward-thinking and interactive methods.",
        href: "/services/formations-coachings",
      },
    ],
    domainsIntro: {
      title: "Our areas of expertise",
      lead: "At BEGO, we put our know-how to work for businesses, institutions, and organizations to effectively address sustainable development challenges in West Africa. Our areas of expertise rest on four strategic pillars that are both complementary and rooted in field realities.",
    },
    domains: [
      {
        title: "Organizational management",
        description:
          "At BEGO, we support organizations, businesses, and institutions in optimizing their operations, governance, and overall performance. With proven expertise, our firm intervenes at various levels of organizational management, suggesting tailored and sustainable solutions.",
        href: "/domaines/management-des-organisations",
      },
      {
        title: "Value chain analysis & development",
        description:
          "Cabinet BEGO focuses its actions on optimizing value chains in the agricultural, agri-food, and livestock sectors. Using in-depth expertise and participatory approaches, we support stakeholders at every level, from production to sale, to improve the competitiveness, inclusiveness, and sustainability of value chains.",
        href: "/domaines/chaines-de-valeur",
      },
      {
        title: "Gender evaluation of development projects & programmes",
        description:
          "At BEGO, we see gender mainstreaming as a crucial tool for social transformation and improving the impact of development projects. We assist our partners in evaluating, designing, and implementing projects that are gender-sensitive, fair, and inclusive.",
        href: "/domaines/evaluation-genre",
      },
      {
        title: "Advocacy",
        description:
          "BEGO is heavily involved in advocacy aimed at fostering the transformation of agricultural, economic, and social systems in West Africa. We strive to influence public policy, institutional practices, and collective behavior through our initiatives, with the goal of fostering fair, sustainable, and inclusive development.",
        href: "/domaines/plaidoyer",
      },
    ],
    cta: {
      title: "Tell us about your project!",
      lead: "Want to discuss your idea and its goals? Learn more about Cabinet BEGO and our areas of expertise? Meet with us to explore the best solutions together?",
      buttonLabel: "Contact us",
      href: "/contact",
    },
    newsIntro: {
      lead: "The Organizational Studies and Management Bureau (BEGO), a major player in sustainable development in West Africa, presents its recent activity here. Training, monitoring, technical support, market analyses... Stay informed of the progress of our projects and their effects on the ground.",
      buttonLabel: "All our news",
      href: "/news",
    },
    servicesKicker: "Our services",
    moreLink: "Learn more",
    domainsHeading: "Four strategic pillars, rooted in the field",
    discoverLink: "Discover",
    newsKicker: "News",
    essentialsBadge: "Cabinet BEGO, in brief",
    essentialsLine: "Competence, confidentiality, cooperation: three pillars for effective organizational management.",
  },
};

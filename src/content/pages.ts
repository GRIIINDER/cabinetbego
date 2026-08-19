import { InfoPageContent } from "./types";

export const infoPages: Record<string, InfoPageContent> = {
  "vision-mission-valeurs": {
    slug: "vision-mission-valeurs",
    kicker: "Qui sommes-nous",
    title: "Vision, mission, valeurs",
    intro:
      "Chez BEGO, nous sommes guidés par une vision ambitieuse, une mission claire et des valeurs fortes. Ces principes fondamentaux nous permettent d'accompagner efficacement nos clients et partenaires dans leurs projets, en apportant des solutions adaptées et innovantes.",
    sections: [
      {
        heading: "Notre vision",
        paragraphs: [
          "« Nous croyons en un monde où la compétence, la coopération et la confidentialité sont les piliers d'une gestion efficace des organisations. »",
          "« Axée sur le client pour lui apporter la meilleure expérience de prestation de services. »",
          "Notre objectif est d'être un référent en gestion d'organisations et en développement des chaînes de valeur en Afrique de l'Ouest, en fournissant des services de qualité et en innovant constamment pour répondre aux défis de nos clients.",
        ],
      },
      {
        heading: "Notre mission",
        paragraphs: [
          "Chez BEGO, nous nous engageons à fournir des services sur mesure pour aider nos clients à atteindre leurs objectifs stratégiques.",
          "« Au service de la clientèle » : nous offrons des prestations adaptées aux besoins spécifiques de chaque organisation, entreprise ou institution publique.",
        ],
        itemsTitle: "Nous intervenons principalement dans :",
        items: [
          "Les études et analyses stratégiques, pour une meilleure compréhension des défis et opportunités",
          "La formation et le coaching, pour renforcer les capacités des professionnels et des entrepreneurs",
          "La gestion et l'optimisation des organisations, pour garantir leur efficacité et leur pérennité",
          "L'accompagnement des entreprises et institutions, en apportant des solutions concrètes pour un développement durable et inclusif",
        ],
      },
      {
        heading: "Nos valeurs",
        items: [
          "Valeur client – Nos solutions sont pensées pour répondre aux besoins spécifiques de chaque client",
          "Expertise – Une équipe qualifiée avec une maîtrise approfondie de nos domaines d'intervention",
          "Créativité et innovation – Une approche proactive pour proposer des solutions adaptées aux défis actuels",
          "Excellence et responsabilité – Une exigence de rigueur et d'intégrité dans toutes nos missions",
          "Recherche de la perfection – Un engagement constant pour améliorer nos méthodes et résultats",
        ],
      },
    ],
  },

  "recherche-developpement": {
    slug: "recherche-developpement",
    kicker: "Qui sommes-nous",
    title: "Recherche & développement",
    intro:
      "Chez BEGO, la Recherche & Développement est au cœur de notre stratégie pour proposer des solutions innovantes, adaptées aux réalités locales, et fondées sur des données concrètes.",
    sections: [
      {
        itemsTitle: "Nos objectifs en R&D",
        items: [
          "Identifier et analyser les défis structurels du développement en Afrique de l'Ouest",
          "Concevoir des modèles d'intervention innovants dans l'agro-industrie, le management organisationnel, l'entrepreneuriat et le genre",
          "Produire des outils d'aide à la décision fondés sur des données de terrain fiables",
          "Renforcer les capacités locales via des recherches appliquées et des formations",
        ],
      },
      {
        itemsTitle: "Nos domaines de recherche",
        items: [
          "Chaînes de valeur agricoles et agroalimentaires",
          "Évaluation des impacts sociaux, économiques et environnementaux",
          "Approche genre et inclusion économique",
          "Entrepreneuriat rural et développement des TPME",
          "Agroécologie et sécurité alimentaire",
          "Planification stratégique territoriale",
        ],
      },
      {
        heading: "Projets récents",
        paragraphs: [
          "Études sur les filières apiculture, sésame et légumes, audit Genre & Énergie, étude de marché Bia Laafia, agriculture contractuelle, valorisation de produits agroécologiques.",
        ],
      },
      {
        heading: "Nos partenaires",
        paragraphs: ["GIZ, BAD, CRS, FNAFPP, ANPGF, TFO Canada, REJEPPAT."],
      },
    ],
  },

  "engagements-politiques": {
    slug: "engagements-politiques",
    kicker: "Qui sommes-nous",
    title: "Engagements & politiques",
    intro:
      "Chez BEGO, nous plaçons la transparence, l'excellence et la responsabilité au cœur de nos actions.",
    sections: [
      {
        heading: "Nos engagements",
        paragraphs: ["La firme s'engage à fournir des services de haute qualité basés sur quatre principes :"],
        items: [
          "Confidentialité : la protection des données et des informations de nos partenaires est une priorité.",
          "Intégrité & éthique : nous garantissons des pratiques de travail conformes aux normes les plus strictes.",
          "Expertise & innovation : nous adoptons des approches modernes et adaptées aux défis actuels.",
          "Responsabilité sociale et environnementale : nous intégrons des principes de développement durable dans nos interventions.",
        ],
      },
      {
        heading: "Nos politiques",
        items: [
          "Politique de genre : promotion de l'égalité et intégration du genre",
          "Politique environnementale : minimiser l'empreinte écologique",
          "Politique d'égalité et de diversité : environnement inclusif sans discrimination",
          "Politique de qualité : amélioration continue avec contrôles rigoureux",
          "Politique de lutte contre la fraude et la corruption : tolérance zéro",
          "Politique de santé & sécurité au travail : normes strictes de prévention",
        ],
      },
    ],
  },

  etudes: {
    slug: "etudes",
    kicker: "Services",
    title: "Études",
    intro:
      "Le Bureau d'Études et de Gestion des Organisations (BEGO) réalise des études multisectorielles pour orienter les stratégies de développement, renforcer les politiques publiques et accompagner les initiatives privées et communautaires. Toutes les recherches menées par BEGO s'appuient sur une méthodologie stricte, participative et adaptée aux réalités du terrain.",
    sections: [
      {
        itemsTitle: "Nos domaines d'intervention",
        items: [
          "Études de faisabilité (technique, financière, institutionnelle, environnementale)",
          "Études de marché : analyse de l'offre, de la demande, de la distribution et des opportunités économiques",
          "Études de référence (baseline) pour la collecte de données initiales",
          "Évaluations d'impact sur les dimensions économique, sociale, environnementale et genre",
          "Études institutionnelles : diagnostics organisationnels et développement structurel",
        ],
      },
      {
        heading: "Notre méthodologie",
        paragraphs: [
          "Nous combinons enquêtes quantitatives et qualitatives, outils de cartographie participative, plateformes de collecte de données numériques et cadres d'analyse stratégique tels que le SWOT et le PESTEL.",
        ],
      },
      {
        heading: "Exemples de missions",
        paragraphs: [
          "Étude de marché pour Bia Laafia, études de faisabilité pour des opérateurs locaux, évaluations d'impact de l'agriculture contractuelle, audit Genre & Énergie dans le secteur électrique togolais.",
        ],
      },
    ],
  },

  "suivis-evaluations": {
    slug: "suivis-evaluations",
    kicker: "Services",
    title: "Suivis & évaluations",
    intro:
      "Le suivi et l'évaluation sont des outils essentiels pour garantir l'efficacité et la durabilité des projets et programmes de développement. BEGO accompagne ses clients dans la mise en place de systèmes d'évaluation performants.",
    sections: [
      {
        itemsTitle: "Nos objectifs",
        items: [
          "Assurer un suivi rigoureux pour une meilleure gestion des projets",
          "Identifier les forces et faiblesses des programmes pour des améliorations continues",
          "Évaluer l'impact et l'efficacité des interventions pour garantir leur pertinence",
          "Fournir des recommandations stratégiques basées sur des analyses objectives",
        ],
      },
      {
        heading: "Suivi-évaluation des projets et programmes de développement",
        items: [
          "Développement d'indicateurs de performance et de cadre logique",
          "Suivi de l'exécution et des résultats en temps réel",
          "Rapports d'évaluation intermédiaires et finaux",
        ],
      },
      {
        heading: "Audits et diagnostics organisationnels",
        items: [
          "Analyse des structures et processus internes",
          "Recommandations pour l'optimisation de la gestion",
          "Évaluation des risques",
        ],
      },
      {
        heading: "Évaluation de genre dans les projets",
        items: [
          "Intégration de la dimension genre",
          "Analyse des impacts sur l'inclusion et l'égalité",
          "Accompagnement dans l'application des principes d'équité",
        ],
      },
      {
        heading: "Élaboration de rapports d'évaluation",
        items: [
          "Rapports pour bailleurs de fonds",
          "Études d'impact et évaluations ex post",
          "Plans de capitalisation des expériences",
        ],
      },
    ],
  },

  "formations-coachings": {
    slug: "formations-coachings",
    kicker: "Services",
    title: "Formations & coachings",
    intro:
      "Chez BEGO, nous croyons que le renforcement des capacités est un levier essentiel pour la réussite des entreprises, des organisations et des entrepreneurs.",
    sections: [
      {
        itemsTitle: "Nos objectifs",
        items: [
          "Accompagner les professionnels dans le développement des compétences",
          "Renforcer les capacités en gestion, stratégie et leadership",
          "Offrir des formations adaptées aux réalités du terrain",
          "Assurer un suivi post-formation",
        ],
      },
      {
        heading: "Gestion et stratégie d'entreprise",
        paragraphs: ["Plans d'affaires, gestion financière, leadership."],
      },
      {
        heading: "Gestion de projets & organisations",
        paragraphs: ["Planification, management, gestion des risques."],
      },
      {
        heading: "Chaînes de valeur agricole & agroalimentaire",
        paragraphs: ["Production, transformation, commercialisation."],
      },
      {
        heading: "Marketing, communication & négociation",
        paragraphs: ["Vente, négociation, stratégies digitales."],
      },
      {
        heading: "Égalité de genre & inclusion sociale",
        paragraphs: ["Intégration du genre, sensibilisation, gestion équitable des ressources humaines."],
      },
    ],
  },

  "management-des-organisations": {
    slug: "management-des-organisations",
    kicker: "Domaines",
    title: "Management des organisations",
    intro:
      "Chez BEGO, nous accompagnons les organisations, entreprises et institutions dans l'amélioration de leur fonctionnement, de leur gouvernance et de leur performance globale.",
    sections: [
      {
        itemsTitle: "Nos domaines d'intervention",
        items: [
          "Audits organisationnels",
          "Structuration des organisations",
          "Développement de pépinières d'entreprises",
          "Appui à la négociation et à la contractualisation",
          "Marketing & développement commercial",
          "Leadership & gouvernance",
          "Planification stratégique et opérationnelle",
        ],
      },
      {
        itemsTitle: "Nos atouts",
        items: [
          "Équipe pluridisciplinaire permanente",
          "Réseau de consultants externes mobilisable à l'échelle du Togo et de l'Afrique de l'Ouest",
          "Une approche centrée sur le client, intégrant qualité, innovation, éthique et performance",
        ],
      },
      {
        itemsTitle: "Pourquoi choisir BEGO ?",
        items: [
          "Solutions sur mesure",
          "Méthodologies éprouvées alignées aux standards internationaux",
          "Transfert de compétences durable au sein des équipes",
        ],
      },
    ],
  },

  "chaines-de-valeur": {
    slug: "chaines-de-valeur",
    kicker: "Domaines",
    title: "Analyse & développement des chaînes de valeur",
    intro:
      "L'optimisation des chaînes de valeur agricoles, agroalimentaires et animales est au cœur des interventions du cabinet BEGO. Grâce à une expertise pointue et des méthodologies participatives, nous appuyons les acteurs à chaque maillon, de la production à la commercialisation, pour renforcer la compétitivité, l'inclusivité et la durabilité des filières.",
    sections: [
      {
        itemsTitle: "Nos services",
        items: [
          "Analyse des chaînes de valeur : cartographie, diagnostic des maillons, identification des contraintes et opportunités",
          "Modélisation économique : élaboration de modèles inclusifs, viables et orientés marché",
          "Appui à la production animale et végétale : formations en aviculture, apiculture, élevage",
          "Développement de solutions de transformation : valorisation des produits agricoles",
          "Renforcement des capacités : formations des producteurs et transformateurs",
          "Stratégies d'insertion commerciale : facilitation de l'accès au marché et labellisation",
          "Promotion de l'agriculture contractuelle : appui à la mise en relation équitable",
        ],
      },
      {
        itemsTitle: "Expertises techniques",
        items: [
          "Approche agroéconomique basée sur les données de terrain",
          "Intégration genre, climat et durabilité",
          "Collaboration avec des partenaires nationaux et internationaux",
        ],
      },
      {
        itemsTitle: "Valeur ajoutée",
        items: [
          "Approche terrain participative",
          "Solutions adaptées aux contextes locaux",
          "Vision intégrée des enjeux sociaux, économiques et environnementaux",
        ],
      },
    ],
  },

  "evaluation-genre": {
    slug: "evaluation-genre",
    kicker: "Domaines",
    title: "Évaluation de genre de projets & programmes de développement",
    intro:
      "À BEGO, nous considérons l'intégration du genre comme un levier essentiel de la transformation sociale et de l'amélioration de l'impact des projets de développement. Nous assistons nos partenaires dans l'évaluation, la conception et la réalisation de projets sensibles au genre, justes et inclusifs.",
    sections: [
      {
        itemsTitle: "Nos objectifs",
        items: [
          "Identifier et corriger les inégalités structurelles de genre dans les projets et programmes",
          "Promouvoir une participation équilibrée des femmes, des hommes, des jeunes et des groupes marginalisés",
          "Accompagner les parties prenantes dans l'intégration du genre, de la planification à l'évaluation finale",
        ],
      },
      {
        itemsTitle: "Nos services",
        items: [
          "Audits de genre institutionnels et sectoriels",
          "Évaluations de genre (ex ante, à mi-parcours, ex post)",
          "Analyse des impacts différenciés sur les femmes et les hommes",
          "Conception de plans d'action genre intégrés",
          "Formations genre pour les parties prenantes",
          "Développement d'outils de suivi et d'indicateurs de genre",
        ],
      },
      {
        heading: "Notre méthodologie",
        paragraphs: [
          "Notre approche participative et intersectionnelle permet d'engager les bénéficiaires finaux, d'intégrer les normes socioculturelles locales, de produire des recommandations concrètes et de renforcer les capacités institutionnelles.",
        ],
      },
      {
        itemsTitle: "Pourquoi choisir BEGO ?",
        items: [
          "Spécialistes du genre et du développement social",
          "Expérience étendue en agriculture, énergie, entrepreneuriat et gouvernance",
          "Connaissance des standards internationaux (ONU Femmes, BAD, GIZ)",
          "Capacité à livrer des rapports actionnables et des stratégies inclusives",
        ],
      },
    ],
  },

  plaidoyer: {
    slug: "plaidoyer",
    kicker: "Domaines",
    title: "Plaidoyer et gestion communautaire",
    intro:
      "Le Bureau d'Études et de Gestion des Organisations (BEGO) s'engage activement dans le plaidoyer pour soutenir la transformation des systèmes agricoles, économiques et sociaux en Afrique de l'Ouest, en s'efforçant d'influer sur les politiques publiques, les pratiques institutionnelles et les comportements collectifs.",
    sections: [
      {
        itemsTitle: "Objectifs de notre plaidoyer",
        items: [
          "Faire en sorte que les préoccupations des acteurs locaux soient effectivement prises en compte",
          "Influencer les politiques de développement à partir de données concrètes et d'observations de terrain",
          "Améliorer les cadres législatifs, économiques et sociaux",
          "Renforcer la représentation des organisations de producteurs et des petites entreprises",
        ],
      },
      {
        itemsTitle: "Nos actions clés",
        items: [
          "Conduite d'études de terrain et de diagnostics participatifs",
          "Mobilisation des parties prenantes sur des sujets critiques",
          "Élaboration de notes de politique (policy briefs) pour les décideurs",
          "Organisation de dialogues multi-acteurs et de forums régionaux",
          "Renforcement des capacités de la société civile et des organisations de producteurs",
        ],
      },
      {
        heading: "Notre approche",
        paragraphs: [
          "Nos activités de plaidoyer s'appuient sur une approche collaborative, fondée sur les preuves et orientée vers l'impact. Nous croyons en une transformation systémique portée par les communautés locales, aux côtés des acteurs publics, privés et de la société civile.",
        ],
      },
    ],
  },

  agrometeorologie: {
    slug: "agrometeorologie",
    kicker: "Ressources",
    title: "Agrométéorologie",
    intro:
      "BEGO publie régulièrement des bulletins agrométéorologiques et climat-santé pour appuyer la prise de décision des acteurs agricoles en Afrique de l'Ouest.",
    sections: [
      {
        heading: "Bulletins disponibles",
        items: ["Bulletin trimestriel n° 32 : avril–mai–juin 2026", "Bulletin Climat-Santé : avril 2026"],
      },
    ],
  },

  "intelligence-economique": {
    slug: "intelligence-economique",
    kicker: "Ressources",
    title: "Intelligence économique",
    intro:
      "Cette rubrique rassemble les analyses et ressources de BEGO en matière d'intelligence économique pour l'Afrique de l'Ouest.",
    sections: [
      {
        paragraphs: [
          "Contenu en cours de publication. Contactez-nous pour toute demande spécifique d'analyse ou de veille économique.",
        ],
      },
    ],
  },

  autres: {
    slug: "autres",
    kicker: "Ressources",
    title: "Autres ressources",
    intro: "D'autres ressources et publications de BEGO seront prochainement disponibles dans cette rubrique.",
    sections: [
      {
        paragraphs: ["Contactez-nous pour obtenir une ressource spécifique ou pour être informé des prochaines publications."],
      },
    ],
  },

  "mentions-legales": {
    slug: "mentions-legales",
    kicker: "Infos",
    title: "Mentions légales",
    sections: [
      {
        heading: "Informations générales",
        paragraphs: [
          "Le site cabinetbego.com appartient au Bureau d'Études et de Gestion des Organisations (BEGO), basé à Adidogomé – Apédokoin, Lomé, Togo.",
        ],
      },
      {
        heading: "Directeur de publication",
        paragraphs: ["M. TOUNOUVI Komi Mawuko, représentant légal de BEGO, dirige la publication."],
      },
      {
        heading: "Hébergement",
        paragraphs: ["Le site est hébergé par Vercel Inc."],
      },
      {
        heading: "Propriété intellectuelle",
        paragraphs: [
          "Tous les contenus du site demeurent la propriété exclusive de BEGO ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable est strictement interdite.",
        ],
      },
      {
        heading: "Protection des données",
        paragraphs: [
          "Les données personnelles collectées via les formulaires sont utilisées uniquement pour les services de BEGO et ne seront transmises à aucun tiers sans consentement explicite.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: ["Le site utilise des cookies pour optimiser l'expérience utilisateur et générer des statistiques."],
      },
      {
        heading: "Limitation de responsabilité",
        paragraphs: ["BEGO décline toute responsabilité concernant les erreurs ou omissions dans les informations publiées."],
      },
      {
        heading: "Droit applicable",
        paragraphs: [
          "Les présentes mentions légales sont régies par le droit togolais. Les litiges relèvent de la juridiction de Lomé.",
        ],
      },
    ],
  },

  confidentialite: {
    slug: "confidentialite",
    kicker: "Infos",
    title: "Politique de protection des données personnelles",
    intro:
      "Le Bureau d'Études et de Gestion des Organisations (BEGO), éditeur du site cabinetbego.com, attache une grande importance à la protection de vos données personnelles.",
    sections: [
      {
        heading: "Données collectées",
        paragraphs: [
          "L'entreprise recueille les coordonnées, informations professionnelles, données de navigation et renseignements fournis via les formulaires du site.",
        ],
      },
      {
        heading: "Finalités du traitement",
        items: [
          "Répondre à vos demandes d'information ou de contact",
          "Vous fournir les services que vous avez sollicités",
          "Vous informer des actualités de BEGO",
        ],
      },
      {
        heading: "Fondement légal",
        paragraphs: [
          "Le traitement repose sur le consentement explicite, l'exécution contractuelle, les obligations légales et les intérêts légitimes de BEGO.",
        ],
      },
      {
        heading: "Destinataires",
        paragraphs: [
          "Les données sont traitées en interne et peuvent être communiquées aux prestataires de services de BEGO ainsi qu'aux autorités si la loi l'exige.",
        ],
      },
      {
        heading: "Transferts internationaux",
        paragraphs: [
          "Les données demeurent principalement au Togo, avec des garanties appropriées pour tout transfert en dehors de l'Union africaine.",
        ],
      },
      {
        heading: "Conservation",
        paragraphs: ["Les données de contact sont conservées pendant 3 ans à compter de votre dernière interaction avec BEGO."],
      },
      {
        heading: "Vos droits",
        paragraphs: [
          "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition sur vos données personnelles.",
        ],
      },
      {
        heading: "Sécurité",
        paragraphs: ["Chiffrement, pare-feu et formation du personnel constituent nos principales mesures de protection."],
      },
      {
        heading: "Cookies",
        paragraphs: ["Le site utilise des cookies pour la gestion des préférences, l'analyse d'audience et la personnalisation du contenu."],
      },
    ],
  },
};

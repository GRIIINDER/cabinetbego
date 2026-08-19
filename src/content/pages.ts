import { InfoPageContent } from "./types";
import { Locale } from "./site";

export const infoPages: Record<Locale, Record<string, InfoPageContent>> = {
  fr: {
    "vision-mission-valeurs": {
      slug: "vision-mission-valeurs",
      kicker: "Qui sommes-nous",
      title: "Mission, vision, valeurs",
      intro:
        "Chez BEGO (Bureau d'Études et de Gestion des Organisations), nous sommes guidés par une vision ambitieuse, une mission claire et des valeurs fortes. Ces principes fondamentaux nous permettent d'accompagner efficacement nos clients et partenaires dans leurs projets, en apportant des solutions adaptées et innovantes.",
      sections: [
        {
          heading: "Notre vision",
          paragraphs: [
            "Nous croyons en un monde où la compétence, la coopération et la confidentialité sont les piliers d'une gestion efficace des organisations.",
            "« Axée sur le client pour lui apporter la meilleure expérience de prestation de services. »",
            "Notre objectif est d'être un référent en gestion d'organisations et en développement des chaînes de valeur en Afrique de l'Ouest, en fournissant des services de qualité et en innovant constamment pour répondre aux défis de nos clients.",
          ],
        },
        {
          heading: "Notre mission",
          paragraphs: [
            "Chez BEGO, nous nous engageons à fournir des services sur mesure pour aider nos clients à atteindre leurs objectifs stratégiques.",
            "« Au service de la clientèle » : nous offrons des prestations adaptées aux besoins spécifiques de chaque organisation, entreprise ou institution publique. Nous intervenons principalement dans :",
          ],
          items: [
            "Les études et analyses stratégiques, pour une meilleure compréhension des défis et opportunités.",
            "La formation et le coaching, pour renforcer les capacités des professionnels et des entrepreneurs.",
            "La gestion et l'optimisation des organisations, pour garantir leur efficacité et leur pérennité.",
            "L'accompagnement des entreprises et institutions, en apportant des solutions concrètes pour un développement durable et inclusif.",
          ],
        },
        {
          heading: "Nos valeurs",
          paragraphs: [
            "Nos valeurs sont le fondement de notre engagement. Elles guident nos actions au quotidien et garantissent la qualité de nos services.",
          ],
          items: [
            "Valeur client – Nos solutions sont pensées pour répondre aux besoins spécifiques de chaque client.",
            "Expertise – Une équipe qualifiée avec une maîtrise approfondie de nos domaines d'intervention.",
            "Créativité et innovation – Une approche proactive pour proposer des solutions adaptées aux défis actuels.",
            "Excellence et responsabilité – Une exigence de rigueur et d'intégrité dans toutes nos missions.",
            "Recherche de la perfection – Un engagement constant pour améliorer nos méthodes et résultats.",
          ],
        },
        {
          paragraphs: [
            "Grâce à ces valeurs, BEGO s'impose comme un partenaire fiable et engagé, prêt à relever les défis aux côtés de ses clients et partenaires.",
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
          heading: "Nos objectifs en R&D",
          items: [
            "Identifier et analyser les défis structurels du développement en Afrique de l'Ouest.",
            "Concevoir des modèles d'intervention innovants, applicables dans les domaines de l'agro-industrie, du management organisationnel, de l'entrepreneuriat et du genre.",
            "Produire des outils d'aide à la décision fondés sur des données de terrain fiables (modèles économiques, études de faisabilité, diagnostics participatifs…).",
            "Renforcer les capacités locales à travers des recherches appliquées et des formations basées sur nos résultats d'études.",
          ],
        },
        {
          heading: "Domaines de recherche",
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
          heading: "Quelques projets R&D récents",
          items: [
            "Analyse des modèles économiques dans les chaînes de valeur agricoles : étude sur les filières apiculture, sésame, légumes, mangue, ananas, café, cacao… (Togo – GIZ ProComp).",
            "Audit Genre & Énergie au Togo : diagnostic multisectoriel des inégalités d'accès et de représentation dans le secteur énergétique (Togo – GIZ ProÉnergie).",
            "Étude de marché Bia Laafia : analyse préliminaire sur les opportunités commerciales des produits nutritionnels locaux (Togo – CRS).",
            "Recherche sur l'agriculture contractuelle et SME Loop : évaluation comparative de deux modèles d'accompagnement à l'entrepreneuriat agricole (Togo – GIZ ProComp).",
            "Valorisation des produits agroécologiques : identification des niches de marché pour les jeunes producteurs (Togo – REJEPPAT-RC).",
          ],
        },
        {
          heading: "Nos partenaires R&D",
          paragraphs: ["GIZ, BAD, CRS, FNAFPP, ANPGF, TFO Canada, REJEPPAT, entre autres."],
        },
      ],
    },

    "engagements-politiques": {
      slug: "engagements-politiques",
      kicker: "Qui sommes-nous",
      title: "Engagements & politiques",
      intro: "Chez BEGO, nous plaçons la transparence, l'excellence et la responsabilité au cœur de nos actions.",
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
        "Le Bureau d'Études et de Gestion des Organisations (BEGO) réalise des études multisectorielles pour orienter les stratégies de développement, renforcer les politiques publiques et accompagner les initiatives privées et communautaires. Chaque étude conduite par BEGO repose sur une méthodologie rigoureuse, participative et adaptée aux réalités du terrain.",
      sections: [
        {
          heading: "Nos domaines d'intervention en études",
          paragraphs: ["Nous intervenons dans les domaines suivants :"],
          items: [
            "Études de faisabilité : techniques, financières, institutionnelles et environnementales pour valider la pertinence et la viabilité des projets.",
            "Études de marché : analyse de l'offre, de la demande, des circuits de distribution, et des opportunités économiques locales, nationales ou régionales.",
            "Études de référence / Baselines : collecte et analyse de données initiales pour mesurer l'impact des projets sur les bénéficiaires.",
            "Études d'impact : évaluation des effets d'un programme ou projet sur les dimensions économiques, sociales, environnementales ou de genre.",
            "Études institutionnelles : diagnostics organisationnels, audits fonctionnels, structuration institutionnelle.",
          ],
        },
        {
          heading: "Méthodologie",
          paragraphs: ["Nos études sont conçues pour être participatives, inclusives et orientées résultats. Nous utilisons :"],
          items: [
            "Des enquêtes quantitatives et qualitatives (face-à-face, focus groups, entretiens semi-directifs).",
            "Des outils de cartographie participative et d'analyse des chaînes de valeur.",
            "Des plateformes numériques de collecte de données (KoBoToolbox, ODK…).",
            "Des outils d'analyse stratégique (SWOT, Canvas, PESTEL, etc.).",
          ],
        },
        {
          heading: "Exemples de missions réalisées",
          items: [
            "Étude de marché pour le projet Bia Laafia (CRS – Togo)",
            "Étude de faisabilité des Nouveaux Opérateurs Locaux (BAD – Centrafrique)",
            "Étude d'impact de l'agriculture contractuelle vs SME Loop (GIZ – Togo)",
            "Audit Genre-Énergie dans le secteur de l'électricité au Togo (GIZ – ProÉnergie)",
            "Étude sur la valorisation des produits agroécologiques (REJEPPAT – Togo)",
            "Études économiques sur les filières agricoles prioritaires (GIZ – Togo)",
          ],
        },
        {
          paragraphs: [
            "Vous souhaitez mieux connaître un marché, évaluer la faisabilité d'un projet, ou mesurer les impacts de vos actions ? Faites appel à notre équipe d'experts pluridisciplinaires.",
          ],
        },
      ],
    },

    "suivis-evaluations": {
      slug: "suivis-evaluations",
      kicker: "Services",
      title: "Suivis & évaluations",
      intro:
        "Le suivi et l'évaluation sont des outils essentiels pour garantir l'efficacité et la durabilité des projets et programmes de développement. BEGO accompagne ses clients dans la mise en place de systèmes d'évaluation performants, permettant d'analyser les résultats et d'optimiser les impacts des initiatives mises en œuvre.",
      sections: [
        {
          heading: "Nos objectifs",
          items: [
            "Assurer un suivi rigoureux pour une meilleure gestion des projets.",
            "Identifier les forces et faiblesses des programmes pour des améliorations continues.",
            "Évaluer l'impact et l'efficacité des interventions pour garantir leur pertinence.",
            "Fournir des recommandations stratégiques basées sur des analyses objectives.",
          ],
        },
        {
          heading: "Nos services en suivi & évaluation",
          paragraphs: ["Nous proposons un large éventail de services adaptés aux besoins de nos partenaires :"],
        },
        {
          heading: "1. Suivi-évaluation des projets et programmes de développement",
          items: [
            "Développement d'indicateurs de performance et de cadre logique.",
            "Suivi de l'exécution et des résultats des projets en temps réel.",
            "Rapports d'évaluation intermédiaires et finaux.",
          ],
        },
        {
          heading: "2. Audits et diagnostics organisationnels",
          items: [
            "Analyse des structures et processus internes.",
            "Recommandations pour l'optimisation de la gestion des projets.",
            "Évaluation des risques et proposition de stratégies correctives.",
          ],
        },
        {
          heading: "3. Évaluation de genre dans les projets",
          items: [
            "Intégration de la dimension genre dans les stratégies et plans d'action.",
            "Analyse des impacts des projets sur l'inclusion et l'égalité des sexes.",
            "Accompagnement des organisations dans l'application des principes d'équité.",
          ],
        },
        {
          heading: "4. Élaboration de rapports d'évaluation et recommandations",
          items: [
            "Rapports détaillés pour les bailleurs de fonds et partenaires techniques.",
            "Études d'impact et évaluations ex post des interventions.",
            "Plan de capitalisation des expériences et des meilleures pratiques.",
          ],
        },
      ],
    },

    "formations-coachings": {
      slug: "formations-coachings",
      kicker: "Services",
      title: "Formations & coachings",
      intro:
        "Chez BEGO, nous croyons que le renforcement des capacités est un levier essentiel pour la réussite des entreprises, des organisations et des entrepreneurs. C'est pourquoi nous proposons des formations pratiques et des sessions de coaching adaptées aux besoins de nos clients, en mettant l'accent sur des approches innovantes et interactives.",
      sections: [
        {
          heading: "Nos objectifs",
          items: [
            "Accompagner les professionnels et entrepreneurs dans le développement de leurs compétences.",
            "Renforcer les capacités en gestion, en stratégie et en leadership.",
            "Offrir des formations adaptées aux réalités du terrain et aux besoins des bénéficiaires.",
            "Assurer un suivi post-formation pour une mise en application efficace des acquis.",
          ],
        },
        { heading: "Nos domaines de formation & coaching" },
        {
          heading: "1. Gestion et stratégie d'entreprise",
          items: [
            "Élaboration de plans d'affaires et modèles économiques.",
            "Gestion financière et optimisation des ressources.",
            "Leadership et prise de décision stratégique.",
          ],
        },
        {
          heading: "2. Gestion de projets & organisations",
          items: [
            "Planification, suivi et évaluation des projets.",
            "Management des organisations et structuration des entreprises.",
            "Gestion des risques et amélioration des performances.",
          ],
        },
        {
          heading: "3. Chaînes de valeur agricole & agroalimentaire",
          items: [
            "Techniques modernes de production et de transformation agroalimentaire.",
            "Commercialisation des produits agricoles et optimisation des filières.",
            "Stratégies d'investissement et d'accès aux marchés.",
          ],
        },
        {
          heading: "4. Marketing, communication & négociation",
          items: [
            "Techniques de vente et relation client.",
            "Négociation et contractualisation des partenariats.",
            "Stratégies digitales et visibilité en ligne.",
          ],
        },
        {
          heading: "5. Égalité de genre & inclusion sociale",
          items: [
            "Formation sur l'intégration du genre dans les politiques et programmes.",
            "Sensibilisation et bonnes pratiques en matière d'inclusion sociale.",
            "Outils pour une gestion équitable et inclusive des ressources humaines.",
          ],
        },
      ],
    },

    "management-des-organisations": {
      slug: "management-des-organisations",
      kicker: "Domaines",
      title: "Management des organisations",
      intro:
        "Chez BEGO, nous accompagnons les organisations, entreprises et institutions dans l'amélioration de leur fonctionnement, de leur gouvernance et de leur performance globale. Grâce à une expertise éprouvée, notre cabinet intervient à tous les niveaux du management organisationnel, en proposant des solutions personnalisées et durables.",
      sections: [
        {
          heading: "Nos domaines d'intervention",
          paragraphs: ["Nous proposons une offre complète de services axés sur l'optimisation des structures organisationnelles :"],
          items: [
            "Audits organisationnels : évaluation complète des structures, processus et pratiques internes.",
            "Structuration des organisations : appui à la formalisation des fonctions clés, procédures et organigrammes.",
            "Développement de pépinières d'entreprises : accompagnement des jeunes pousses et startups dans leur structuration.",
            "Appui à la négociation et à la contractualisation : soutien stratégique et juridique aux négociations commerciales ou institutionnelles.",
            "Marketing & développement commercial : définition de stratégies de positionnement et de croissance.",
            "Leadership & gouvernance : formation et coaching des dirigeants et cadres intermédiaires.",
            "Planification stratégique et opérationnelle : élaboration et suivi de plans d'action réalistes et performants.",
          ],
        },
        {
          heading: "Nos atouts",
          items: [
            "Une équipe pluridisciplinaire permanente composée de spécialistes en gestion d'entreprise, analyse financière, évaluation de projets et développement organisationnel.",
            "Un réseau de consultants externes mobilisable à l'échelle du Togo et de l'Afrique de l'Ouest.",
            "Une approche centrée sur le client, intégrant qualité, innovation, éthique et performance.",
          ],
        },
        {
          heading: "Pourquoi choisir BEGO ?",
          paragraphs: ["En choisissant BEGO, vous bénéficiez de :"],
          items: [
            "Solutions sur mesure, adaptées à votre réalité institutionnelle ou entrepreneuriale.",
            "Méthodologies éprouvées, alignées avec les standards internationaux de performance.",
            "Transfert de compétences durable au sein de vos équipes.",
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
          heading: "Nos services dans ce domaine",
          paragraphs: ["L'offre couvre ces dimensions :"],
          items: [
            "Analyse des chaînes de valeur : cartographie, diagnostic des maillons, identification des contraintes et opportunités.",
            "Modélisation économique : élaboration de modèles inclusifs, viables et orientés marché.",
            "Appui à la production animale et végétale : formations en aviculture, apiculture, élevage ovin, caprin.",
            "Développement de solutions de transformation : valorisation des produits agricoles.",
            "Renforcement des capacités : formations des producteurs et transformateurs.",
            "Stratégies d'insertion commerciale : accès au marché, contractualisation, labellisation.",
            "Promotion de l'agriculture contractuelle : mise en relation équitable producteurs-acheteurs.",
          ],
        },
        {
          heading: "Nos expertises techniques",
          items: [
            "Approche agroéconomique basée sur les données de terrain",
            "Intégration des dimensions genre, climat et durabilité",
            "Collaboration avec des partenaires nationaux et internationaux",
          ],
        },
        {
          heading: "Notre valeur ajoutée",
          items: [
            "Approche terrain avec participation active des acteurs locaux",
            "Adaptabilité des solutions aux contextes locaux",
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
        "Chez BEGO, nous intégrons la dimension genre comme un levier essentiel de transformation sociale et d'amélioration de l'impact des projets de développement. Nous aidons nos partenaires à évaluer, concevoir et mettre en œuvre des projets sensibles au genre, équitables et inclusifs.",
      sections: [
        {
          heading: "Objectifs de nos interventions",
          items: [
            "Identifier et corriger les inégalités structurelles entre les sexes dans les projets et programmes.",
            "Promouvoir une participation équilibrée des femmes, des hommes, des jeunes et autres groupes marginalisés.",
            "Accompagner les acteurs dans la prise en compte du genre dès la planification jusqu'à l'évaluation finale des projets.",
          ],
        },
        {
          heading: "Nos services",
          paragraphs: ["Nos prestations en matière d'évaluation de genre comprennent :"],
          items: [
            "Audits genre institutionnels et sectoriels.",
            "Évaluations genre de projets et programmes (ex-ante, mid-term, ex-post).",
            "Analyse des impacts différenciés sur les femmes et les hommes.",
            "Conception de plans d'action genre intégrés.",
            "Formation des parties prenantes sur l'approche genre et l'égalité.",
            "Développement d'outils de suivi et indicateurs de genre.",
          ],
        },
        {
          heading: "Notre méthodologie",
          paragraphs: ["Nous adoptons une approche participative et intersectionnelle qui permet :"],
          items: [
            "D'impliquer les bénéficiaires finaux dans l'analyse.",
            "D'intégrer les normes socioculturelles locales.",
            "De générer des recommandations concrètes et applicables.",
            "De renforcer la capacité institutionnelle en genre des partenaires.",
          ],
        },
        {
          heading: "Pourquoi faire appel à BEGO ?",
          items: [
            "Des experts spécialisés en genre et développement social.",
            "Une forte expérience dans l'agriculture, l'énergie, l'entrepreneuriat et la gouvernance.",
            "Une maîtrise des référentiels internationaux (ONU Femmes, BAD, GIZ, etc.).",
            "Une capacité à livrer des rapports exploitables et des stratégies inclusives.",
          ],
        },
      ],
    },

    plaidoyer: {
      slug: "plaidoyer",
      kicker: "Domaines",
      title: "Plaidoyer et gestion communautaire",
      intro:
        "Le Bureau d'Études et de Gestion des Organisations (BEGO) s'engage activement dans le plaidoyer pour soutenir la transformation des systèmes agricoles, économiques et sociaux en Afrique de l'Ouest. À travers nos actions, nous œuvrons à influencer les politiques publiques, les pratiques institutionnelles et les comportements collectifs afin de promouvoir un développement inclusif, durable et équitable.",
      sections: [
        {
          heading: "Nos objectifs en matière de plaidoyer",
          items: [
            "Promouvoir une prise en compte effective des préoccupations des acteurs locaux, notamment les producteurs, les femmes, les jeunes et les PME.",
            "Influencer les politiques de développement à travers des recommandations fondées sur des données concrètes et des retours terrain.",
            "Contribuer à l'amélioration des cadres législatifs, économiques et sociaux dans nos secteurs d'intervention.",
            "Appuyer la voix des organisations de producteurs, des filières agricoles, et des petites entreprises pour une meilleure représentativité dans les décisions.",
          ],
        },
        {
          itemsTitle: "Nos actions de plaidoyer incluent :",
          items: [
            "Réalisation d'études et d'analyses de terrain pour alimenter les discussions politiques (état des lieux, diagnostics participatifs, etc.).",
            "Mobilisation des parties prenantes autour de thématiques clés (genre, agriculture familiale, contractualisation, accès au financement…).",
            "Élaboration de notes de politique et de documents stratégiques à destination des décideurs.",
            "Organisation de dialogues multi-acteurs, forums, ateliers nationaux et régionaux.",
            "Renforcement des capacités des OSC et OP à défendre leurs intérêts et à formuler des propositions argumentées.",
          ],
        },
        {
          heading: "Notre approche",
          paragraphs: [
            "Nos activités de plaidoyer s'appuient sur une approche collaborative, fondée sur les preuves et orientée vers l'impact. Nous croyons en une transformation systémique portée par les communautés locales, en synergie avec les acteurs publics, privés et de la société civile.",
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
      intro: "Cette rubrique rassemble les analyses et ressources de BEGO en matière d'intelligence économique pour l'Afrique de l'Ouest.",
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
        { paragraphs: ["Contactez-nous pour obtenir une ressource spécifique ou pour être informé des prochaines publications."] },
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
            "Le site internet cabinetbego.com est édité par : Bureau d'Études et de Gestion des Organisations (BEGO)",
            "Siège social : Adidogomé – Apédokoin, près de la clinique panafricaine Les Marrons",
            "Tél. : (+228) 90 35 23 86 / (+228) 99 72 52 85 / (+228) 98 94 37 93",
            "Email : contact@cabinetbego.com",
            "BP : 31044 Lomé – Togo",
          ],
        },
        {
          heading: "Directeur de la publication",
          paragraphs: ["Le directeur de la publication est M. TOUNOUVI Komi Mawko, représentant légal de BEGO."],
        },
        {
          heading: "Hébergement du site",
          paragraphs: ["Le site est hébergé par : Vercel Inc."],
        },
        {
          heading: "Propriété intellectuelle",
          paragraphs: [
            "Tous les contenus présents sur le site cabinetbego.com (textes, images, logos, vidéos, etc.) sont la propriété exclusive de BEGO ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable est strictement interdite et pourra donner lieu à des poursuites judiciaires.",
          ],
        },
        {
          heading: "Protection des données personnelles",
          paragraphs: [
            "Conformément à la législation en vigueur, BEGO s'engage à protéger les données personnelles des utilisateurs du site. Les informations collectées via les formulaires de contact ou d'inscription sont uniquement utilisées dans le cadre des services proposés par BEGO et ne seront en aucun cas transmises à des tiers sans votre consentement explicite.",
            "Pour toute question relative à la protection de vos données, vous pouvez nous contacter à l'adresse suivante : contact@cabinetbego.com",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Le site cabinetbego.com utilise des cookies pour améliorer l'expérience utilisateur. Ces cookies permettent de mémoriser vos préférences et de générer des statistiques de visite. Vous pouvez désactiver les cookies via les paramètres de votre navigateur, mais cela pourrait affecter certaines fonctionnalités du site.",
          ],
        },
        {
          heading: "Limitation de responsabilité",
          paragraphs: [
            "BEGO met tout en œuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur son site. Cependant, BEGO ne peut garantir l'exhaustivité, la précision ou l'absence de modification par un tiers. En conséquence, BEGO décline toute responsabilité en cas d'erreur, d'omission ou de résultat obtenu par l'utilisation de ces informations.",
          ],
        },
        {
          heading: "Liens externes",
          paragraphs: [
            "Le site cabinetbego.com peut contenir des liens vers des sites externes. BEGO n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur accessibilité ou leur politique de confidentialité.",
          ],
        },
        {
          heading: "Droit applicable et juridiction compétente",
          paragraphs: [
            "Les présentes mentions légales sont régies par le droit togolais. En cas de litige, les tribunaux compétents seront ceux de Lomé, Togo.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Pour toute question ou réclamation concernant les mentions légales, vous pouvez nous contacter à l'adresse suivante : Bureau d'Études et de Gestion des Organisations (BEGO)",
            "Email : contact@cabinetbego.com",
            "Tél. : (+228) 90 35 23 86 / (+228) 99 72 52 85 / (+228) 98 94 37 93",
          ],
        },
      ],
    },

    confidentialite: {
      slug: "confidentialite",
      kicker: "Infos",
      title: "Politique de protection des données personnelles",
      sections: [
        {
          heading: "Introduction",
          paragraphs: [
            "Le Bureau d'Études et de Gestion des Organisations (BEGO), éditeur du site cabinetbego.com, attache une grande importance à la protection de vos données personnelles. Cette politique de protection des données personnelles a pour objectif de vous informer sur la manière dont nous collectons, utilisons, protégeons et conservons vos données personnelles dans le cadre de l'utilisation de notre site internet et de nos services.",
          ],
        },
        {
          heading: "Données personnelles collectées",
          paragraphs: ["Les données personnelles que nous collectons peuvent inclure, mais ne sont pas limitées à :"],
          items: [
            "Vos coordonnées (nom, prénom, adresse email, numéro de téléphone) ;",
            "Vos informations professionnelles (poste, entreprise, secteur d'activité) ;",
            "Les données de navigation (adresse IP, pages consultées, durée de visite) ;",
            "Les informations fournies via les formulaires de contact, d'inscription ou de demande de devis.",
          ],
        },
        {
          heading: "Finalités de la collecte des données",
          paragraphs: ["Les données personnelles que nous collectons sont utilisées pour les finalités suivantes :"],
          items: [
            "Répondre à vos demandes d'information ou de contact ;",
            "Vous fournir les services que vous avez sollicités ;",
            "Vous informer des actualités, offres et événements liés à BEGO (avec votre consentement) ;",
            "Améliorer la qualité de nos services et de notre site internet ;",
            "Respecter nos obligations légales et réglementaires.",
          ],
        },
        {
          heading: "Base légale du traitement des données",
          paragraphs: ["Le traitement de vos données personnelles est fondé sur :"],
          items: [
            "Votre consentement explicite pour certaines opérations (ex : envoi de newsletters) ;",
            "L'exécution d'un contrat ou la prise de mesures précontractuelles à votre demande ;",
            "La nécessité de respecter nos obligations légales ;",
            "Notre intérêt légitime à améliorer nos services et à assurer la sécurité de notre site.",
          ],
        },
        {
          heading: "Destinataire des données",
          paragraphs: ["Vos données personnelles sont destinées à :"],
          items: [
            "BEGO et ses équipes internes ;",
            "Nos partenaires et prestataires de services, uniquement dans le cadre de l'exécution de nos missions (ex : hébergeur, prestataires techniques) ;",
            "Les autorités compétentes, si requis par la loi.",
          ],
        },
        {
          heading: "Transfert de données à l'international",
          paragraphs: [
            "Vos données personnelles sont principalement traitées au Togo. Cependant, dans le cadre de certaines collaborations internationales, vos données pourraient être transférées vers des pays situés en dehors de l'Union Africaine. Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place pour protéger vos données.",
          ],
        },
        {
          heading: "Durée de conservation des données",
          paragraphs: [
            "Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, conformément à nos obligations légales et réglementaires. Par exemple :",
          ],
          items: [
            "Les données de contact sont conservées pendant 3 ans à compter de votre dernière interaction avec nous ;",
            "Les données liées à un contrat sont conservées pendant la durée du contrat et jusqu'à 5 ans après sa fin.",
          ],
        },
        {
          heading: "Vos droits sur vos données",
          paragraphs: ["Conformément à la législation en vigueur, vous disposez des droits suivants concernant vos données personnelles :"],
          items: [
            "Droit d'accès : Vous pouvez demander à accéder à vos données personnelles ;",
            "Droit de rectification : Vous pouvez demander à corriger ou à compléter vos données si elles sont inexactes ou incomplètes ;",
            "Droit à l'effacement : Vous pouvez demander la suppression de vos données dans certains cas (ex : données non nécessaires, retrait de consentement) ;",
            "Droit à la limitation du traitement : Vous pouvez demander à limiter l'utilisation de vos données dans certaines situations ;",
            "Droit à la portabilité : Vous pouvez demander à recevoir vos données dans un format structuré et à les transférer à un autre responsable de traitement ;",
            "Droit d'opposition : Vous pouvez vous opposer au traitement de vos données pour des raisons liées à votre situation particulière.",
          ],
        },
        {
          paragraphs: [
            "Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : contact@cabinetbego.com. Nous nous engageons à répondre à votre demande dans un délai raisonnable.",
          ],
        },
        {
          heading: "Sécurité des données",
          paragraphs: [
            "BEGO met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Ces mesures incluent :",
          ],
          items: [
            "Le chiffrement des données sensibles ;",
            "La mise en place de pare-feu et de systèmes de détection d'intrusions ;",
            "La formation de nos équipes à la protection des données.",
          ],
        },
        {
          heading: "Cookies et technologies similaires",
          paragraphs: ["Notre site utilise des cookies pour améliorer votre expérience utilisateur. Ces cookies nous permettent de :"],
          items: ["Mémoriser vos préférences ;", "Analyser le trafic et les performances du site ;", "Vous proposer des contenus personnalisés."],
        },
        {
          paragraphs: [
            "Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.",
          ],
        },
        {
          heading: "Modifications de la politique de protection des données",
          paragraphs: [
            "Nous nous réservons le droit de modifier cette politique de protection des données à tout moment, notamment pour nous conformer aux évolutions légales, réglementaires ou technologiques. Toute modification sera publiée sur cette page avec la date de la dernière mise à jour.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Pour toute question ou réclamation concernant la protection de vos données personnelles, vous pouvez nous contacter à l'adresse suivante :",
            "Bureau d'Études et de Gestion des Organisations (BEGO)",
            "Email : contact@cabinetbego.com",
            "Tél. : (+228) 90 35 23 86 / (+228) 99 72 52 85 / (+228) 98 94 37 93",
          ],
        },
      ],
    },
  },

  en: {
    "vision-mission-valeurs": {
      slug: "vision-mission-valeurs",
      kicker: "About us",
      title: "Mission, Vision, Values",
      intro:
        "At BEGO (Organizational Studies and Management Bureau), we are guided by an ambitious vision, a clear mission, and strong values. These founding principles enable us to effectively support our clients and partners in their projects, providing tailored and innovative solutions.",
      sections: [
        {
          heading: "Our vision",
          paragraphs: [
            "We believe in a world where competence, cooperation, and confidentiality are the pillars of effective organizational management.",
            "\"Client-focused, to deliver the best possible service experience.\"",
            "Our goal is to be a reference in organizational management and value chain development in West Africa, providing quality services and constantly innovating to meet our clients' challenges.",
          ],
        },
        {
          heading: "Our mission",
          paragraphs: [
            "At BEGO, we are committed to providing tailored services to help our clients achieve their strategic goals.",
            "\"At the service of our clients\": we offer services adapted to the specific needs of each organization, business, or public institution. We primarily work in:",
          ],
          items: [
            "Studies and strategic analyses, for a better understanding of challenges and opportunities.",
            "Training and coaching, to strengthen the capacities of professionals and entrepreneurs.",
            "Management and optimization of organizations, to guarantee their efficiency and sustainability.",
            "Support for businesses and institutions, providing concrete solutions for sustainable and inclusive development.",
          ],
        },
        {
          heading: "Our values",
          paragraphs: [
            "Our values are the foundation of our commitment. They guide our actions every day and ensure the quality of our services.",
          ],
          items: [
            "Client value – Our solutions are designed to meet the specific needs of each client.",
            "Expertise – A qualified team with in-depth mastery of our areas of intervention.",
            "Creativity and innovation – A proactive approach to offering solutions suited to today's challenges.",
            "Excellence and accountability – A demand for rigor and integrity in all our assignments.",
            "Pursuit of excellence – A constant commitment to improving our methods and results.",
          ],
        },
        {
          paragraphs: [
            "Thanks to these values, BEGO stands out as a reliable and committed partner, ready to rise to the challenges alongside its clients and partners.",
          ],
        },
      ],
    },

    "recherche-developpement": {
      slug: "recherche-developpement",
      kicker: "About us",
      title: "Research & Development",
      intro:
        "At BEGO, Research & Development is at the heart of our strategy for proposing innovative solutions, adapted to local realities, and grounded in concrete data.",
      sections: [
        {
          heading: "Our R&D objectives",
          items: [
            "Identify and analyze the structural challenges of development in West Africa.",
            "Design innovative intervention models, applicable in agro-industry, organizational management, entrepreneurship, and gender.",
            "Produce decision-support tools based on reliable field data (economic models, feasibility studies, participatory diagnostics…).",
            "Strengthen local capacities through applied research and training based on our study results.",
          ],
        },
        {
          heading: "Research areas",
          items: [
            "Agricultural and agri-food value chains",
            "Evaluation of social, economic, and environmental impacts",
            "Gender approach and economic inclusion",
            "Rural entrepreneurship and MSME development",
            "Agroecology and food security",
            "Territorial strategic planning",
          ],
        },
        {
          heading: "Some recent R&D projects",
          items: [
            "Economic model analysis in agricultural value chains: study on the beekeeping, sesame, vegetable, mango, pineapple, coffee, and cocoa sectors… (Togo – GIZ ProComp).",
            "Gender & Energy audit in Togo: multi-sector diagnosis of access and representation inequalities in the energy sector (Togo – GIZ ProÉnergie).",
            "Bia Laafia market study: preliminary analysis of commercial opportunities for local nutritional products (Togo – CRS).",
            "Research on contract farming and SME Loop: comparative evaluation of two agricultural entrepreneurship support models (Togo – GIZ ProComp).",
            "Valorization of agroecological products: identification of market niches for young producers (Togo – REJEPPAT-RC).",
          ],
        },
        { heading: "Our R&D partners", paragraphs: ["GIZ, AfDB, CRS, FNAFPP, ANPGF, TFO Canada, REJEPPAT, among others."] },
      ],
    },

    "engagements-politiques": {
      slug: "engagements-politiques",
      kicker: "About us",
      title: "Commitments & Policies",
      intro: "At BEGO, we place transparency, excellence, and accountability at the heart of everything we do.",
      sections: [
        {
          heading: "Our commitments",
          paragraphs: ["The firm is committed to providing high-quality services based on four principles:"],
          items: [
            "Confidentiality: protecting our partners' data and information is a priority.",
            "Integrity & ethics: we guarantee work practices that meet the strictest standards.",
            "Expertise & innovation: we adopt modern approaches suited to today's challenges.",
            "Social and environmental responsibility: we integrate sustainable development principles into our interventions.",
          ],
        },
        {
          heading: "Our policies",
          items: [
            "Gender policy: promoting equality and gender mainstreaming",
            "Environmental policy: minimizing our ecological footprint",
            "Equality and diversity policy: an inclusive environment free of discrimination",
            "Quality policy: continuous improvement with rigorous controls",
            "Anti-fraud and anti-corruption policy: zero tolerance",
            "Occupational health & safety policy: strict prevention standards",
          ],
        },
      ],
    },

    etudes: {
      slug: "etudes",
      kicker: "Services",
      title: "Studies",
      intro:
        "The Organizational Studies and Management Bureau (BEGO) conducts multi-sector studies to guide development strategies, strengthen public policy, and support private and community initiatives. Each study conducted by BEGO relies on a rigorous, participatory methodology adapted to field realities.",
      sections: [
        {
          heading: "Our areas of intervention in studies",
          paragraphs: ["We work in the following areas:"],
          items: [
            "Feasibility studies: technical, financial, institutional, and environmental, to validate the relevance and viability of projects.",
            "Market studies: analysis of supply, demand, distribution channels, and local, national, or regional economic opportunities.",
            "Baseline studies: collection and analysis of initial data to measure project impact on beneficiaries.",
            "Impact studies: assessment of a programme's or project's effects across economic, social, environmental, or gender dimensions.",
            "Institutional studies: organizational diagnostics, functional audits, institutional structuring.",
          ],
        },
        {
          heading: "Methodology",
          paragraphs: ["Our studies are designed to be participatory, inclusive, and results-oriented. We use:"],
          items: [
            "Quantitative and qualitative surveys (face-to-face, focus groups, semi-structured interviews).",
            "Participatory mapping and value chain analysis tools.",
            "Digital data collection platforms (KoBoToolbox, ODK…).",
            "Strategic analysis tools (SWOT, Canvas, PESTEL, etc.).",
          ],
        },
        {
          heading: "Examples of completed assignments",
          items: [
            "Market study for the Bia Laafia project (CRS – Togo)",
            "Feasibility study for New Local Operators (AfDB – Central African Republic)",
            "Impact study of contract farming vs. SME Loop (GIZ – Togo)",
            "Gender-Energy audit in Togo's electricity sector (GIZ – ProÉnergie)",
            "Study on the valorization of agroecological products (REJEPPAT – Togo)",
            "Economic studies on priority agricultural sectors (GIZ – Togo)",
          ],
        },
        {
          paragraphs: [
            "Want to better understand a market, assess the feasibility of a project, or measure the impact of your actions? Call on our team of multidisciplinary experts.",
          ],
        },
      ],
    },

    "suivis-evaluations": {
      slug: "suivis-evaluations",
      kicker: "Services",
      title: "Monitoring & Evaluations",
      intro:
        "Monitoring and evaluation are essential tools for ensuring the effectiveness and sustainability of development projects and programmes. BEGO supports its clients in setting up high-performing evaluation systems, enabling them to analyze results and optimize the impact of the initiatives implemented.",
      sections: [
        {
          heading: "Our objectives",
          items: [
            "Ensure rigorous monitoring for better project management.",
            "Identify programme strengths and weaknesses for continuous improvement.",
            "Evaluate the impact and effectiveness of interventions to ensure their relevance.",
            "Provide strategic recommendations based on objective analysis.",
          ],
        },
        {
          heading: "Our monitoring & evaluation services",
          paragraphs: ["We offer a wide range of services tailored to our partners' needs:"],
        },
        {
          heading: "1. Monitoring & evaluation of development projects and programmes",
          items: [
            "Development of performance indicators and logical frameworks.",
            "Real-time monitoring of project implementation and results.",
            "Interim and final evaluation reports.",
          ],
        },
        {
          heading: "2. Organizational audits and diagnostics",
          items: [
            "Analysis of internal structures and processes.",
            "Recommendations for optimizing project management.",
            "Risk assessment and proposal of corrective strategies.",
          ],
        },
        {
          heading: "3. Gender evaluation in projects",
          items: [
            "Mainstreaming the gender dimension into strategies and action plans.",
            "Analysis of project impacts on inclusion and gender equality.",
            "Support for organizations in applying equity principles.",
          ],
        },
        {
          heading: "4. Preparation of evaluation reports and recommendations",
          items: [
            "Detailed reports for funding partners and technical partners.",
            "Impact studies and ex-post evaluations of interventions.",
            "Experience and best-practice capitalization plans.",
          ],
        },
      ],
    },

    "formations-coachings": {
      slug: "formations-coachings",
      kicker: "Services",
      title: "Training & Coaching",
      intro:
        "At BEGO, we believe that capacity building is an essential lever for the success of businesses, organizations, and entrepreneurs. That is why we offer practical training and coaching sessions tailored to our clients' needs, with an emphasis on innovative and interactive approaches.",
      sections: [
        {
          heading: "Our objectives",
          items: [
            "Support professionals and entrepreneurs in developing their skills.",
            "Strengthen management, strategy, and leadership capacities.",
            "Offer training adapted to field realities and beneficiaries' needs.",
            "Ensure post-training follow-up for effective application of what was learned.",
          ],
        },
        { heading: "Our training & coaching areas" },
        {
          heading: "1. Business management & strategy",
          items: [
            "Development of business plans and economic models.",
            "Financial management and resource optimization.",
            "Leadership and strategic decision-making.",
          ],
        },
        {
          heading: "2. Project & organizational management",
          items: [
            "Planning, monitoring, and evaluation of projects.",
            "Organizational management and business structuring.",
            "Risk management and performance improvement.",
          ],
        },
        {
          heading: "3. Agricultural & agri-food value chains",
          items: [
            "Modern production and agri-food processing techniques.",
            "Marketing of agricultural products and sector optimization.",
            "Investment and market access strategies.",
          ],
        },
        {
          heading: "4. Marketing, communication & negotiation",
          items: [
            "Sales techniques and customer relations.",
            "Negotiation and contracting of partnerships.",
            "Digital strategies and online visibility.",
          ],
        },
        {
          heading: "5. Gender equality & social inclusion",
          items: [
            "Training on gender mainstreaming in policies and programmes.",
            "Awareness-raising and best practices in social inclusion.",
            "Tools for equitable and inclusive human resource management.",
          ],
        },
      ],
    },

    "management-des-organisations": {
      slug: "management-des-organisations",
      kicker: "Focus Areas",
      title: "Organizational Management",
      intro:
        "At BEGO, we support organizations, businesses, and institutions in improving their operations, governance, and overall performance. Thanks to proven expertise, our firm operates at every level of organizational management, offering personalized and sustainable solutions.",
      sections: [
        {
          heading: "Our areas of intervention",
          paragraphs: ["We offer a comprehensive range of services focused on optimizing organizational structures:"],
          items: [
            "Organizational audits: comprehensive assessment of internal structures, processes, and practices.",
            "Organizational structuring: support in formalizing key functions, procedures, and org charts.",
            "Business incubator development: support for startups and young ventures in their structuring.",
            "Support for negotiation and contracting: strategic and legal support for commercial or institutional negotiations.",
            "Marketing & business development: defining positioning and growth strategies.",
            "Leadership & governance: training and coaching for executives and mid-level managers.",
            "Strategic and operational planning: development and monitoring of realistic, high-performing action plans.",
          ],
        },
        {
          heading: "Our strengths",
          items: [
            "A permanent multidisciplinary team made up of specialists in business management, financial analysis, project evaluation, and organizational development.",
            "A network of external consultants deployable across Togo and West Africa.",
            "A client-centered approach integrating quality, innovation, ethics, and performance.",
          ],
        },
        {
          heading: "Why choose BEGO?",
          paragraphs: ["By choosing BEGO, you benefit from:"],
          items: [
            "Tailor-made solutions, adapted to your institutional or entrepreneurial reality.",
            "Proven methodologies, aligned with international performance standards.",
            "Lasting skills transfer within your teams.",
          ],
        },
      ],
    },

    "chaines-de-valeur": {
      slug: "chaines-de-valeur",
      kicker: "Focus Areas",
      title: "Value Chain Analysis & Development",
      intro:
        "Optimizing agricultural, agri-food, and livestock value chains is at the heart of Cabinet BEGO's interventions. Through in-depth expertise and participatory methodologies, we support stakeholders at every link, from production to marketing, to strengthen the competitiveness, inclusiveness, and sustainability of these sectors.",
      sections: [
        {
          heading: "Our services in this area",
          paragraphs: ["Our offering covers these dimensions:"],
          items: [
            "Value chain analysis: mapping, diagnosis of each link, identification of constraints and opportunities.",
            "Economic modeling: development of inclusive, viable, market-oriented models.",
            "Support for animal and crop production: training in poultry farming, beekeeping, sheep and goat farming.",
            "Development of processing solutions: value addition for agricultural products.",
            "Capacity building: training for producers and processors.",
            "Market entry strategies: market access, contracting, labeling.",
            "Promotion of contract farming: fair matchmaking between producers and buyers.",
          ],
        },
        {
          heading: "Our technical expertise",
          items: [
            "Agro-economic approach based on field data",
            "Integration of gender, climate, and sustainability dimensions",
            "Collaboration with national and international partners",
          ],
        },
        {
          heading: "Our added value",
          items: [
            "Field approach with active participation of local stakeholders",
            "Adaptability of solutions to local contexts",
            "An integrated view of social, economic, and environmental issues",
          ],
        },
      ],
    },

    "evaluation-genre": {
      slug: "evaluation-genre",
      kicker: "Focus Areas",
      title: "Gender Evaluation of Development Projects & Programmes",
      intro:
        "At BEGO, we mainstream gender as an essential lever for social transformation and for improving the impact of development projects. We help our partners evaluate, design, and implement projects that are gender-sensitive, fair, and inclusive.",
      sections: [
        {
          heading: "Objectives of our interventions",
          items: [
            "Identify and correct structural inequalities between the sexes in projects and programmes.",
            "Promote balanced participation of women, men, youth, and other marginalized groups.",
            "Support stakeholders in taking gender into account from planning through to the final evaluation of projects.",
          ],
        },
        {
          heading: "Our services",
          paragraphs: ["Our gender evaluation services include:"],
          items: [
            "Institutional and sectoral gender audits.",
            "Gender evaluations of projects and programmes (ex-ante, mid-term, ex-post).",
            "Analysis of differentiated impacts on women and men.",
            "Design of integrated gender action plans.",
            "Training of stakeholders on the gender and equality approach.",
            "Development of gender monitoring tools and indicators.",
          ],
        },
        {
          heading: "Our methodology",
          paragraphs: ["We adopt a participatory and intersectional approach that makes it possible to:"],
          items: [
            "Involve end beneficiaries in the analysis.",
            "Integrate local sociocultural norms.",
            "Generate concrete, actionable recommendations.",
            "Strengthen partners' institutional capacity on gender.",
          ],
        },
        {
          heading: "Why call on BEGO?",
          items: [
            "Specialists in gender and social development.",
            "Extensive experience in agriculture, energy, entrepreneurship, and governance.",
            "Command of international frameworks (UN Women, AfDB, GIZ, etc.).",
            "Ability to deliver actionable reports and inclusive strategies.",
          ],
        },
      ],
    },

    plaidoyer: {
      slug: "plaidoyer",
      kicker: "Focus Areas",
      title: "Advocacy & Community Management",
      intro:
        "The Organizational Studies and Management Bureau (BEGO) is actively engaged in advocacy to support the transformation of agricultural, economic, and social systems in West Africa. Through our actions, we work to influence public policy, institutional practices, and collective behavior in order to promote inclusive, sustainable, and equitable development.",
      sections: [
        {
          heading: "Our advocacy objectives",
          items: [
            "Promote effective consideration of the concerns of local actors, particularly producers, women, youth, and SMEs.",
            "Influence development policy through recommendations grounded in concrete data and field feedback.",
            "Contribute to improving the legislative, economic, and social frameworks in our areas of intervention.",
            "Support the voice of producer organizations, agricultural sectors, and small businesses for better representation in decision-making.",
          ],
        },
        {
          itemsTitle: "Our advocacy actions include:",
          items: [
            "Carrying out field studies and analyses to inform policy discussions (situational reviews, participatory diagnostics, etc.).",
            "Mobilizing stakeholders around key themes (gender, family farming, contracting, access to financing…).",
            "Preparing policy notes and strategic documents for decision-makers.",
            "Organizing multi-stakeholder dialogues, forums, and national and regional workshops.",
            "Building the capacity of CSOs and POs to defend their interests and formulate well-argued proposals.",
          ],
        },
        {
          heading: "Our approach",
          paragraphs: [
            "Our advocacy activities are based on a collaborative, evidence-based, and impact-oriented approach. We believe in systemic transformation driven by local communities, in synergy with public, private, and civil society actors.",
          ],
        },
      ],
    },

    agrometeorologie: {
      slug: "agrometeorologie",
      kicker: "Resources",
      title: "Agrometeorology",
      intro:
        "BEGO regularly publishes agrometeorological and climate-health bulletins to support decision-making for agricultural actors in West Africa.",
      sections: [
        {
          heading: "Available bulletins",
          items: ["Quarterly bulletin No. 32: April–May–June 2026", "Climate-Health bulletin: April 2026"],
        },
      ],
    },

    "intelligence-economique": {
      slug: "intelligence-economique",
      kicker: "Resources",
      title: "Economic Intelligence",
      intro: "This section brings together BEGO's analyses and resources on economic intelligence for West Africa.",
      sections: [
        { paragraphs: ["Content is being published. Contact us for any specific analysis or market intelligence request."] },
      ],
    },

    autres: {
      slug: "autres",
      kicker: "Resources",
      title: "Other Resources",
      intro: "Other BEGO resources and publications will be available in this section soon.",
      sections: [
        { paragraphs: ["Contact us to request a specific resource or to be notified of upcoming publications."] },
      ],
    },

    "mentions-legales": {
      slug: "mentions-legales",
      kicker: "Info",
      title: "Legal Notice",
      sections: [
        {
          heading: "General information",
          paragraphs: [
            "This website, cabinetbego.com, is published by: Organizational Studies and Management Bureau (BEGO)",
            "Registered office: Adidogomé – Apédokoin, near the Les Marrons pan-African clinic",
            "Phone: (+228) 90 35 23 86 / (+228) 99 72 52 85 / (+228) 98 94 37 93",
            "Email: contact@cabinetbego.com",
            "P.O. Box: 31044 Lomé – Togo",
          ],
        },
        {
          heading: "Publication director",
          paragraphs: ["The publication director is Mr. TOUNOUVI Komi Mawko, legal representative of BEGO."],
        },
        {
          heading: "Hosting",
          paragraphs: ["The site is hosted by: Vercel Inc."],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "All content on the cabinetbego.com website (text, images, logos, videos, etc.) is the exclusive property of BEGO or its partners. Any reproduction, distribution, modification, or use of this content without prior authorization is strictly prohibited and may lead to legal action.",
          ],
        },
        {
          heading: "Personal data protection",
          paragraphs: [
            "In accordance with applicable law, BEGO is committed to protecting the personal data of the site's users. Information collected through contact or registration forms is used solely within the scope of BEGO's services and will never be shared with third parties without your explicit consent.",
            "For any question regarding the protection of your data, you may contact us at: contact@cabinetbego.com",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "The cabinetbego.com website uses cookies to improve the user experience. These cookies help remember your preferences and generate visit statistics. You may disable cookies via your browser settings, although this may affect certain features of the site.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "BEGO makes every effort to ensure the accuracy and timeliness of the information published on its site. However, BEGO cannot guarantee its completeness, accuracy, or freedom from third-party alteration. Accordingly, BEGO disclaims any liability for errors, omissions, or outcomes resulting from the use of this information.",
          ],
        },
        {
          heading: "External links",
          paragraphs: [
            "The cabinetbego.com website may contain links to external sites. BEGO has no control over these sites and disclaims any responsibility for their content, accessibility, or privacy policy.",
          ],
        },
        {
          heading: "Governing law and jurisdiction",
          paragraphs: ["This legal notice is governed by Togolese law. In the event of a dispute, the competent courts shall be those of Lomé, Togo."],
        },
        {
          heading: "Contact",
          paragraphs: [
            "For any question or complaint regarding this legal notice, you may contact us at: Organizational Studies and Management Bureau (BEGO)",
            "Email: contact@cabinetbego.com",
            "Phone: (+228) 90 35 23 86 / (+228) 99 72 52 85 / (+228) 98 94 37 93",
          ],
        },
      ],
    },

    confidentialite: {
      slug: "confidentialite",
      kicker: "Info",
      title: "Personal Data Protection Policy",
      sections: [
        {
          heading: "Introduction",
          paragraphs: [
            "The Organizational Studies and Management Bureau (BEGO), publisher of the cabinetbego.com website, places great importance on protecting your personal data. This personal data protection policy is intended to inform you about how we collect, use, protect, and retain your personal data when you use our website and services.",
          ],
        },
        {
          heading: "Personal data collected",
          paragraphs: ["The personal data we collect may include, but is not limited to:"],
          items: [
            "Your contact details (first name, last name, email address, phone number);",
            "Your professional information (position, company, industry);",
            "Browsing data (IP address, pages viewed, visit duration);",
            "Information provided through contact, registration, or quote request forms.",
          ],
        },
        {
          heading: "Purposes of data collection",
          paragraphs: ["The personal data we collect is used for the following purposes:"],
          items: [
            "Respond to your information or contact requests;",
            "Provide you with the services you have requested;",
            "Keep you informed of BEGO's news, offers, and events (with your consent);",
            "Improve the quality of our services and our website;",
            "Comply with our legal and regulatory obligations.",
          ],
        },
        {
          heading: "Legal basis for data processing",
          paragraphs: ["The processing of your personal data is based on:"],
          items: [
            "Your explicit consent for certain operations (e.g., sending newsletters);",
            "The performance of a contract or the taking of pre-contractual steps at your request;",
            "The need to comply with our legal obligations;",
            "Our legitimate interest in improving our services and ensuring the security of our site.",
          ],
        },
        {
          heading: "Data recipients",
          paragraphs: ["Your personal data is intended for:"],
          items: [
            "BEGO and its internal teams;",
            "Our partners and service providers, solely for carrying out our assignments (e.g., hosting provider, technical service providers);",
            "The competent authorities, where required by law.",
          ],
        },
        {
          heading: "International data transfers",
          paragraphs: [
            "Your personal data is primarily processed in Togo. However, as part of certain international collaborations, your data may be transferred to countries outside the African Union. In such cases, we ensure that appropriate safeguards are put in place to protect your data.",
          ],
        },
        {
          heading: "Data retention period",
          paragraphs: [
            "Your personal data is retained for as long as necessary to fulfill the purposes for which it was collected, in accordance with our legal and regulatory obligations. For example:",
          ],
          items: [
            "Contact data is retained for 3 years from your last interaction with us;",
            "Contract-related data is retained for the duration of the contract and up to 5 years after it ends.",
          ],
        },
        {
          heading: "Your rights over your data",
          paragraphs: ["In accordance with applicable law, you have the following rights regarding your personal data:"],
          items: [
            "Right of access: You may request access to your personal data;",
            "Right to rectification: You may request that your data be corrected or completed if it is inaccurate or incomplete;",
            "Right to erasure: You may request the deletion of your data in certain cases (e.g., data no longer necessary, withdrawal of consent);",
            "Right to restriction of processing: You may request that the use of your data be restricted in certain situations;",
            "Right to portability: You may request to receive your data in a structured format and to transfer it to another data controller;",
            "Right to object: You may object to the processing of your data for reasons relating to your particular situation.",
          ],
        },
        {
          paragraphs: [
            "To exercise these rights, you may contact us at: contact@cabinetbego.com. We are committed to responding to your request within a reasonable timeframe.",
          ],
        },
        {
          heading: "Data security",
          paragraphs: [
            "BEGO implements appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:",
          ],
          items: [
            "Encryption of sensitive data;",
            "The implementation of firewalls and intrusion detection systems;",
            "Training our teams on data protection.",
          ],
        },
        {
          heading: "Cookies and similar technologies",
          paragraphs: ["Our site uses cookies to improve your user experience. These cookies allow us to:"],
          items: ["Remember your preferences;", "Analyze site traffic and performance;", "Offer you personalized content."],
        },
        {
          paragraphs: [
            "You may configure your browser to refuse cookies, although this may affect certain features of the site.",
          ],
        },
        {
          heading: "Changes to the data protection policy",
          paragraphs: [
            "We reserve the right to modify this data protection policy at any time, in particular to comply with legal, regulatory, or technological developments. Any change will be published on this page along with the date of the last update.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "For any question or complaint regarding the protection of your personal data, you may contact us at:",
            "Organizational Studies and Management Bureau (BEGO)",
            "Email: contact@cabinetbego.com",
            "Phone: (+228) 90 35 23 86 / (+228) 99 72 52 85 / (+228) 98 94 37 93",
          ],
        },
      ],
    },
  },
};

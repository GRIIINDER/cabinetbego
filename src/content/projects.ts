import { Locale } from "./site";

export const projects: Record<
  Locale,
  {
    intro: string;
    items: { title: string; description: string }[];
    kicker: string;
    pageTitle: string;
  }
> = {
  fr: {
    kicker: "Références",
    pageTitle: "Projets récents ou en cours",
    intro:
      "BEGO conduit des missions stratégiques pour des institutions publiques, des organisations internationales et des entreprises privées à travers l'Afrique de l'Ouest, en s'appuyant sur son expertise régionale et une approche orientée résultats.",
    items: [
      {
        title: "Planification stratégique et analyse de business plans",
        description: "Renforcement des capacités des bénéficiaires en planification stratégique et élaboration de plans d'affaires.",
      },
      {
        title: "Appui aux leaders des ZAAP (Région Centrale)",
        description:
          "Gestion d'entreprise, négociation et appui à l'agriculture contractuelle pour les responsables de coopératives, avec un accent sur l'agriculture contractuelle.",
      },
      {
        title: "Formation en transformation du riz (Région des Savanes)",
        description:
          "Formation des femmes transformatrices aux techniques améliorées d'étuvage, à la maintenance des équipements et au calcul de rentabilité.",
      },
      {
        title: "Coaching ALL BIO & CAJOUX DU CENTRE",
        description: "Accompagnement pour le développement de modèles d'agriculture contractuelle inclusifs et l'amélioration des chaînes d'approvisionnement.",
      },
      {
        title: "Analyse des modèles économiques de périmètres irrigués",
        description: "Étude des modèles économiques durables intégrant les systèmes d'irrigation dans les chaînes de valeur agricoles.",
      },
      {
        title: "Audit Genre & Énergie (secteur de l'énergie au Togo)",
        description: "Audit couvrant les secteurs public, privé, la société civile et la formation pour orienter l'inclusion du genre dans les politiques.",
      },
      {
        title: "Appui aux PME pour un salon professionnel",
        description: "Préparation de PME burkinabè et béninoises pour le salon international de l'agriculture SARA 2023.",
      },
      {
        title: "Analyse multisectorielle des chaînes de valeur",
        description:
          "Analyse des modèles économiques de 13 chaînes de valeur agricoles (apiculture, sésame, légumes, épices, mangue, ananas, café, cacao, manioc, anacarde, soja, karité, fonio).",
      },
      {
        title: "Étude d'installation d'opérateurs locaux (RCA)",
        description: "Études de faisabilité pour l'installation de nouveaux opérateurs agricoles dans les préfectures de Kémo et Ouaka, pour l'emploi des jeunes.",
      },
      {
        title: "Étude de marché Bia Laafia",
        description:
          "Analyse préliminaire de marché pour un projet d'alimentation scolaire, portant sur la farine de maïs, le niébé et le poisson séché dans les régions de la Kara et des Savanes.",
      },
    ],
  },
  en: {
    kicker: "References",
    pageTitle: "Recent & Ongoing Projects",
    intro:
      "BEGO carries out strategic assignments for public institutions, international organizations, and private businesses across West Africa, drawing on its regional expertise and a results-oriented approach.",
    items: [
      {
        title: "Strategic planning and business plan analysis",
        description: "Capacity building for beneficiaries in strategic planning and business plan development.",
      },
      {
        title: "Support for ZAAP leaders (Central Region)",
        description:
          "Business management, negotiation, and support for contract farming for cooperative leaders, with a focus on contract farming.",
      },
      {
        title: "Rice processing training (Savanes Region)",
        description:
          "Training for women processors in improved parboiling techniques, equipment maintenance, and profitability calculation.",
      },
      {
        title: "Coaching for ALL BIO & CAJOUX DU CENTRE",
        description: "Support for developing inclusive contract farming models and improving supply chains.",
      },
      {
        title: "Economic model analysis of irrigated perimeters",
        description: "Study of sustainable economic models integrating irrigation systems into agricultural value chains.",
      },
      {
        title: "Gender & Energy audit (Togo energy sector)",
        description: "Audit covering the public sector, private sector, civil society, and training to guide gender mainstreaming in policy.",
      },
      {
        title: "SME support for a trade fair",
        description: "Preparation of Burkinabe and Beninese SMEs for the SARA 2023 international agriculture fair.",
      },
      {
        title: "Multi-sector value chain analysis",
        description:
          "Analysis of the economic models of 13 agricultural value chains (beekeeping, sesame, vegetables, spices, mango, pineapple, coffee, cocoa, cassava, cashew, soybean, shea, fonio).",
      },
      {
        title: "Local operator installation study (CAR)",
        description: "Feasibility studies for the installation of new agricultural operators in the Kémo and Ouaka prefectures, for youth employment.",
      },
      {
        title: "Bia Laafia market study",
        description:
          "Preliminary market analysis for a school feeding project, covering corn flour, cowpea, and dried fish in the Kara and Savanes regions.",
      },
    ],
  },
};

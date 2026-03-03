// portfolioData.js
// ADNS DataFlow — Bilingual (EN/FR) content

export const portfolioData = {
  en: {
    hero: {
      brand: "ADNS DataFlow",
      tagline: "Turn Your Data Into a Growth Engine",
      services: ["Strategic AI Audit", "Custom AI Agents", "Training & Enablement"],
      quote: "The market is full of tools but short on profiles who can connect technology to business ROI. My approach at ADNS DataFlow: turning AI complexity into concrete, measurable results.",
      founder: "Axel STRUBEL, Founder",
      cta: {
        primary: "Book a Free Audit",
        secondary: "Discover Services"
      }
    },

    about: {
      title: "Axel STRUBEL — AI & Data Engineer",
      subtitle: "Profile & Expertise",
      content: "Graduate of a top French engineering school with 3+ years of intensive Data Science and Artificial Intelligence experience. Through ADNS DataFlow, I don't just install algorithms — I design integrated solutions that address your real business challenges. I support clients (France & International) from strategy to production deployment. My priority: fast ROI, smooth team adoption, and technology you truly own."
    },

    services: {
      title: "Services",
      subtitle: "Three focused offerings to move from data to measurable value",
      items: [
        {
          id: 1,
          title: "AI Audit & Architecture",
          subtitle: "From raw data to business value",
          description: "AI integration starts with a clear-eyed assessment of your data maturity and key processes with ADNS DataFlow.",
          bullets: [
            "AI Readiness Assessment: identify 3 high-ROI use cases in just 5 days.",
            "Data Mapping & Valuation: analyse your existing databases to uncover untapped potential.",
            "Strategic Roadmap: a clear plan for generative AI integration and cost optimisation."
          ]
        },
        {
          id: 2,
          title: "Custom AI Agents (RAG)",
          subtitle: "Tailored technical deployment",
          description: "Deploy custom, secure AI solutions trained specifically on your company's own data.",
          bullets: [
            "Internal RAG chatbots deployed in 3 weeks to query your private document bases.",
            "Process automation: level-1 customer support, HR pre-screening, logistics optimisation.",
            "Seamless LLM API integration (OpenAI, Anthropic, Mistral) into your existing software stack."
          ]
        },
        {
          id: 3,
          title: "Training & Enablement",
          subtitle: "Prompt Engineering · GenAI Basics · No-Code Workflows",
          description: "Three programmes to make your teams fully autonomous with AI.",
          bullets: [
            "Prompt Engineering: master the art of querying LLMs for maximum daily productivity.",
            "GenAI Basics: demystify AI for management to independently spot new innovation opportunities.",
            "No-Code Workflows: build powerful automations (Make, Zapier) coupled with AI — no code required."
          ]
        }
      ]
    },

    methodology: {
      title: "A Proven Iterative Method",
      subtitle: "From discovery to continuous improvement in four steps",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description: "Flash audit, business needs scoping, technical feasibility study, and strict definition of success KPIs."
        },
        {
          number: "02",
          title: "Prototyping",
          description: "MVP development in 2 to 3 weeks to test value directly in the field."
        },
        {
          number: "03",
          title: "Deployment",
          description: "Secure production release, integration with your information system, and user team training."
        },
        {
          number: "04",
          title: "Iteration",
          description: "Performance monitoring, model fine-tuning, and continuous improvement based on real feedback."
        }
      ]
    },

    metrics: {
      title: "Measurable Impact on Productivity",
      stat: { value: "40%", label: "Average productivity gain on administrative and repetitive tasks." },
      comparisons: [
        { task: "Large-scale data analysis", manual: "15 h", withAI: "3 h" },
        { task: "Document synthesis (RFP)", manual: "8 h", withAI: "1 h" }
      ],
      note: "These metrics come from real use cases implemented with our clients. Intelligent automation frees your experts to focus on high-value analysis and decision-making."
    },

    contact: {
      title: "Ready to Accelerate?",
      subtitle: "Get ahead of your market. Book a free 30-minute flash audit with Axel STRUBEL.",
      buttons: [
        { label: "Book a Flash Audit", href: "https://calendly.com/axel-strubel-adns", external: true, primary: true },
        { label: "Send an Email", href: "mailto:axel.strubel@gmail.com", external: false },
        { label: "GitHub", href: "https://github.com/AxelStbl", external: true }
      ]
    },

    footer: {
      text: "ADNS DataFlow © 2025 · Axel Strubel · Remote — France & International"
    }
  },

  fr: {
    hero: {
      brand: "ADNS DataFlow",
      tagline: "Transformez la Donnée en Levier de Croissance",
      services: ["Audit Stratégique IA", "Agents IA Sur-Mesure", "Formation & Acculturation"],
      quote: "Le marché regorge d'outils, mais manque de profils capables de lier technologie et ROI métier. Mon approche chez ADNS DataFlow ? Transformer la complexité de l'IA en résultats concrets et mesurables.",
      founder: "Axel STRUBEL, Fondateur",
      cta: {
        primary: "Réserver un Audit Gratuit",
        secondary: "Découvrir les Services"
      }
    },

    about: {
      title: "Axel STRUBEL — Ingénieur IA & Data",
      subtitle: "Profil & Expertise",
      content: "Diplômé d'une Grande École d'Ingénieurs avec plus de 3 ans d'expérience intensive en Data Science et Intelligence Artificielle. À travers ADNS DataFlow, je n'installe pas seulement des algorithmes, je conçois des solutions intégrées qui répondent à vos véritables enjeux business. J'accompagne mes clients (France & International) de la stratégie jusqu'au déploiement en production. Ma priorité : un ROI rapide, une adoption fluide par vos équipes, et une technologie maîtrisée."
    },

    services: {
      title: "Services",
      subtitle: "Trois offres ciblées pour passer de la donnée à la valeur mesurable",
      items: [
        {
          id: 1,
          title: "Audit & Architecture IA",
          subtitle: "De la donnée brute à la valeur métier",
          description: "L'intégration de l'IA commence par une évaluation lucide de votre maturité data et de vos processus clés avec ADNS DataFlow.",
          bullets: [
            "AI Readiness Assessment : identifier 3 cas d'usage ROIstes dans votre entreprise en seulement 5 jours.",
            "Cartographie & Valorisation : analyser vos bases de données existantes pour en extraire un potentiel inexploité.",
            "Roadmap Stratégique : une feuille de route claire pour l'intégration de l'IA générative et l'optimisation des coûts."
          ]
        },
        {
          id: 2,
          title: "Développement d'Agents IA (RAG)",
          subtitle: "Déploiement technique sur-mesure",
          description: "Déployez des solutions d'Intelligence Artificielle sur-mesure, sécurisées et entraînées spécifiquement sur vos propres données d'entreprise.",
          bullets: [
            "Création de Chatbots internes (RAG) déployés en 3 semaines pour interroger vos bases documentaires privées.",
            "Automatisation des processus chronophages : support client de niveau 1, présélection RH, optimisation logistique.",
            "Intégration fluide des API LLM (OpenAI, Anthropic, Mistral) dans vos outils logiciels existants."
          ]
        },
        {
          id: 3,
          title: "Formation & Acculturation",
          subtitle: "Prompt Engineering · GenAI Basics · Workflows No-Code",
          description: "Trois programmes pour rendre vos équipes pleinement autonomes avec l'IA.",
          bullets: [
            "Prompt Engineering : maîtriser l'art de requêter les LLM pour maximiser la productivité quotidienne.",
            "GenAI Basics : démystifier l'IA auprès du management pour identifier de nouvelles opportunités d'innovation.",
            "Workflows No-Code : créer des automatisations puissantes (Make, Zapier) couplées à l'IA, sans ligne de code."
          ]
        }
      ]
    },

    methodology: {
      title: "Une Méthode Itérative Éprouvée",
      subtitle: "De la découverte à l'amélioration continue en quatre étapes",
      steps: [
        {
          number: "01",
          title: "Découverte",
          description: "Audit flash, cadrage du besoin métier, étude de faisabilité technique et définition stricte des KPIs de succès."
        },
        {
          number: "02",
          title: "Prototypage",
          description: "Développement d'un MVP en 2 à 3 semaines pour tester la valeur directement sur le terrain."
        },
        {
          number: "03",
          title: "Déploiement",
          description: "Mise en production sécurisée de la solution, intégration au SI, et formation des équipes utilisatrices."
        },
        {
          number: "04",
          title: "Itération",
          description: "Monitoring des performances, ajustement des modèles (fine-tuning) et amélioration continue basée sur les retours."
        }
      ]
    },

    metrics: {
      title: "L'Impact Mesurable sur la Productivité",
      stat: { value: "40%", label: "Gain de productivité moyen constaté sur les tâches administratives et répétitives." },
      comparisons: [
        { task: "Analyse de gros volumes de données", manual: "15 h", withAI: "3 h" },
        { task: "Synthèse de documentations (Appel d'offre)", manual: "8 h", withAI: "1 h" }
      ],
      note: "Ces métriques sont tirées de cas d'usage réels implémentés chez nos clients. L'automatisation intelligente libère le temps de vos experts pour le recentrer sur l'analyse à haute valeur ajoutée."
    },

    contact: {
      title: "Prêt à Accélérer ?",
      subtitle: "Prenez de l'avance sur votre marché. Réservez un audit flash de 30 minutes avec Axel STRUBEL.",
      buttons: [
        { label: "Réserver un Audit Flash", href: "https://calendly.com/axel-strubel-adns", external: true, primary: true },
        { label: "Envoyer un Email", href: "mailto:axel.strubel@gmail.com", external: false },
        { label: "GitHub", href: "https://github.com/AxelStbl", external: true }
      ]
    },

    footer: {
      text: "ADNS DataFlow © 2025 · Axel Strubel · Remote — France & International"
    }
  }
};

// Helpers
export const getContent = (language = 'en', section = null) => {
  const data = portfolioData[language];
  return section ? data[section] : data;
};

export const getHero = (language = 'en') => portfolioData[language].hero;
export const getServices = (language = 'en') => portfolioData[language].services;
export const getMethodology = (language = 'en') => portfolioData[language].methodology;
export const getMetrics = (language = 'en') => portfolioData[language].metrics;
export const getContact = (language = 'en') => portfolioData[language].contact;

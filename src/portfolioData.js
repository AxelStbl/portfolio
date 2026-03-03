// portfolioData.js
// Complete data structure for both English and French versions
// Import this file and use it to populate your portfolio components

export const portfolioData = {
  en: {
    // Hero Section
    hero: {
      title: "AI & ML",
      titleHighlight: "Engineer",
      subtitle: "Production AI systems, LLMs, and RAG. 5+ years ML/AI, 8+ years engineering. Built Sidekick, TasteGPT, and Service AI at scale.",
      cta: {
        primary: "View Work",
        secondary: "Get in Touch"
      },
      scroll: "Scroll to explore"
    },

    // Navigation
    nav: {
      name: "Axel",
      links: [
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" }
      ]
    },

    // Featured Projects Section
    projects: {
      title: "Featured Work",
      subtitle: "Selected projects showcasing ML, infrastructure, and impact",
      items: [
        {
          id: 1,
          title: "Service AI: Ticket Resolution & RAG System",
          company: "monday.com",
          impact: "Increased tickets with AI assistance from 10% → 18.3%, improved resolution rate from 20% → 30%",
          description: "Designed and deployed an end-to-end RAG system over ticket history to generate AI-powered resolutions. Built auto-ingest pipeline generating 15K+ valid tickets/week, performed root-cause analysis on AI failures, and created Service AI Q&A database expanding answer coverage across help center queries.",
          technologies: ["RAG", "LLM", "LangChain", "Python", "Data Pipelines", "Classification"],
          metrics: [
            "15,000+ tickets/week",
            "78.8% → 46.7% null rate",
            "60,000+ data points/month"
          ],
          link: null
        },
        {
          id: 2,
          title: "Sidekick: monday.com's AI Assistant",
          company: "monday.com",
          impact: "Core AI product improvement across board modification tools",
          description: "Enhanced reliability and capability-awareness logic to reduce hallucinations. Unified Board Expert behavior across all modification tools, optimized prompt engineering to reduce token usage by 40%, improved formatting, and strengthened platform understanding to prevent invalid suggestions.",
          technologies: ["Prompt Engineering", "LLM Optimization", "Agent Design", "Python"],
          metrics: [
            "40% token reduction",
            "Reduced hallucinations",
            "Cross-tool unification"
          ],
          link: null
        },
        {
          id: 3,
          title: "TasteGPT: Multi-Agent Food Intelligence",
          company: "Tastewise",
          impact: "End-to-end LLM system for food trend analysis and discovery",
          description: "Built TasteGPT with page/filter routing classifiers and RAG over internal knowledge base. Designed AutoGen multi-agent pipeline for automatic food trend report generation, orchestrating retrieval, analysis, and composition. Implemented ingredients & trend discovery using spaCy NER, and built audience models (gender, chef detection, generational segments).",
          technologies: ["AutoGen", "RAG", "LangChain", "LLMs", "NLP", "spaCy", "scikit-learn"],
          metrics: [
            "Multi-agent pipeline",
            "Trend discovery",
            "Audience segmentation"
          ],
          link: null
        },
        {
          id: 4,
          title: "Restaurant Chain Clustering & Entity Matching",
          company: "Tastewise",
          impact: "Global system handling 100K+ restaurant entities with multi-signal matching",
          description: "Designed and productionized restaurant-chain clustering system using parser normalization, multi-signal matching (name/website/phone/logo), and country-level generalization. Built LinkedIn entity matching for chains using multi-feature scoring. Created brand discovery pipelines from noisy external data (Walmart, Open Food Facts) with automated cleaning and deduplication.",
          technologies: ["Entity Matching", "Clustering", "Data Cleaning", "MongoDB", "Elasticsearch"],
          metrics: [
            "100K+ entities",
            "Multi-country support",
            "External data integration"
          ],
          link: null
        }
      ]
    },

    // Expertise Section
    expertise: {
      title: "Expertise",
      subtitle: "Deep technical knowledge across AI, ML, and production systems",
      categories: [
        {
          category: "AI & Machine Learning",
          icon: "brain",
          items: [
            "RAG Systems & Vector Search",
            "LLM Fine-tuning & Prompt Engineering",
            "NLP & Text Classification",
            "Production ML Deployment"
          ]
        },
        {
          category: "Data & Infrastructure",
          icon: "zap",
          items: [
            "Data Pipelines & ETL",
            "ML Model Evaluation & Testing",
            "A/B Testing & Metrics",
            "Database Design"
          ]
        },
        {
          category: "Engineering",
          icon: "code",
          items: [
            "Python (Expert)",
            "System Design",
            "API Development",
            "End-to-End Project Execution"
          ]
        }
      ]
    },

    // About/Background Section
    about: {
      title: "Background",
      content: "MSc in Computer Science from IMT Atlantique (French top-10 engineering school). 8+ years software engineering experience, 5+ years in data science and AI. Built production ML systems at monday.com (RAG, LLM agents, Sidekick), Tastewise (TasteGPT, entity matching, audience models), and Fiverr (anomaly detection). Fluent in French and English, conversational Hebrew. Now available for freelance consulting and project work."
    },

    // Contact Section
    contact: {
      title: "Let's Work Together",
      subtitle: "I'm available for consulting, project work, or technical discussions. Let's build something great.",
      buttons: [
        {
          label: "Email",
          href: "mailto:axel.strubel@gmail.com",
          icon: "mail"
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/axel-strubel-055815b3/",
          icon: "linkedin",
          external: true
        },
        {
          label: "GitHub",
          href: "https://github.com",
          icon: "github",
          external: true
        }
      ]
    },

    // Footer
    footer: {
      text: "Built with React. Remote - Available Worldwide."
    }
  },

  fr: {
    // Hero Section
    hero: {
      title: "Ingénieur IA &",
      titleHighlight: "ML en Production",
      subtitle: "Systèmes IA et LLM en production, RAG complexes. 5+ ans ML/IA, 8+ ans engineering. Créateur de Sidekick, TasteGPT et Service AI à l'échelle.",
      cta: {
        primary: "Voir mes Projets",
        secondary: "Me Contacter"
      },
      scroll: "Scroll pour explorer"
    },

    // Navigation
    nav: {
      name: "Axel",
      links: [
        { label: "Projets", href: "#work" },
        { label: "À propos", href: "#about" },
        { label: "Contact", href: "#contact" }
      ]
    },

    // Featured Projects Section
    projects: {
      title: "Projets en Vedette",
      subtitle: "Projets sélectionnés montrant ML, infrastructure et impact",
      items: [
        {
          id: 1,
          title: "Service AI : Système de Résolution de Tickets avec RAG",
          company: "monday.com",
          impact: "Taux de résolution 55%, réduction des réponses nulles de 78.8% → 46.7%",
          description: "Conception et déploiement d'un système RAG end-to-end sur l'historique des tickets pour générer des résolutions alimentées par l'IA. Création d'un pipeline auto-ingest générant 15K+ tickets valides/semaine, analyse des causes de défaillances IA, et construction d'une base de données Service AI Q&A.",
          technologies: ["RAG", "LLM", "LangChain", "Python", "Data Pipelines", "Classification"],
          metrics: [
            "15 000+ tickets/semaine",
            "78.8% → 46.7% taux null",
            "60 000+ points de données/mois"
          ],
          link: null
        },
        {
          id: 2,
          title: "Sidekick : Assistant IA de monday.com",
          company: "monday.com",
          impact: "Amélioration critique du produit IA core",
          description: "Amélioration de la fiabilité et de la logique de sensibilisation aux capacités pour réduire les hallucinations. Unification du comportement Board Expert sur tous les outils de modification, optimisation du prompt engineering pour réduire l'utilisation des tokens de 40%, amélioration du formatage et renforcement de la compréhension de la plateforme.",
          technologies: ["Prompt Engineering", "LLM Optimization", "Agent Design", "Python"],
          metrics: [
            "40% réduction de tokens",
            "Hallucinations réduites",
            "Unification multi-outils"
          ],
          link: null
        },
        {
          id: 3,
          title: "TasteGPT : Système Multi-Agent Intelligence Culinaire",
          company: "Tastewise",
          impact: "Système LLM end-to-end pour analyse et découverte de tendances alimentaires",
          description: "Construction de TasteGPT avec routeurs de pages/filtres et RAG sur base de connaissances interne. Conception d'un pipeline multi-agent AutoGen pour génération automatique de rapports de tendances, orchestrant récupération, analyse et composition. Implémentation de découverte d'ingrédients & tendances via spaCy NER, et construction de modèles d'audience.",
          technologies: ["AutoGen", "RAG", "LangChain", "LLMs", "NLP", "spaCy", "scikit-learn"],
          metrics: [
            "Pipeline multi-agent",
            "Découverte de tendances",
            "Segmentation d'audience"
          ],
          link: null
        },
        {
          id: 4,
          title: "Clustering de Chaînes Restaurants & Entity Matching",
          company: "Tastewise",
          impact: "Système global traitant 100K+ entités restaurants avec matching multi-signaux",
          description: "Conception et productionalisation d'un système de clustering de chaînes restaurants utilisant normalisation de parseurs, matching multi-signaux (nom/site/téléphone/logo) et généralisation par pays. Création d'un système de matching LinkedIn pour chaînes utilisant scoring multi-feature. Pipelines de découverte de marques à partir de données externes bruitées (Walmart, Open Food Facts).",
          technologies: ["Entity Matching", "Clustering", "Data Cleaning", "MongoDB", "Elasticsearch"],
          metrics: [
            "100K+ entités",
            "Support multi-pays",
            "Intégration données externes"
          ],
          link: null
        }
      ]
    },

    // Expertise Section
    expertise: {
      title: "Expertise",
      subtitle: "Connaissance technique approfondie en IA, ML et systèmes production",
      categories: [
        {
          category: "IA & Machine Learning",
          icon: "brain",
          items: [
            "Systèmes RAG & Recherche Vectorielle",
            "Fine-tuning LLM & Prompt Engineering",
            "NLP & Classification de Texte",
            "Déploiement ML en Production"
          ]
        },
        {
          category: "Data & Infrastructure",
          icon: "zap",
          items: [
            "Pipelines Data & ETL",
            "Évaluation & Test de Modèles ML",
            "A/B Testing & Métriques",
            "Design de Base de Données"
          ]
        },
        {
          category: "Engineering",
          icon: "code",
          items: [
            "Python (Expert)",
            "System Design",
            "Développement API",
            "Exécution Projet End-to-End"
          ]
        }
      ]
    },

    // About/Background Section
    about: {
      title: "Parcours",
      content: "Ingénieur diplômé de l'IMT Atlantique (top 10 écoles d'ingénierie françaises). 8+ ans d'expérience en software engineering, 5+ ans en data science et IA. Créateur de systèmes ML production chez monday.com (RAG, agents LLM, Sidekick), Tastewise (TasteGPT, entity matching, audience models) et Fiverr (détection d'anomalies). Français natif, anglais courant, allemand intermédiaire. Actuellement disponible en freelance pour missions de consulting et développement de projets."
    },

    // Contact Section
    contact: {
      title: "Travaillons Ensemble",
      subtitle: "Je suis disponible pour du consulting, des missions de projet ou des discussions techniques. Construisons quelque chose de formidable.",
      buttons: [
        {
          label: "Email",
          href: "mailto:axel.strubel@gmail.com",
          icon: "mail"
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/axel-strubel-055815b3/",
          icon: "linkedin",
          external: true
        },
        {
          label: "GitHub",
          href: "https://github.com",
          icon: "github",
          external: true
        }
      ]
    },

    // Footer
    footer: {
      text: "Built with React. Remote - Disponible Mondialement."
    }
  }
};

// Export individual sections for easier access
export const getContent = (language = 'en', section = null) => {
  const data = portfolioData[language];
  return section ? data[section] : data;
};

// Helper function to get projects by language
export const getProjects = (language = 'en') => {
  return portfolioData[language].projects.items;
};

// Helper function to get expertise by language
export const getExpertise = (language = 'en') => {
  return portfolioData[language].expertise.categories;
};

// Helper function to get hero content by language
export const getHero = (language = 'en') => {
  return portfolioData[language].hero;
};

// Helper function to get contact info by language
export const getContact = (language = 'en') => {
  return portfolioData[language].contact;
};

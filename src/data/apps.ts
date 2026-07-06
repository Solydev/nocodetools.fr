import type { App } from '../types/app'

export const apps: App[] = [
  {
    slug: 'finance-pilot',
    title: 'Finance Pilot',
    tagline: 'Tableau de bord financier pour piloter ventes, marges et indicateurs clés.',
    description:
      'Finance Pilot est un dashboard interne conçu pour centraliser les données financières d\'une PME. Il connecte les ventes, les achats et les marges en temps réel, avec des graphiques interactifs et des exports PDF automatisés. Le tout pensé pour des utilisateurs non-techniques qui ont besoin de données lisibles, pas de tableaux Excel cryptiques.',
    category: 'Finance',
    status: 'Live',
    stack: ['Django', 'Chart.js', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Tableau de bord multi-indicateurs en temps réel',
      'Graphiques interactifs (revenus, marges, tendances)',
      'Export PDF des rapports mensuels',
      'Gestion multi-utilisateur avec rôles',
      'Synchronisation automatique des données comptables',
    ],
    screenshots: {
      main: '/apps/finance-pilot/main.svg',
      gallery: [
        '/apps/finance-pilot/screen-1.svg',
        '/apps/finance-pilot/screen-2.svg',
        '/apps/finance-pilot/screen-3.svg',
      ],
    },
    links: {
      github: 'https://github.com/solydev/finance-pilot',
      demo: 'https://finance-pilot.demo.nocodetools.fr',
    },
    featured: true,
    year: 2024,
  },
  {
    slug: 'agribilan',
    title: 'Agribilan',
    tagline: 'Outil de gestion financière d\'exploitation agricole, pour savoir si chaque culture rapporte ou fait perdre de l\'argent.',
    description:
      'Agribilan aide les exploitants agricoles à piloter leurs finances par culture plutôt qu\'à l\'échelle de toute l\'exploitation. Chaque dépense et recette peut être affectée à une culture précise, réparties entre plusieurs, ou partagée automatiquement au prorata des surfaces. L\'application calcule en temps réel le résultat, le rendement à l\'hectare et le coût au quintal de chaque culture, avec une comparaison possible entre plusieurs campagnes. Déployée en production pour une exploitation réelle, elle remplace un suivi jusque-là éclaté entre tableurs et factures papier.',
    category: 'Agriculture',
    status: 'Live',
    stack: ['Next.js', 'Prisma', 'MySQL', 'NextAuth.js', 'Tailwind CSS'],
    features: [
      'Saisie rapide des dépenses et recettes, affectation par culture',
      'Répartition automatique des charges communes au prorata des surfaces',
      'Synthèse par culture : résultat, rendement/ha, coût au quintal',
      'Comparaison multi-campagnes côte à côte',
      'Exports CSV détaillés et au format comptable',
    ],
    screenshots: {
      main: '/apps/agribilan/main.svg',
      gallery: [
        '/apps/agribilan/screen-1.svg',
        '/apps/agribilan/screen-2.svg',
        '/apps/agribilan/screen-3.svg',
      ],
    },
    links: {
      github: 'https://github.com/solydev/agribilan',
      demo: 'https://agribilan.fr',
    },
    featured: true,
    year: 2026,
  },
  {
    slug: 'matera-enhancer',
    title: 'Matera Enhancer',
    tagline: 'Extension qui améliore radicalement l\'expérience sur Matera, l\'outil de gestion de copropriété.',
    description:
      'Matera Enhancer est une extension navigateur qui corrige les frictions UX de la plateforme Matera : navigation améliorée, raccourcis clavier, exports enrichis et alertes personnalisées. Développée en réponse aux retours d\'une dizaine de syndics bénévoles qui perdaient un temps précieux sur des tâches répétitives.',
    category: 'Productivity',
    status: 'Live',
    stack: ['TypeScript', 'Chrome Extension API', 'Airtable', 'Webpack'],
    features: [
      'Navigation enrichie avec raccourcis clavier',
      'Export amélioré vers Excel et PDF',
      'Alertes personnalisables sur les échéances',
      'Synchronisation automatique avec Airtable',
      'Interface de paramétrage intuitive',
    ],
    screenshots: {
      main: '/apps/matera-enhancer/main.svg',
      gallery: [
        '/apps/matera-enhancer/screen-1.svg',
        '/apps/matera-enhancer/screen-2.svg',
        '/apps/matera-enhancer/screen-3.svg',
      ],
    },
    links: {
      github: 'https://github.com/solydev/matera-enhancer',
      demo: 'https://matera-enhancer.demo.nocodetools.fr',
    },
    featured: true,
    year: 2025,
  },
  {
    slug: 'airtable-automator',
    title: 'Airtable Automator',
    tagline: 'Hub d\'automatisations métier connecté à Airtable pour éliminer les tâches répétitives.',
    description:
      'Airtable Automator est un outil interne qui connecte Airtable à un ensemble d\'automatisations métier : envois d\'emails conditionnels, génération de documents, synchronisation avec des APIs tierces et déclenchement de workflows complexes. L\'interface permet à des non-développeurs de configurer et monitorer leurs automatisations sans toucher au code.',
    category: 'Automation',
    status: 'In Progress',
    stack: ['Python', 'Airtable API', 'Make', 'FastAPI'],
    features: [
      'Interface de configuration no-code des automatisations',
      'Connecteurs natifs : email, Slack, Drive, Notion',
      'Monitoring des exécutions en temps réel',
      'Gestion des erreurs et relances automatiques',
      'Logs détaillés et alertes par email',
    ],
    screenshots: {
      main: '/apps/airtable-automator/main.svg',
      gallery: [
        '/apps/airtable-automator/screen-1.svg',
        '/apps/airtable-automator/screen-2.svg',
        '/apps/airtable-automator/screen-3.svg',
      ],
    },
    links: {
      github: 'https://github.com/solydev/airtable-automator',
    },
    featured: false,
    year: 2025,
  },
  {
    slug: 'markdown-to-pdf',
    title: 'Markdown to PDF',
    tagline: 'Outil de conversion de documents Markdown en PDF avec export facile.',
    description:
      'Markdown to PDF est un outil interne qui permet de convertir des documents Markdown en PDF avec un export facile et rapide. L\'interface permet à des non-développeurs de générer des PDF sans toucher au code.',
    category: 'Productivity',
    status: 'Live',
    stack: ['React', 'Bootstrap', 'GitHub pages', 'TypeScript'],
    features: [
      'Conversion rapide de Markdown en PDF',
      'Interface simple et intuitive',
      'Export facile et rapide',
      'Support de la syntaxe Markdown standard',
    ],
    screenshots: {
      main: '/apps/markdown-to-pdf/main.png',
      gallery: [
        '/apps/markdown-to-pdf/screen-1.png',
      ],
    },
    links: {
      github: 'https://github.com/romain-koenig/markdown-to-pdf',
    },
    featured: false,
    year: 2023,
  },
  {
    slug: 'kronos',
    title: 'Kronos timesheets',
    tagline: 'Outil de gestion des feuilles de temps pour les équipes.',
    description:
      'Kronos timesheets est un outil interne qui permet de gérer les feuilles de temps des employés de manière efficace et intuitive. Permet de suivre les heures travaillées, les projets associés et de générer des rapports pour la gestion des ressources humaines.',
    category: 'Productivity',
    status: 'Live',
    stack: ['React', 'Bootstrap', 'GitHub pages', 'TypeScript'],
    features: [
      'Suivi des heures travaillées',
      'Gestion des projets associés',
      'Génération de rapports pour la gestion des ressources humaines',
      'Interface simple et intuitive',
    ],
    screenshots: {
      main: '/apps/kronos/main.png',
      gallery: [
        '/apps/kronos/screen-1.png',
      ],
    },
    links: {
      github: 'https://github.com/Solydev/kronos',
    },
    featured: false,
    year: 2026  ,
  },
  {
    slug: 'ocarina-stories',
    title: 'Ocarina Stories',
    tagline: 'Automatisation intelligente du traitement de podcasts pour enfants.',
    description:
      'Ocarina Stories est un script Python qui surveille des flux RSS de podcasts, télécharge les nouveaux épisodes, coupe automatiquement les génériques et organise les fichiers audio prêts à écouter en continu. Le projet répond à un besoin très concret : rendre l\'écoute d\'histoires pour enfants plus fluide, sans interruptions ni traitement manuel.',
    category: 'Automation',
    status: 'Live',
    stack: ['Python', 'FFmpeg', 'SQLite', 'RSS/XML', 'JSON'],
    features: [
      'Surveillance de plusieurs flux RSS avec configuration par podcast',
      'Téléchargement automatique des nouveaux épisodes audio',
      'Coupe des génériques de début et de fin avec paramètres ajustables',
      'Application de fade in/out pour une écoute fluide',
      'Base SQLite pour éviter les doublons et suivre les épisodes traités',
      'Organisation automatique des fichiers par podcast',
    ],
    screenshots: {
      main: '/apps/ocarina-stories/main.png',
      gallery: [],
    },
    links: {
      github: 'https://github.com/romain-koenig/ocarina_stories',
      demo: 'https://ocarina.kromatic.fr/',
    },
    featured: false,
    year: 2025,
  },
{
    slug: 'hiit-training',
    title: 'HIIT Training',
    tagline: 'Application web de séances HIIT avec suivi de progression.',
    description:
      'Daily Sport est une application web statique pour suivre des entraînements quotidiens à domicile. Elle propose des routines cardio chronométrées (avec ou sans équipement) et un mode Force avec saisie libre des répétitions, historique des séances et suivi de progression par exercice.',
    category: 'Fitness',
    status: 'Live',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express'],
    features: [
      'Routines cardio avec ou sans équipement, transitions automatiques entre exercices',
      'Minuteur avec indicateurs visuels (exercice / repos / dernières secondes)',
      'Mode Force : saisie libre des répétitions par série et par exercice',
      'Suivi de progression avec historique des séances en localStorage',
      'Routines personnalisables : ajout, suppression et réorganisation des exercices',
      'Design responsive adapté à la pratique sur mobile',
    ],
    screenshots: {
      main: '/apps/hiit-training/main.png',
      gallery: [
        '/apps/hiit-training/screen-1.png',
        '/apps/hiit-training/screen-2.png',],
    },
    links: {
      github: 'https://github.com/romain-koenig/daily-sport',
      demo: 'https://hiit.kromatic.fr',
    },
    featured: false,
    year: 2024,
  },
]

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug)
}

export function getFeaturedApps(): App[] {
  return apps.filter((a) => a.featured)
}

export function getCategories(): string[] {
  return [...new Set(apps.map((a) => a.category))]
}

export function getAllStacks(): string[] {
  return [...new Set(apps.flatMap((a) => a.stack))]
}

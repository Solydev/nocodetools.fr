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
    slug: 'farmops',
    title: 'FarmOps',
    tagline: 'Interface de gestion agricole avec onboarding progressif et suivi parcelles.',
    description:
      'FarmOps aide les exploitants agricoles à gérer leurs parcelles, suivre les cultures et planifier les interventions. L\'onboarding progressif permet à des utilisateurs peu habitués aux outils numériques de prendre en main l\'application en quelques minutes. L\'interface mobile-first est pensée pour être utilisée sur le terrain, même sans bonne connexion.',
    category: 'Agriculture',
    status: 'Prototype',
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Onboarding progressif en 4 étapes',
      'Carte interactive des parcelles',
      'Suivi des cultures et interventions',
      'Interface mobile-first offline-friendly',
      'Notifications de rappel saisonnières',
    ],
    screenshots: {
      main: '/apps/farmops/main.svg',
      gallery: [
        '/apps/farmops/screen-1.svg',
        '/apps/farmops/screen-2.svg',
        '/apps/farmops/screen-3.svg',
      ],
    },
    links: {
      github: 'https://github.com/solydev/farmops',
      demo: 'https://farmops.demo.nocodetools.fr',
    },
    featured: true,
    year: 2024,
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

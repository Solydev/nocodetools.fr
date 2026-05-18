# nocodetools.fr

Site vitrine pour présenter des apps développées en vibe coding — utiles, propres, rapidement prototypées.

**Stack :** Astro · TypeScript · Tailwind CSS v4

---

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement (http://localhost:4321)
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## Ajouter une nouvelle app

C'est volontairement simple : deux étapes seulement.

### Étape 1 — Ajouter les images

Créer un dossier dans `public/apps/` avec le slug de votre app :

```
public/apps/
└── mon-app/
    ├── main.png        ← screenshot principal (format 16:9 recommandé, ex: 1200×675px)
    ├── screen-1.png
    ├── screen-2.png
    └── screen-3.png
```

Les images peuvent être en `.png`, `.jpg`, `.webp` ou `.svg`.

### Étape 2 — Ajouter l'objet dans `src/data/apps.ts`

Ouvrir `src/data/apps.ts` et ajouter un objet dans le tableau `apps` :

```ts
{
  slug: 'mon-app',                         // Identifiant unique, utilisé dans l'URL (/apps/mon-app)
  title: 'Mon App',                        // Nom affiché
  tagline: 'Une phrase courte percutante.', // Accroche (visible sur les cards)
  description: 'Description complète...',  // Paragraphe détaillé (page détail)
  category: 'Finance',                     // Catégorie — utilisée pour les filtres
  status: 'Live',                          // 'Live' | 'Prototype' | 'Private' | 'In Progress'
  stack: ['Django', 'PostgreSQL'],         // Technologies utilisées
  features: [                              // Fonctionnalités clés (liste à puces)
    'Export PDF automatisé',
    'Tableau de bord multi-utilisateur',
  ],
  screenshots: {
    main: '/apps/mon-app/main.png',
    gallery: [
      '/apps/mon-app/screen-1.png',
      '/apps/mon-app/screen-2.png',
      '/apps/mon-app/screen-3.png',
    ],
  },
  links: {
    github: 'https://github.com/solydev/mon-app',   // optionnel
    demo: 'https://demo.mon-app.fr',                // optionnel
  },
  featured: true,   // true = apparaît sur la homepage
  year: 2025,       // optionnel
}
```

C'est tout. L'app apparaît automatiquement dans :
- la homepage (si `featured: true`)
- la page `/apps`
- sa propre page `/apps/mon-app`

---

## Structure du projet

```
/
├── public/
│   ├── favicon.svg
│   └── apps/
│       └── [slug]/         ← images de chaque app
├── src/
│   ├── types/
│   │   └── app.ts          ← interface TypeScript de l'App
│   ├── data/
│   │   └── apps.ts         ← source unique de vérité pour toutes les apps
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── AppCard.astro
│   │   ├── AppGallery.astro
│   │   ├── TechBadge.astro
│   │   ├── StatusBadge.astro
│   │   ├── SectionTitle.astro
│   │   └── CTASection.astro
│   ├── layouts/
│   │   └── Layout.astro    ← layout de base avec SEO et Open Graph
│   ├── pages/
│   │   ├── index.astro     ← homepage
│   │   ├── apps/
│   │   │   ├── index.astro     ← listing + filtres
│   │   │   └── [slug].astro    ← page détail
│   │   └── 404.astro
│   └── styles/
│       └── global.css      ← design tokens Tailwind v4 + animations
└── package.json
```

---

## Schéma de données complet

```ts
type AppStatus = 'Live' | 'Prototype' | 'Private' | 'In Progress'

interface App {
  slug: string           // URL-friendly, unique
  title: string          // Nom de l'app
  tagline: string        // Accroche courte
  description: string    // Description longue
  category: string       // Catégorie (Finance, Automation, SaaS, etc.)
  status: AppStatus      // Statut affiché sous forme de badge coloré
  stack: string[]        // Technologies (ex: ['Django', 'PostgreSQL'])
  features: string[]     // Fonctionnalités clés
  screenshots: {
    main: string         // Chemin vers le screenshot principal
    gallery: string[]    // 2-4 screenshots supplémentaires
  }
  links: {
    github?: string      // Lien GitHub (optionnel)
    demo?: string        // Lien démo (optionnel)
  }
  featured?: boolean     // Affiché sur la homepage si true
  year?: number          // Année de création (optionnel)
}
```

---

## Déploiement

Le site génère des pages statiques, compatible avec n'importe quel hébergeur statique.

**Vercel** (recommandé) :
```bash
npm i -g vercel
vercel
```

**Netlify** :
```bash
npm run build
# Déployer le dossier dist/
```

**GitHub Pages** : ajouter `site: 'https://nocodetools.fr'` dans `astro.config.mjs`, puis utiliser l'action officielle Astro.

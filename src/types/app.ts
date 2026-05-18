export type AppStatus = 'Live' | 'Prototype' | 'Private' | 'In Progress'

export interface App {
  slug: string
  title: string
  tagline: string
  description: string
  category: string
  status: AppStatus
  stack: string[]
  features: string[]
  screenshots: {
    main: string
    gallery: string[]
  }
  links: {
    github?: string
    demo?: string
  }
  featured?: boolean
  year?: number
}

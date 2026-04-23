export const en = {
  // Metadata
  site: {
    title: 'Zoe Porta — Frontend Developer',
    description: 'Portfolio of Zoe Porta, frontend developer.',
  },

  // Navigation
  nav: {
    about: 'about',
    stack: 'stack',
    projects: 'projects',
    contact: 'contact',
  },

  // Hero
  hero: {
    role: 'Frontend Developer · Creative Coder',
    tagline: 'The craft is in the details',
    subtitle:
      'Frontend developer. I build things that are as solid underneath as they are beautiful on the surface.',
    cta_projects: 'See projects',
    cta_cv: 'View my CV',
    skills: [
      'Lateral thinking',
      'Multipotential',
      'Makes complexity feel simple',
      'Informal tech lead',
      'Owns the design',
      'Documents for the next dev',
      'AI image generation',
      'SVG vectorization',
      'TDD',
      'CI/CD',
    ],
  },

  // Tech band
  tech: {
    label: 'tech stack',
  },

  // Projects
  projects: {
    label: 'selected work',
    title: 'Projects',
    wishin: {
      period: "master's · 2024",
      description:
        'Universal wishlist app. Original concept, clean architecture, TDD, DDD, CI/CD with GitHub Actions and Expo. Assets designed by me.',
    },
    hctp: {
      period: 'real client · 2025',
      description:
        'Turnkey official website for a metal band. Full design, content and development. Logo animation with Framer Motion, CDN, SEO #1 for "hctp band".',
    },
    crafty: {
      period: 'bootcamp · 2020',
      description:
        'Full-stack marketplace: design, MySQL database, REST API with Express and Vue frontend. Legacy project — code visible on GitHub.',
    },
    link_live: 'Visit site',
    link_repo: 'GitHub',
  },

  // Contact
  contact: {
    label: "let's talk?",
    title: 'Contact',
    cta: 'Send message',
  },

  // Footer
  footer: {
    credit: 'crafted with care by',
  },
} as const;

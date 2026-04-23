export const es = {
  // Metadata
  site: {
    title: 'Zoe Porta — Frontend Developer',
    description: 'Portfolio de Zoe Porta, desarrolladora frontend.',
  },

  // Navigation
  nav: {
    about: 'sobre mí',
    stack: 'stack',
    projects: 'proyectos',
    contact: 'contacto',
  },

  // Hero
  hero: {
    role: 'Frontend Developer · Creative Coder',
    tagline: 'Hola, soy',
    subtitle: 'Construyo cosas tan sólidas por dentro como bonitas por fuera.',
    cta_projects: 'Ver proyectos',
    cta_cv: 'Consulta mi CV',
    skills: [
      'Pensamiento lateral',
      'Multipotencial',
      'Simplifica lo complejo',
      'Tech lead informal',
      'Diseño propio',
      'Documenta para el siguiente',
      'Generación de imágenes con IA',
      'Vectorización SVG',
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
    label: 'trabajo seleccionado',
    title: 'Proyectos',
    wishin: {
      period: 'máster · 2026',
      description:
        'App de listas de deseos universales. Idea propia, clean architecture, TDD, DDD, CI/CD con GitHub Actions y Expo. Assets diseñados por mí.',
    },
    hctp: {
      period: 'cliente real · 2026',
      description:
        'Web oficial llave en mano para banda de metal. Diseño, contenido y desarrollo completos. Animación de logo con Framer Motion, CDN, SEO #1 para "hctp band".',
    },
    crafty: {
      period: 'bootcamp · 2020',
      description:
        'Marketplace fullstack completo: diseño, base de datos MySQL, API REST con Express y frontend Vue. Proyecto legacy — código visible en GitHub.',
    },
    link_live: 'Ver web',
    link_repo: 'GitHub',
  },

  // Contact
  contact: {
    label: '¿hablamos?',
    title: 'Contacto',
    cta: 'Enviar mensaje',
  },

  // Footer
  footer: {
    credit: 'crafted with care by',
  },
} as const;

export type TranslationKey = keyof typeof es;

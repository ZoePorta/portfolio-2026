export const gl = {
  // Metadata
  site: {
    title: 'Zoe Porta — Frontend Developer',
    description: 'Portfolio de Zoe Porta, desenvolvedora frontend.',
  },

  // Navigation
  nav: {
    about: 'sobre min',
    stack: 'stack',
    projects: 'proxectos',
    contact: 'contacto',
  },

  // Hero
  hero: {
    role: 'Frontend Developer · Creative Coder',
    tagline: 'Ola, son',
    subtitle: 'Construo cousas tan sólidas por dentro como bonitas por fóra.',
    cta_projects: 'Ver proxectos',
    cta_cv: 'Consulta o meu CV',
    skills: [
      'Pensamento lateral',
      'Multipotencial',
      'Simplifica o complexo',
      'Tech lead informal',
      'Deseño propio',
      'Documenta para o seguinte',
      'Xeración de imaxes con IA',
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
    label: 'traballo seleccionado',
    title: 'Proxectos',
    wishin: {
      period: 'máster · 2024',
      description:
        'App de listas de desexos universais. Idea propia, clean architecture, TDD, DDD, CI/CD con GitHub Actions e Expo. Assets deseñados por min.',
    },
    hctp: {
      period: 'cliente real · 2025',
      description:
        'Web oficial llave en man para banda de metal. Deseño, contido e desenvolvemento completos. Animación de logo con Framer Motion, CDN, SEO #1 para "hctp band".',
    },
    crafty: {
      period: 'bootcamp · 2020',
      description:
        'Marketplace fullstack completo: deseño, base de datos MySQL, API REST con Express e frontend Vue. Proxecto legacy — código visible en GitHub.',
    },
    link_live: 'Ver web',
    link_repo: 'GitHub',
    video_button: 'Ver demo',
  },

  // Contact
  contact: {
    label: 'falamos?',
    title: 'Contacto',
    cta: 'Enviar mensaxe',
    form: {
      send: 'Enviar',
      back: 'Volver',
      name_label: 'Nome',
      email_label: 'Email',
      message_label: 'Mensaxe',
      name_placeholder: 'O teu nome',
      email_placeholder: 'O teu email',
      message_placeholder: 'Escribe a túa mensaxe aquí...',
      success: 'Mensaxe enviada! Poñereime en contacto contigo en breve.',
      error: 'Algo foi mal. Tenta de novo.',
    },
  },

  // Footer
  footer: {
    credit: 'feito con xeito por',
  },
} as const;

# Portfolio zoecodes.me — Project Context

## About

Zoe Porta. Full-stack developer with a strong frontend inclination.
4.5 years experience as a full-stack bootcamp instructor (HTML, CSS, JS, Node, React),
supervising student projects and acting as de facto tech lead with informal SCRUM methodology.
Master's degree in AI-assisted development: TDD, hexagonal architecture, security, responsible AI usage.
Published real-world projects. Artistic background (crochet, resin jewelry, clay, color theory).

## Portfolio goal

Primary presentation as a frontend developer.
Teaching experience is mentioned to highlight transferable skills
(problem-solving, concept simplification, informal technical leadership) — not as the main focus.
Strongly feminine aesthetic with impeccable technical quality:
the aesthetic is a statement of intent, not a concession.

---

## Tech stack

- **Package manager:** pnpm
- **Framework:** Astro (islands architecture, static output, optimal Lighthouse scores)
- **Interactivity:** React islands — only where genuine interactivity is needed
- **Animations:** Motion library
  - Simple animations (scroll reveals, fade-ins, entrance effects): Motion vanilla in `.astro` files — no React island needed
  - Complex animations requiring component logic or Framer Motion APIs: React island with `client:visible`
- **Styles:** Native CSS with global custom properties. No CSS frameworks.
- **Hosting:** Netlify (domain zoecodes.me managed there)
- **Contact form:** Netlify Forms (no backend required)
- **i18n:** Astro native i18n — routes `/es/`, `/en/`, `/gl/`

### React islands convention

All React components live in `src/components/react/`.
Imported in Astro with `client:visible` unless immediate load is required (`client:load`).
Aceternity UI components are React islands — specified in each relevant task.

### Animation decision rule

> Can this animation be done with Motion vanilla in an `.astro` file?
> If yes → do it there. If it needs React state or a specific Aceternity component → React island.

---

## Color palette

```css
:root {
  /* Brand colors */
  --color-sakura: #f5c4e2; /* sakura pink — primary accent */
  --color-lavender: #c5bae8; /* lavender */
  --color-periwinkle: #b1bef2; /* periwinkle — cool accent */
  --color-ice: #dceaf9; /* ice blue */
  --color-blush: #fee3ec; /* blush — very soft backgrounds */

  /* Text */
  --color-text-primary: #2d1f3d;
  --color-text-secondary: #7a6b9a;

  /* Surfaces */
  --color-surface: #faf7fd;
  --color-white: #ffffff;

  /* Gradients mix sakura + lavender + periwinkle + ice */
}

/* Dark mode — redefine variables only, no component changes needed */
[data-theme='dark'] {
  --color-text-primary: #f0eaf8;
  --color-text-secondary: #c5bae8;
  --color-surface: #1a1230;
  --color-white: #231840;
  /* Brand accent colors remain the same — they work on dark backgrounds */
}
```

No turquoise. No green. Floral, ethereal, feminine range.
Gradients blend sakura + lavender + periwinkle + ice.
Dark mode is architecturally supported from day one via CSS variables.
Full dark mode implementation is deferred — the foundation must be solid before adding it.

---

## Typography

- **Display / hero tagline:** Bonheur Royale (Google Fonts) — calligraphic script, elegant,
  readable at large sizes. Used only for the hero tagline and large section headings.
- **Body / UI / all other text:** Plus Jakarta Sans (Google Fonts) — geometric sans,
  modern personality, excellent readability. Pairs well with calligraphic display fonts through contrast.
- Never Inter, Roboto, or system fonts as an aesthetic choice.
- Script fonts are never used below 32px.

---

## Languages

Spanish (ES) — primary
English (EN)
Galician (GL)

Translation strings in: `src/i18n/es.ts`, `en.ts`, `gl.ts`
The tagline "The craft is in the details" stays in English across all three versions — intentional aesthetic choice.
Galician translations must be reviewed manually — models tend to introduce Spanish or Portuguese interference.

### Route structure

Single dynamic route handles all languages:

- src/pages/[lang]/index.astro — generates /es/, /en/, /gl/ via getStaticPaths
- src/pages/index.astro — redirects to /es/

Locale is validated in each page and falls back to /es/ if invalid.

### Documentation language

All code comments, commit messages, variable names, and technical documentation are in **English**,
following open source convention and making the codebase readable as a professional sample.
UI copy and content are in the language of each route.

---

## Accessibility

Accessibility is non-negotiable — both an ethical commitment and a frontend skill signal.

- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<article>`, etc.)
- All images have meaningful `alt` attributes
- Color contrast meets WCAG AA minimum (4.5:1 for body text, 3:1 for large text)
- Full keyboard navigation
- Focus indicators visible and styled consistently
- `prefers-reduced-motion`: all animations disabled or reduced when active
- Netlify Forms: labels associated with inputs, error messages accessible
- Dark mode toggle (when implemented): persisted in `localStorage`,
  respects `prefers-color-scheme` as default

---

## Section structure

### 1. Hero

- Background: animated gradient (Aceternity Background Gradient Animation, custom palette)
- Layout: two-column CSS Grid — photo left, text right
- Photo of Zoe on an organic blob shape in palette gradient, overflowing above the container
- Tagline: "The craft is in the details" — display font, large
  ⚠️ Placeholder — revisit before launch
- Subtitle: role + brief description (TBD)
- Soft/power skill bubbles: sequential fade-in on load, static afterwards, scale on hover
  Content: "Lateral thinking", "Makes complexity feel simple", "Informal tech lead",
  "Owns the design", "Documents for the next dev", "AI image generation", "SVG vectorization"
- CTAs: "Ver proyectos" (scroll anchor) + "Consulta mi CV" (opens Canva link in new tab)
- Social links: LinkedIn, GitHub

### 2. Tech stack band

- Background: `--color-surface`
- Grid of technology icons inside 4-point star shapes
- SVG icons from Devicons or Simple Icons (open license)
- Star fill colors alternating between lavender, periwinkle, and sakura
- Stack: JavaScript, TypeScript, React, Expo, Vue, Node.js,
  Express, MySQL, CSS, Git, pnpm

### 3. Projects

- Background: white
- 3 main project cards

**Wishin** (master's final project, 2024)

- URL: https://wishin.es | Repo: https://github.com/ZoePorta/wishin
- React Native · Expo · TypeScript · BaaS
- Clean architecture · TDD · DDD · ADRs documented
- CI/CD with GitHub Actions · Husky · ESLint · CodeRabbit
- All assets designed by Zoe (avatars, placeholders, vectorized logo)
- Landing image AI-generated through iterative prompting
- 100% responsive

**HCTP Band** (real client, 2025)

- URL: https://hctp.band | Repo: https://github.com/ZoePorta/hctp-web-v2
- Next.js · TypeScript · Framer Motion
- Full design, content, and concept from minimal brief
- Complex logo animation with Framer Motion (own logic)
- CDN for heavy assets (Cloudinary) · SEO rank #1 for "hctp band"
- ADRs documented · HANDOVER.md for future developers
- 100% responsive

**Crafty** (bootcamp final project, 2020)

- Repo: https://github.com/ZoePorta/Crafty (no public URL — legacy with known security debt)
- Vue.js · Express · MySQL
- Complete ecommerce: design, database, REST API, and frontend solo
- Multi-vendor system + sponsored stores on landing page
- Presented with screenshots + repo. Legacy status stated explicitly.

### 4. Contact

- Background: photographic floral image (pastel, spring) — parallax fixed,
  revealed as the projects section scrolls away — "hole in the wall" effect
- Foreground: glassmorphism card (rgba white + backdrop-filter blur + subtle border)
- Card content: LinkedIn, GitHub, hola@zoecodes.me
- Functional form via Netlify Forms

### Section transitions

- Wave-shaped SVG dividers — no straight lines
- Parallax effect on contact section (fixed background, content scrolls over it)

---

## Decorative elements

- Organic blob shapes in palette gradient (photo backgrounds, section accents)
- No galaxies, constellations, or space elements
- Style: floral, ethereal, delicate — not kawaii, not dark, not cold minimalism

---

## Quality targets

- Lighthouse: 95+ across all metrics
- 100% responsive (mobile first)
- SEO: meta tags, og:image, Astro-generated sitemap
- `prefers-reduced-motion` respected everywhere
- No vibe coding: every technical decision must be understood and reviewed before committing

---

## What this portfolio is NOT

- Not a freelance portfolio
- Not a teaching showcase (though context is acknowledged)
- Not generic: every aesthetic decision is intentional

# zoecodes.me — Portfolio

Personal portfolio of [Zoe Porta](https://zoecodes.me), Software Engineer. Designed and developed from scratch, trilingual (Spanish, English and Galician), with a focus on performance, accessibility and a distinctive visual identity.

**Live site:** [zoecodes.me](https://zoecodes.me)

## Tech Stack

- **Framework:** Astro 6 (static output, islands architecture)
- **Interactive islands:** React 19, hydrated only where needed (`client:idle`)
- **Styling:** Hand-written CSS organised with cascade layers (@layer) and BEM naming, with Tailwind CSS for a few utility classes
- **Animations:** Motion + `requestAnimationFrame`
- **Images:** Sharp (build-time optimisation)
- **i18n:** Astro native i18n routing (`/es`, `/en`, `/gl`), Spanish as default locale
- **Language:** TypeScript
- **Tooling:** ESLint, Prettier, pnpm

## Performance

- Self-hosted fonts to avoid third-party requests and layout shifts.
- React is shipped only for interactive components, loaded with `client:idle` so it never blocks the first render.
- Fixed background implemented with a `::before` pseudo-element instead of `background-attachment: fixed`, avoiding costly repaints on scroll.
- Wave animations driven by `requestAnimationFrame`.

## Accessibility

- Colour palette adjusted to target WCAG AA contrast (4.5:1 for body text, 3:1 for large text).
- `prefers-reduced-motion` respected: animations are disabled or reduced when the user requests it.
- Semantic HTML, alternative text for images and ARIA attributes for interactive patterns (menu state with `aria-expanded`/`aria-controls`, current section with `aria-current`, live region with `aria-live`).

## Project Structure

```text
src/
├── components/    # Astro components (Hero, Projects, TechBand, Contact…)
│   └── react/     # Interactive React islands
├── data/          # Site config and project content
├── i18n/          # Translations (es, en, gl) and helpers
├── layouts/       # Base layout
├── pages/[lang]/  # Localised routes
└── styles/        # Global styles and cascade layers
```

## Development

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # production build in ./dist
pnpm preview
```

## License

The source code is released under the MIT License. Personal content (texts, images and branding) belongs to Zoe Porta and is not covered by the license.

# Claude Code Instructions

## Package manager

Always use pnpm. Never suggest npm or yarn commands.

## Code style

- Hybrid CSS/Tailwind model. Native CSS is the default.
- Use CSS for structural layout, spacing, transitions, hover/focus selectors, media queries, and any style shared uniformly across a group of elements.
- Use Tailwind only for one-off exceptions: when a single element breaks the norm (different color, weight, font) and handling it in CSS would require a forced or contrived selector. If the same utility would repeat across many elements, put it in CSS instead.
- No other CSS frameworks or utility libraries.
- No unnecessary abstractions. This is a single-page portfolio.
- Use CSS custom properties defined in src/styles/global.css.
- Follow @layer structure: reset, base, components.

## Routing

Use dynamic [lang] routes with getStaticPaths, not separate files per language.
Never create src/pages/es/, src/pages/en/ or src/pages/gl/ as separate directories.

## Animations

- Simple entrance/scroll animations: Motion vanilla in .astro files.
- Complex animations or Aceternity components: React island with client:visible.

## React islands

All React components go in src/components/react/.
Default to client:visible unless immediate load is justified.

## TypeScript

Strict mode. No `any`.

## Before suggesting anything

Read CONTEXT.md for full project context.
One task at a time. Do not anticipate future tasks.

## Never

- Install dependencies without explaining why.
- Use npm, npx or yarn.
- Add CSS frameworks or utility libraries (beyond Tailwind, which is already configured).
- Generate placeholder lorem ipsum copy — ask instead.

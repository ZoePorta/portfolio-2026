# Claude Code Instructions

## Package manager

Always use pnpm. Never suggest npm or yarn commands.

## Code style

- Native CSS only. No Tailwind, no CSS frameworks.
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
- Add CSS frameworks or utility libraries.
- Generate placeholder lorem ipsum copy — ask instead.

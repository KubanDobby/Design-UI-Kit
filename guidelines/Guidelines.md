# Design UI Kit Guidelines

## Project context

This repository is a Vue 3 UI kit plus a showcase app based on the original Figma design.

- Stack: Vue 3, Vite, TypeScript, Tailwind CSS v4, Vitest, Vue Test Utils
- Reusable components live in `src/shared/ui`
- Design tokens live in `src/styles/tokens.css`
- TS-accessible token exports live in `src/shared/tokens`
- The demo/showcase app lives in `src/app`

## General rules

- Keep changes aligned with the existing game-style visual language. This project is not a generic SaaS dashboard.
- Prefer small, local edits over broad refactors.
- Preserve existing public component APIs unless the task explicitly requires a breaking change.
- Use `<script setup lang="ts">` for Vue components.
- Reuse the existing `@/` import alias.
- Keep shared kit code independent from showcase-specific content.

## Architecture

### Shared kit vs showcase app

- Put reusable primitives and controls in `src/shared/ui`.
- Put showcase-only compositions in `src/app/components`.
- Do not move product/demo-specific text, sample data, or page layout concerns into shared kit components.

### Component structure

- Follow the existing folder pattern for shared components:
  - `src/shared/ui/<component>/<Component>.vue`
  - `src/shared/ui/<component>/index.ts`
- Export reusable components through `src/shared/ui/index.ts`.
- Keep components focused. If a file starts carrying multiple responsibilities, split subparts into nearby files.

### Styling logic

- Use `cn()` for class merging.
- Use `class-variance-authority` (`cva`) when a component has real variant or size combinations, as done in `button.styles.ts`.
- Keep variant definitions near the component they belong to.

## Design system rules

### Tokens are the source of truth

- Prefer existing token classes such as `bg-game-*`, `text-game-*`, `border-game-*`, `shadow-game-*`, and `rounded-game*`.
- Do not hardcode colors, shadows, or radii inside components when a token already exists.
- If a new reusable token is introduced in CSS, add it in `src/styles/tokens.css` first.
- If the token must also be consumed from TypeScript, mirror it in `src/shared/tokens`.

### Visual language

- Preserve the current game UI style: bold, tactile controls, warm palette, clear borders, inset shadows.
- Avoid introducing glassmorphism, soft enterprise cards, blurred overlays, muted gray-heavy palettes, or marketing-style sections.
- Prefer the existing corner system:
  - `rounded-game` for controls
  - `rounded-game-card` for main card surfaces
- Keep shadows token-based and intentional. Do not replace the current pressed/inset look with generic Tailwind shadows.

### Typography

- Match the existing typography approach already used in the kit:
  - `Poppins:Bold` for emphasis and actions
  - `Poppins:Regular` for supporting text
- Keep text sizes close to the existing scale unless the design task clearly calls for expansion.
- Avoid oversized headings or cramped labels inside compact controls.

### Layout

- Prefer flexbox and grid.
- Use absolute positioning only when the design specifically depends on layering.
- Keep spacing consistent with the current component density.
- Preserve stable component dimensions so labels, counts, and icons do not shift layouts during interaction.

## Interaction and accessibility

- Interactive elements must use semantic controls such as `<button>`.
- Icon-only actions must have an `aria-label`.
- Preserve visible focus handling and disabled states.
- When a component supports stateful interaction, prefer explicit controlled/uncontrolled patterns like the existing `Counter`.
- Emit meaningful public events and test them through user-visible behavior.

## Icons and assets

- Use `lucide-vue-next` for icons unless the design explicitly requires a custom asset.
- Keep icons visually centered and size-constrained inside controls.
- Avoid decorative SVG work when an existing icon already solves the need.

## Testing

- Update or add Vitest coverage when component behavior changes.
- Prefer Vue Test Utils tests that verify public behavior:
  - rendered text
  - emitted events
  - disabled states
  - min/max and interaction rules
- Do not write tests that depend on implementation details when observable behavior is enough.

## Avoid

- Do not put reusable UI logic in `src/app`.
- Do not duplicate token values across files without a reason.
- Do not add large dependencies for minor UI helpers.
- Do not introduce a second visual language alongside the existing game kit.
- Do not rewrite unrelated files while making a scoped change.

# Design UI Kit

Vue 3 UI kit and showcase app based on the original Figma design:
[Design UI Kit](https://www.figma.com/design/WWVPQWHsKoalSxp81rBb1e/Design-UI-Kit)

## Stack

- Vue 3
- Vite
- Tailwind CSS v4
- Vitest + Vue Test Utils

## Project Shape

- `src/shared/ui` contains reusable kit components.
- `src/shared/tokens` contains TS-accessible token exports.
- `src/styles` contains the CSS token/theme source of truth.
- `src/app` contains the showcase app for the kit.

## Commands

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run Vue type checking:

```bash
npm run typecheck
```

Run tests:

```bash
npm run test
```

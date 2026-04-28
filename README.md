# Design UI Kit

Vue 3 UI kit and showcase app based on the original Figma design:
[Design UI Kit](https://www.figma.com/design/WWVPQWHsKoalSxp81rBb1e/Design-UI-Kit)

## Stack

- Vue 3
- Vite
- Tailwind CSS v4
- Vitest + Vue Test Utils
- TypeScript
- ESLint + Prettier
- GitHub Actions CI/CD

## Project Structure

- `src/shared/ui` - Reusable, product-agnostic UI components
- `src/shared/tokens` - TypeScript-accessible design token exports
- `src/shared/lib` - Utility functions and type definitions
- `src/styles` - CSS tokens and theme (source of truth)
- `src/app` - Showcase app and demo-specific components
- `tests/` - Component test suite (Vitest)
- `.github/workflows/` - CI/CD pipelines

## UI Components

### Core Components

- **Button** - Primary action button with variants (green/orange) and sizes (sm/md/lg)
- **IconButton** - Icon-only button with accessibility support
- **Counter** - Numeric input with increment/decrement controls
- **StatDisplay** - Display statistics with icons and values
- **Card** - Flexible card container with subcomponents (Title, Info, Field, Description, Preview, Actions)

### New Components

- **Input** - Text input field with error state support
- **Select** - Dropdown selection component
- **Tooltip** - Hover/focus-triggered help text with positioning
- **Modal** - Dialog component with backdrop and customizable footer

See the [Component Showcase](src/app/components/ComponentShowcase.vue) for interactive examples.

## Commands

### Development

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

### Quality Assurance

Run TypeScript type checking:

```bash
pnpm typecheck
```

Run linting and fix issues:

```bash
pnpm lint
```

Format code with Prettier:

```bash
pnpm format
```

Run tests:

```bash
pnpm test          # Run once
pnpm test:watch    # Watch mode
```

### Production

Build for production:

```bash
pnpm build
```

## Documentation

- [**CONTRIBUTING.md**](CONTRIBUTING.md) - Developer guide and contribution workflow
- [**IMPLEMENTATION.md**](IMPLEMENTATION.md) - Summary of new features and improvements
- [**guidelines/Guidelines.md**](guidelines/Guidelines.md) - Design system rules and component patterns

## Key Features

### 🎨 Design System

- Game-style visual language: bold controls, warm palette, clear borders, inset shadows
- Design tokens in CSS with TypeScript exports
- Consistent spacing and typography (Poppins font)
- Tailwind CSS v4 integration

### 📦 Component Architecture

- `<script setup lang="ts">` for all Vue components
- Type-safe props with TypeScript
- JSDoc documentation for IDE support
- Controlled/uncontrolled component patterns
- Class merging with `cn()` utility
- Variant system using `class-variance-authority`

### ✅ Quality Assurance

- Comprehensive test coverage with Vitest
- ESLint for code quality
- Prettier for consistent formatting
- TypeScript for type safety
- GitHub Actions CI/CD (lint, type check, test, build)

### ♿ Accessibility

- Semantic HTML elements
- ARIA labels for icon buttons
- Focus management and visible focus states
- Disabled state handling
- Keyboard navigation support

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Start development**

   ```bash
   pnpm dev
   ```

3. **Create a new component** (see [CONTRIBUTING.md](CONTRIBUTING.md))
   - Create folder in `src/shared/ui/<component>/`
   - Build with TypeScript + JSDoc
   - Add tests
   - Update main index.ts export

4. **Run quality checks**
   ```bash
   pnpm lint && pnpm format && pnpm test && pnpm typecheck
   ```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:

- Component creation workflow
- Code standards and style
- Testing best practices
- Commit and PR process

## Design Tokens Reference

### Colors

- `bg-game-green` / `#71c638`
- `bg-game-orange` / `#ee9448`
- `bg-game-yellow` / `#fdc25b`
- `bg-game-brown` / `#94633a`
- `bg-game-text` / `#3c415c`
- `bg-game-bg` / `#020202`

### Radius

- `rounded-game` / `8px`
- `rounded-game-card` / `24px`

### Shadows

- `shadow-game-btn-green` / `shadow-game-btn-orange` - Inset button shadows
- `shadow-game-card` - Card inset shadow
- `shadow-game-stat` - Stat display shadow

See `src/styles/tokens.css` for complete token definitions.

## License

[License information here]

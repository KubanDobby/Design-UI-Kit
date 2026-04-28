# Contributing to Design UI Kit

Thank you for your interest in contributing to the Design UI Kit! This document provides guidelines and best practices for contributing to this project.

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourname/design-ui-kit.git
   cd design-ui-kit
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Run tests**
   ```bash
   pnpm test
   ```

## Development Workflow

### Creating New Components

1. Create a new folder in `src/shared/ui/<component-name>/`
2. Create the component file: `<Component>.vue`
3. If the component has variants or complex styling, create `component.styles.ts`
4. Create an `index.ts` file for exports
5. Add JSDoc comments documenting props, slots, and emits
6. Update `src/shared/ui/index.ts` to export the new component
7. Add the component to the demo in `src/app/components/ComponentShowcase.vue`
8. Write tests in `tests/<component-name>.spec.ts`

### Component Structure Template

```vue
<script setup lang="ts">
/**
 * ComponentName component
 * Brief description of what the component does
 * @component
 *
 * @prop {type} propName - Description (default: value)
 * @slot default - Slot description
 * @emits eventName - Event description
 *
 * @example
 * <ComponentName prop-name="value">Content</ComponentName>
 */

import { computed } from "vue";
import { cn } from "@/shared/lib/cn";
import { componentVariants } from "./component.styles";

const props = withDefaults(
  defineProps<{
    variant?: "green" | "orange";
    size?: "sm" | "md" | "lg";
    class?: string;
  }>(),
  {
    variant: "green",
    size: "md",
    class: undefined,
  }
);

const emit = defineEmits<{
  "event-name": [payload: Type];
}>();

const classes = computed(() =>
  cn(
    componentVariants({
      variant: props.variant,
      size: props.size,
    }),
    props.class
  )
);
</script>

<template>
  <!-- Component template -->
</template>
```

### Styling Guidelines

- Use `cn()` from `@/shared/lib/cn` to merge classes
- Use `class-variance-authority` (cva) for variant definitions
- Reference design tokens from `src/styles/tokens.css`
- Keep variant definitions in separate `.styles.ts` files
- Never hardcode colors, shadows, or radii when tokens exist

### Tokens

Design tokens are defined in `src/styles/tokens.css` and exported to TypeScript in `src/shared/tokens/colors.ts`.

When adding new design elements:

1. Add CSS token to `src/styles/tokens.css` first
2. Mirror in `src/shared/tokens/colors.ts` if needed from TypeScript
3. Use token classes like `bg-game-green`, `shadow-game-card`, etc.

### Testing

All components should have corresponding test files:

```typescript
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Component from "@/shared/ui/component/Component.vue";

describe("Component", () => {
  it("renders correctly", () => {
    const wrapper = mount(Component);
    expect(wrapper.exists()).toBe(true);
  });

  it("emits events", async () => {
    const wrapper = mount(Component);
    await wrapper.trigger("event");
    expect(wrapper.emitted("event")).toBeTruthy();
  });
});
```

**Test Focus Areas:**

- Component rendering
- Props binding
- Event emission
- Variant/size handling
- Disabled/error states
- Accessibility attributes
- User interactions

Run tests with:

```bash
pnpm test          # Run once
pnpm test:watch    # Watch mode
```

### Code Quality

**Linting:**

```bash
pnpm lint          # Fix issues automatically
```

**Code Format:**

```bash
pnpm format        # Format all files
```

**Type Checking:**

```bash
pnpm typecheck     # Check TypeScript types
```

## Architecture Guidelines

### Shared Kit vs. Showcase App

- **`src/shared/ui/`**: Reusable, product-agnostic components
- **`src/app/`**: Demo/showcase-specific content, compositions

### Component API

- Preserve public component APIs unless explicitly changing
- Use `<script setup lang="ts">` syntax
- Support controlled and uncontrolled patterns for stateful components
- Emit meaningful, well-named events
- Provide clear, semantic HTML elements

### Accessibility

- Use semantic HTML (`<button>`, `<input>`, etc.)
- Include `aria-label` for icon-only buttons
- Maintain visible focus states
- Support keyboard navigation
- Test with accessibility tools

### Visual Language

The kit uses a **game UI style**: bold, tactile controls, warm palette, clear borders, inset shadows.

**Do:**

- Use `rounded-game` for controls
- Use `rounded-game-card` for card surfaces
- Apply token-based colors and shadows
- Keep spacing consistent

**Don't:**

- Introduce glassmorphism or soft enterprise aesthetics
- Use muted gray-heavy palettes
- Replace inset shadows with generic effects
- Hardcode design values

## Commit Guidelines

- Write clear, descriptive commit messages
- Reference issues or PRs when relevant
- Keep commits focused on a single change
- Example: `feat: add Input component with error state support`

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/component-name`
3. Make your changes with tests and documentation
4. Run `pnpm lint && pnpm format && pnpm test && pnpm typecheck`
5. Push to your fork and create a Pull Request
6. Ensure CI/CD checks pass
7. Request review from maintainers

## Questions or Issues?

Open an issue on GitHub or reach out to the maintainers.

Thank you for contributing! 🎮✨

<script setup lang="ts">
import Button from "@/shared/ui/button/Button.vue";

/**
 * IconButton component
 * A button designed primarily for displaying icons with optional text
 * Requires aria-label for accessibility
 * @component
 *
 * @prop {string} ariaLabel - Accessible label describing the button action (required for a11y)
 * @prop {string} variant - Color variant: "green" | "orange" (default: "green")
 * @prop {string} type - HTML button type: "button" | "submit" | "reset" (default: "button")
 * @prop {boolean} disabled - Disable the button
 *
 * @slot default - Icon content (should be an SVG or icon component)
 *
 * @example
 * <IconButton ariaLabel="Open menu">
 *   <Menu :size="20" />
 * </IconButton>
 */

withDefaults(
  defineProps<{
    ariaLabel: string;
    variant?: "green" | "orange";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }>(),
  {
    variant: "green",
    type: "button",
    disabled: false,
  }
);
</script>

<template>
  <Button size="icon" :variant="variant" :type="type" :disabled="disabled" :aria-label="ariaLabel">
    <span class="size-[14px] flex items-center justify-center">
      <slot />
    </span>
  </Button>
</template>

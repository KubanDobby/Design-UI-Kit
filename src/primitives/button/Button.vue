<script setup lang="ts">
import { computed, useAttrs, type HTMLAttributes } from "vue";
import { cn } from "@/shared/lib/cn";
import { buttonVariants } from "./button.styles";

/**
 * Button component
 * A clickable button with game-style visual design supporting variants and sizes
 * @component
 *
 * @prop {string} variant - Color variant: "green" | "orange" (default: "green")
 * @prop {string} size - Button size: "sm" | "md" | "lg" | "icon" (default: "md")
 * @prop {boolean} fullWidth - Stretch button to full width (default: false)
 * @prop {string} type - HTML button type: "button" | "submit" | "reset" (default: "button")
 * @prop {boolean} disabled - Disable the button
 * @prop {string} class - Additional CSS classes
 *
 * @slot default - Button text or content
 *
 * @example
 * <Button variant="green" size="md">Click me</Button>
 *
 * @example
 * <Button variant="orange" full-width type="submit">Submit</Button>
 */

const props = withDefaults(
  defineProps<{
    variant?: "green" | "orange";
    size?: "sm" | "md" | "lg" | "icon";
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    variant: "green",
    size: "md",
    fullWidth: false,
    type: "button",
  }
);

const attrs = useAttrs();

const classes = computed(() =>
  cn(
    buttonVariants({
      variant: props.variant,
      size: props.size,
      fullWidth: props.fullWidth,
    }),
    attrs.class as HTMLAttributes["class"]
  )
);
</script>

<template>
  <button v-bind="attrs" :type="type" :class="classes">
    <slot />
  </button>
</template>

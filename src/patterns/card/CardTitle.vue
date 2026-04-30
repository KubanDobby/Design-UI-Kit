<script setup lang="ts">
import { cn } from "@/shared/lib/cn";

/**
 * CardTitle component
 * Displays a bold title inside a Card
 * @component
 *
 * @prop {string} class - Additional CSS classes
 * @slot default - Title text content
 *
 * @example
 * <Card>
 *   <CardTitle>My Card Title</CardTitle>
 * </Card>
 */

defineProps<{ class?: string }>();
</script>

<template>
  <p
    :class="
      cn(`font-['Poppins:Bold',sans-serif] text-game-text text-[16px] leading-[24px]`, $props.class)
    "
  >
    <slot />
  </p>
</template>

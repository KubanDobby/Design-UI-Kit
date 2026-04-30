<script setup lang="ts">
import { cn } from "@/shared/lib/cn";

/**
 * CardDescription component
 * Displays descriptive text inside a Card
 * Usually used to provide details or flavor text
 * @component
 *
 * @prop {string} class - Additional CSS classes
 * @slot default - Description text content
 *
 * @example
 * <Card>
 *   <CardDescription>This is a detailed description of the card content.</CardDescription>
 * </Card>
 */

defineProps<{ class?: string }>();
</script>

<template>
  <p
    :class="
      cn(
        `font-['Poppins:Regular',sans-serif] text-game-text text-[16px] leading-[24px] min-h-[63px]`,
        $props.class
      )
    "
  >
    <slot />
  </p>
</template>

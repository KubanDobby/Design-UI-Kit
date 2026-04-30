<script setup lang="ts">
import { cn } from "@/shared/lib/cn";

/**
 * CardInfo component
 * Container for displaying card information fields
 * Usually contains multiple CardField components
 * @component
 *
 * @prop {string} class - Additional CSS classes
 * @slot default - CardField components or custom content
 *
 * @example
 * <CardInfo>
 *   <CardField label="Health" :value="100" />
 *   <CardField label="Mana" :value="50" />
 * </CardInfo>
 */

defineProps<{ class?: string }>();
</script>

<template>
  <div :class="cn('flex justify-between text-game-text text-[16px] leading-[24px]', $props.class)">
    <slot />
  </div>
</template>

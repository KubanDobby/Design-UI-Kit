<script setup lang="ts">
import { cn } from "@/shared/lib/cn";

/**
 * StatDisplay component
 * Displays a statistic with an icon and optional value
 * Used for showing game stats, inventory items, or other metrics
 * @component
 *
 * @prop {string} label - Stat label text (required)
 * @prop {string|number} value - Stat value (optional, can also be in slot)
 * @prop {string} class - Additional CSS classes
 *
 * @slot default - Icon or custom content before the label
 *
 * @example
 * <StatDisplay label="Health" :value="100">
 *   <Heart :size="22" />
 * </StatDisplay>
 *
 * @example
 * <StatDisplay label="Mana">
 *   <Wand :size="22" />
 * </StatDisplay>
 */

defineProps<{
  label: string;
  value?: string | number;
  class?: string;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'relative rounded-game border-2 border-game-border-red bg-game-yellow shadow-game-stat px-[13px] py-2 h-[42px] flex items-center gap-2',
        $props.class
      )
    "
  >
    <span class="size-[22px] text-game-icon flex items-center justify-center">
      <slot />
    </span>
    <span class="font-['Poppins:Regular',sans-serif] text-game-text text-[12px]">
      {{ label }}
    </span>
    <span
      v-if="value !== undefined"
      class="font-['Poppins:Bold',sans-serif] text-game-text text-[14px] ml-1"
    >
      {{ value }}
    </span>
  </div>
</template>

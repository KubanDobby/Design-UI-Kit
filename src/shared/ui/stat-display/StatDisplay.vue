<script setup lang="ts">
import { cn } from "@/shared/lib/cn";

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
        $props.class,
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

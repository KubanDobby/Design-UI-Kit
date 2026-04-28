<script setup lang="ts">
import { cn } from "@/shared/lib/cn";

defineProps<{ class?: string }>();
</script>

<template>
  <div
    :class="
      cn(
        'flex justify-between text-game-text text-[16px] leading-[24px]',
        $props.class,
      )
    "
  >
    <slot />
  </div>
</template>

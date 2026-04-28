<script setup lang="ts">
import { cn } from "@/shared/lib/cn";

defineProps<{ class?: string }>();
</script>

<template>
  <p :class="cn(`font-['Poppins:Bold',sans-serif] text-game-text text-[16px] leading-[24px]`, $props.class)">
    <slot />
  </p>
</template>

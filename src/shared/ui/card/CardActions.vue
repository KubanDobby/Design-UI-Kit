<script setup lang="ts">
import { cn } from "@/shared/lib/cn";

defineProps<{ class?: string }>();
</script>

<template>
  <div :class="cn('flex gap-3 items-center w-full', $props.class)">
    <slot />
  </div>
</template>

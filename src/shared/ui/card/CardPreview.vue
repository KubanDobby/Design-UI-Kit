<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/shared/lib/cn";

const props = defineProps<{
  color?: string;
  class?: string;
}>();

const style = computed(() => (props.color ? { backgroundColor: props.color } : undefined));
</script>

<template>
  <div
    :style="style"
    :class="
      cn(
        'rounded-[18px] h-[125px] w-full flex items-center justify-center bg-game-orange',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

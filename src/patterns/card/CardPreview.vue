<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/shared/lib/cn";

/**
 * CardPreview component
 * Visual preview area at the top of a Card
 * Usually contains an icon, image, or visual representation
 * @component
 *
 * @prop {string} color - Background color (accepts CSS color values, overrides default)
 * @prop {string} class - Additional CSS classes
 * @slot default - Preview content (icon, image, etc.)
 *
 * @example
 * <CardPreview color="#b5ff84">
 *   <img src="icon.png" />
 * </CardPreview>
 */

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
        props.class
      )
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs, type HTMLAttributes } from "vue";
import { cn } from "@/shared/lib/cn";
import { buttonVariants } from "./button.styles";

const props = withDefaults(
  defineProps<{
    variant?: "green" | "orange";
    size?: "sm" | "md" | "lg" | "icon";
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    variant: "green",
    size: "md",
    fullWidth: false,
    type: "button",
  },
);

const attrs = useAttrs();

const classes = computed(() =>
  cn(
    buttonVariants({
      variant: props.variant,
      size: props.size,
      fullWidth: props.fullWidth,
    }),
    attrs.class as HTMLAttributes["class"],
  ),
);
</script>

<template>
  <button v-bind="attrs" :type="type" :class="classes">
    <slot />
  </button>
</template>

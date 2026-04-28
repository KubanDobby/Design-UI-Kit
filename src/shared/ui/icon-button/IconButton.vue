<script setup lang="ts">
import Button from "@/shared/ui/button/Button.vue";

withDefaults(
  defineProps<{
    ariaLabel: string;
    variant?: "green" | "orange";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }>(),
  {
    variant: "green",
    type: "button",
    disabled: false,
  },
);
</script>

<template>
  <Button
    size="icon"
    :variant="variant"
    :type="type"
    :disabled="disabled"
    :aria-label="ariaLabel"
  >
    <span class="size-[14px] flex items-center justify-center">
      <slot />
    </span>
  </Button>
</template>

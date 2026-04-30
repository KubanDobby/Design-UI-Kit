<script setup lang="ts">
import { cn } from "@/shared/lib/cn";

/**
 * CardActions component
 * Container for action buttons or controls at the bottom of a Card
 * Usually contains Button components
 * @component
 *
 * @prop {string} class - Additional CSS classes
 * @slot default - Action buttons or controls
 *
 * @example
 * <CardActions>
 *   <Button variant="green">Confirm</Button>
 *   <Button variant="orange">Cancel</Button>
 * </CardActions>
 */

defineProps<{ class?: string }>();
</script>

<template>
  <div :class="cn('flex gap-3 items-center w-full', $props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * CardField component
 * Displays a labeled value pair inside CardInfo
 * @component
 *
 * @prop {string} label - Field label text
 * @prop {string|number} value - Field value to display
 *
 * @example
 * <CardField label="Damage:" :value="25" />
 * <CardField label="Duration:" value="5s" />
 */

defineProps<{
  label: string;
  value: string | number;
}>();
</script>

<template>
  <div class="flex gap-[6px]">
    <span class="font-['Poppins:Regular',sans-serif]">{{ label }}</span>
    <span class="font-['Poppins:Bold',sans-serif]">{{ value }}</span>
  </div>
</template>

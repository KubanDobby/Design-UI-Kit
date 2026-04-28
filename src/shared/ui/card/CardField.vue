<script setup lang="ts">
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

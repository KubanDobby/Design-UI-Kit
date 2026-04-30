<script setup lang="ts">
import { ref, computed } from "vue";
import { ChevronDown } from "lucide-vue-next";
import { cn } from "@/shared/lib/cn";
import type { SelectOption } from "./select.types";

/**
 * Select/Dropdown component
 * Allows selecting a single value from a list
 * @component
 *
 * @props modelValue - Selected value
 * @props options - Array of {label, value} options
 * @props placeholder - Placeholder text
 * @props disabled - Disable selection
 *
 * @example
 * <Select
 *   v-model="selected"
 *   :options="[
 *     { label: 'Option 1', value: 'opt1' },
 *     { label: 'Option 2', value: 'opt2' }
 *   ]"
 *   placeholder="Choose..."
 * />
 */

const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
  }>(),
  {
    placeholder: "Select...",
    disabled: false,
    size: "md",
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  change: [value: string | number];
}>();

const isOpen = ref(false);

const selectedLabel = computed(() => {
  const selected = props.options.find((opt) => opt.value === props.modelValue);
  return selected?.label || props.placeholder;
});

const sizeClasses = computed(() => {
  const sizes: Record<string, string> = {
    sm: "px-3 py-1 text-[12px]",
    md: "px-4 py-2 text-[14px]",
    lg: "px-6 py-3 text-[16px]",
  };
  return sizes[props.size];
});

function selectOption(value: string | number) {
  emit("update:modelValue", value);
  emit("change", value);
  isOpen.value = false;
}

function toggleDropdown() {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
  }
}
</script>

<template>
  <div class="relative w-full">
    <!-- Trigger button -->
    <button
      type="button"
      :class="
        cn(
          'w-full flex items-center justify-between rounded-game border-2 border-game-border-dark bg-game-yellow text-game-text font-[\'Poppins:Regular\',sans-serif] transition-colors duration-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-game-border-dark disabled:opacity-50 disabled:cursor-not-allowed',
          sizeClasses,
          { 'bg-game-green text-white': isOpen && !disabled }
        )
      "
      :disabled="disabled"
      @click="toggleDropdown"
    >
      <span>{{ selectedLabel }}</span>
      <ChevronDown :size="18" :class="{ 'rotate-180 transition-transform duration-200': isOpen }" />
    </button>

    <!-- Dropdown menu -->
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute top-full left-0 right-0 mt-1 rounded-game border-2 border-game-border-dark bg-game-yellow shadow-lg z-50"
      >
        <button
          v-for="option in options"
          :key="option.value"
          type="button"
          :class="
            cn(
              'w-full text-left px-4 py-2 text-game-text font-[\'Poppins:Regular\',sans-serif] text-[14px] hover:bg-game-orange hover:text-white transition-colors first:rounded-t-[6px] last:rounded-b-[6px]',
              { 'bg-game-green text-white': option.value === modelValue }
            )
          "
          @click="selectOption(option.value)"
        >
          {{ option.label }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 150ms,
    transform 150ms;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

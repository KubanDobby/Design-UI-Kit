<script setup lang="ts">
import { Minus, Plus } from "lucide-vue-next";
import { computed } from "vue";
import { cn } from "@/shared/lib/cn";
import { useControllableState } from "@/shared/lib/use-controllable-state";
import IconButton from "@/shared/ui/icon-button/IconButton.vue";

/**
 * Counter component
 * Allows users to increment/decrement a numeric value using buttons
 * Supports both controlled and uncontrolled patterns
 * @component
 *
 * @prop {number} modelValue - Current value (controlled mode)
 * @prop {number} defaultValue - Initial value when uncontrolled (default: 0)
 * @prop {number} min - Minimum allowed value (default: 0)
 * @prop {number} max - Maximum allowed value (default: 99)
 * @prop {number} step - Increment/decrement step (default: 1)
 * @prop {string} class - Additional CSS classes
 *
 * @emits update:modelValue - Emitted when value changes in controlled mode
 * @emits change - Emitted whenever value changes
 *
 * @example
 * // Uncontrolled
 * <Counter :min="0" :max="10" />
 *
 * @example
 * // Controlled
 * <Counter v-model="count" :min="0" :max="100" />
 */

const props = withDefaults(
  defineProps<{
    modelValue?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    class?: string;
  }>(),
  {
    defaultValue: 0,
    min: 0,
    max: 99,
    step: 1,
    class: undefined,
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: number];
  change: [value: number];
}>();

const [count, setCount] = useControllableState<number>({
  value: props.modelValue,
  defaultValue: props.defaultValue,
  onChange: (value) => {
    emit("update:modelValue", value);
    emit("change", value);
  },
});

const isAtMin = computed(() => count.value <= props.min);
const isAtMax = computed(() => count.value >= props.max);

function dec() {
  setCount(Math.max(props.min, count.value - props.step));
}

function inc() {
  setCount(Math.min(props.max, count.value + props.step));
}
</script>

<template>
  <div :class="cn('bg-game-orange flex gap-[6px] items-center p-[2px] rounded-game', props.class)">
    <IconButton ariaLabel="Decrease" :disabled="isAtMin" @click="dec">
      <Minus :size="14" :stroke-width="3" />
    </IconButton>
    <div class="bg-game-brown flex flex-1 items-center justify-center px-4 py-1 rounded-game">
      <p class="font-['Poppins:Bold',sans-serif] text-[14px] leading-[21px] text-white">
        {{ count }}
      </p>
    </div>
    <IconButton ariaLabel="Increase" :disabled="isAtMax" @click="inc">
      <Plus :size="14" :stroke-width="3" />
    </IconButton>
  </div>
</template>

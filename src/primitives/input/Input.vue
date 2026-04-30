<script setup lang="ts">
import { computed, useAttrs, type HTMLAttributes } from "vue";
import { cn } from "@/shared/lib/cn";
import { inputVariants } from "./input.styles";

/**
 * Input component
 * @component
 *
 * @slot default - Optional helper text or icons
 *
 * @example
 * <Input
 *   v-model="email"
 *   type="email"
 *   placeholder="Enter email"
 *   :error="!!emailError"
 * />
 */

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    size?: "sm" | "md" | "lg";
    class?: string;
  }>(),
  {
    type: "text",
    disabled: false,
    error: false,
    size: "md",
    class: undefined,
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
}>();

const attrs = useAttrs();
const inputAttrs = computed(() => {
  const nextAttrs = { ...attrs };
  delete nextAttrs.class;
  return nextAttrs;
});

const classes = computed(() =>
  cn(
    inputVariants({
      size: props.size,
      error: props.error,
    }),
    props.class,
    attrs.class as HTMLAttributes["class"]
  )
);

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}

function handleFocus(event: FocusEvent) {
  emit("focus", event);
}

function handleBlur(event: FocusEvent) {
  emit("blur", event);
}
</script>

<template>
  <div class="w-full flex flex-col gap-1">
    <input
      v-bind="inputAttrs"
      :class="classes"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="error"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <slot />
  </div>
</template>

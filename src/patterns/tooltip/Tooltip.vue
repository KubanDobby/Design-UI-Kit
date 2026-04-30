<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from "vue";

/**
 * Tooltip component
 * Shows a small information popup on hover or focus
 * @component
 *
 * @props text - Tooltip text content
 * @props position - Positioning: "top" | "bottom" | "left" | "right"
 *
 * @slot default - Trigger element content
 *
 * @example
 * <Tooltip text="This is helpful info" position="top">
 *   <Button>Hover me</Button>
 * </Tooltip>
 */

const props = withDefaults(
  defineProps<{
    text: string;
    position?: "top" | "bottom" | "left" | "right";
    delay?: number;
  }>(),
  {
    position: "top",
    delay: 200,
  }
);

const isVisible = ref(false);
let timeoutId: ReturnType<typeof setTimeout> | null = null;

const positionClasses = computed(() => {
  const base =
    "absolute z-50 px-3 py-2 rounded-game bg-game-brown text-white text-[12px] whitespace-nowrap font-['Poppins:Regular',sans-serif]";
  const positions: Record<string, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };
  return `${base} ${positions[props.position]}`;
});

function clearPendingTimeout() {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
}

function showTooltip() {
  clearPendingTimeout();
  timeoutId = setTimeout(() => {
    isVisible.value = true;
    timeoutId = null;
  }, props.delay);
}

function hideTooltip() {
  clearPendingTimeout();
  isVisible.value = false;
}

onBeforeUnmount(() => {
  clearPendingTimeout();
});
</script>

<template>
  <div
    class="relative inline-block"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @focusin="showTooltip"
    @focusout="hideTooltip"
  >
    <slot />
    <Transition name="fade">
      <div v-if="isVisible" :class="positionClasses">
        {{ text }}
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

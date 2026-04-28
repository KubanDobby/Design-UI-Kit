<script setup lang="ts">
/**
 * Modal component
 * Displays content in a centered modal dialog with overlay
 * @component
 *
 * @props modelValue - Whether modal is open
 * @props title - Modal title
 * @props closeable - Show close button (default: true)
 *
 * @slot default - Modal body content
 * @slot footer - Modal footer with actions
 *
 * @example
 * <Modal v-model="isOpen" title="Confirm Action">
 *   <p>Are you sure?</p>
 *   <template #footer>
 *     <Button @click="isOpen = false">Cancel</Button>
 *     <Button variant="orange" @click="confirm">Confirm</Button>
 *   </template>
 * </Modal>
 */

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    title?: string;
    closeable?: boolean;
  }>(),
  {
    closeable: true,
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

function closeModal() {
  emit("update:modelValue", false);
}

function handleBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget && props.closeable) {
    closeModal();
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50" @click="handleBackdropClick" />

        <!-- Modal -->
        <div
          class="relative rounded-game-card border-2 border-game-border-red bg-game-yellow shadow-game-card p-6 max-w-md w-full mx-4"
          role="dialog"
          aria-modal="true"
        >
          <!-- Header -->
          <div v-if="title || closeable" class="flex items-center justify-between mb-4">
            <h2 v-if="title" class="font-['Poppins:Bold',sans-serif] text-game-text text-[18px]">
              {{ title }}
            </h2>
            <button
              v-if="closeable"
              class="text-game-text hover:text-game-brown transition-colors"
              aria-label="Close modal"
              @click="closeModal"
            >
              <span class="text-[24px] leading-none">×</span>
            </button>
          </div>

          <!-- Content -->
          <div class="text-game-text font-['Poppins:Regular',sans-serif] text-[14px] mb-4">
            <slot />
          </div>

          <!-- Footer -->
          <div v-if="$slots.footer" class="flex gap-3 justify-end">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 200ms ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div:nth-child(2),
.modal-leave-active > div:nth-child(2) {
  transition: transform 200ms ease-in-out;
}

.modal-enter-from > div:nth-child(2),
.modal-leave-to > div:nth-child(2) {
  transform: scale(0.95);
}
</style>

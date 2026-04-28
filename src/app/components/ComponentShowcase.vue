<script setup lang="ts">
import { ref } from "vue";
import {
  Button,
  IconButton,
  Counter,
  StatDisplay,
  Input,
  Select,
  Tooltip,
  Modal,
} from "@/shared/ui";
import { Heart, Settings, Plus, Minus } from "lucide-vue-next";

/**
 * Component showcase page
 * Displays all UI kit components with various states and configurations
 */

// State for interactive demos
const email = ref("");
const selectedOption = ref("opt1");
const count = ref(0);
const showModal = ref(false);
const inputError = ref(false);

const options = [
  { label: "Option 1", value: "opt1" },
  { label: "Option 2", value: "opt2" },
  { label: "Option 3", value: "opt3" },
];
</script>

<template>
  <div class="min-h-screen bg-game-bg p-8">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <h1 class="font-['Poppins:Bold',sans-serif] text-white text-[32px] mb-2">
        Design UI Kit Showcase
      </h1>
      <p class="text-game-text text-[16px] mb-8">
        Interactive demonstration of all available UI components
      </p>

      <!-- Buttons Section -->
      <section class="mb-12">
        <h2 class="font-['Poppins:Bold',sans-serif] text-white text-[24px] mb-4">Buttons</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p class="text-white text-[12px] mb-2">Green Small</p>
            <Button variant="green" size="sm">Click</Button>
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Green Medium</p>
            <Button variant="green" size="md">Click Me</Button>
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Green Large</p>
            <Button variant="green" size="lg">Click Button</Button>
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Orange Medium</p>
            <Button variant="orange" size="md">Action</Button>
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Full Width</p>
            <Button full-width>Full Width Button</Button>
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Disabled</p>
            <Button disabled>Disabled</Button>
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Icon Button</p>
            <IconButton ariaLabel="Add">
              <Plus :size="16" />
            </IconButton>
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Icon Button Orange</p>
            <IconButton variant="orange" ariaLabel="Remove">
              <Minus :size="16" />
            </IconButton>
          </div>
        </div>
      </section>

      <!-- Input Section -->
      <section class="mb-12">
        <h2 class="font-['Poppins:Bold',sans-serif] text-white text-[24px] mb-4">Input</h2>
        <div class="max-w-md space-y-4">
          <div>
            <p class="text-white text-[12px] mb-2">Email Input</p>
            <Input
              v-model="email"
              type="email"
              placeholder="Enter email"
              @focus="inputError = false"
            />
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Input with Error</p>
            <Input
              type="text"
              placeholder="Invalid input"
              :error="inputError"
              @click="inputError = true"
            />
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Input Small</p>
            <Input size="sm" placeholder="Small input" />
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Input Large</p>
            <Input size="lg" placeholder="Large input" />
          </div>
        </div>
      </section>

      <!-- Select Section -->
      <section class="mb-12">
        <h2 class="font-['Poppins:Bold',sans-serif] text-white text-[24px] mb-4">Select</h2>
        <div class="max-w-md">
          <p class="text-white text-[12px] mb-2">Selected: {{ selectedOption }}</p>
          <Select v-model="selectedOption" :options="options" placeholder="Choose option..." />
        </div>
      </section>

      <!-- Counter Section -->
      <section class="mb-12">
        <h2 class="font-['Poppins:Bold',sans-serif] text-white text-[24px] mb-4">Counter</h2>
        <div class="space-y-4">
          <div>
            <p class="text-white text-[12px] mb-2">Uncontrolled (defaultValue)</p>
            <Counter :min="0" :max="10" />
          </div>
          <div>
            <p class="text-white text-[12px] mb-2">Controlled (v-model)</p>
            <div class="flex gap-4 items-center">
              <Counter v-model="count" :min="0" :max="100" />
              <p class="text-white">Value: {{ count }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- StatDisplay Section -->
      <section class="mb-12">
        <h2 class="font-['Poppins:Bold',sans-serif] text-white text-[24px] mb-4">Stat Display</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatDisplay label="Health" :value="100">
            <Heart :size="22" class="text-game-icon" />
          </StatDisplay>
          <StatDisplay label="Mana">
            <Settings :size="22" class="text-game-icon" />
          </StatDisplay>
          <StatDisplay label="Damage" :value="25">
            <Plus :size="22" class="text-game-icon" />
          </StatDisplay>
          <StatDisplay label="Defense" :value="15">
            <Minus :size="22" class="text-game-icon" />
          </StatDisplay>
        </div>
      </section>

      <!-- Tooltip Section -->
      <section class="mb-12">
        <h2 class="font-['Poppins:Bold',sans-serif] text-white text-[24px] mb-4">Tooltip</h2>
        <div class="flex gap-8 flex-wrap">
          <Tooltip text="This is a helpful tooltip" position="top">
            <Button>Hover Top</Button>
          </Tooltip>
          <Tooltip text="Tooltip on bottom" position="bottom">
            <Button variant="orange">Hover Bottom</Button>
          </Tooltip>
          <Tooltip text="Tooltip on left" position="left">
            <Button>Hover Left</Button>
          </Tooltip>
          <Tooltip text="Tooltip on right" position="right">
            <Button variant="orange">Hover Right</Button>
          </Tooltip>
        </div>
      </section>

      <!-- Modal Section -->
      <section class="mb-12">
        <h2 class="font-['Poppins:Bold',sans-serif] text-white text-[24px] mb-4">Modal</h2>
        <Button @click="showModal = true">Open Modal</Button>
        <Modal v-model="showModal" title="Modal Example" closeable>
          <p>This is a modal dialog with content. It supports slots for custom footer actions.</p>
          <template #footer>
            <Button variant="green" @click="showModal = false">Confirm</Button>
            <Button @click="showModal = false">Cancel</Button>
          </template>
        </Modal>
      </section>

      <!-- Color Palette Section -->
      <section class="mb-12">
        <h2 class="font-['Poppins:Bold',sans-serif] text-white text-[24px] mb-4">Color Tokens</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="rounded-game p-4 bg-game-green text-white text-center">
            <p class="font-['Poppins:Bold',sans-serif] text-[12px]">Game Green</p>
            <p class="text-[10px] font-['Poppins:Regular',sans-serif]">#71c638</p>
          </div>
          <div class="rounded-game p-4 bg-game-orange text-white text-center">
            <p class="font-['Poppins:Bold',sans-serif] text-[12px]">Game Orange</p>
            <p class="text-[10px] font-['Poppins:Regular',sans-serif]">#ee9448</p>
          </div>
          <div class="rounded-game p-4 bg-game-yellow text-game-text text-center">
            <p class="font-['Poppins:Bold',sans-serif] text-[12px]">Game Yellow</p>
            <p class="text-[10px] font-['Poppins:Regular',sans-serif]">#fdc25b</p>
          </div>
          <div class="rounded-game p-4 bg-game-brown text-white text-center">
            <p class="font-['Poppins:Bold',sans-serif] text-[12px]">Game Brown</p>
            <p class="text-[10px] font-['Poppins:Regular',sans-serif]">#94633a</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

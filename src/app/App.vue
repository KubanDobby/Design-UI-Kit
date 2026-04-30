<script setup lang="ts">
import { Heart, Shield, Sword, Zap } from "lucide-vue-next";
import { Button, Counter, Modal, StatDisplay } from "@/index";
import ItemCard from "./components/ItemCard.vue";
import { ref } from "vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="min-h-screen bg-game-bg p-8">
    <div class="max-w-5xl mx-auto flex flex-col gap-8">
      <header>
        <p class="font-['Poppins:Bold',sans-serif] text-game-text text-[28px] leading-[36px]">
          Game UI Kit
        </p>
        <p class="font-['Poppins:Regular',sans-serif] text-game-text text-[16px] leading-[24px]">
          Reusable Vue 3 components extracted from the Scarecrow design.
        </p>
      </header>

      <Modal title="Example Modal" v-model="isModalOpen" :closeable="true">
        <p class="text-game-text text-[16px] leading-[24px]">
          This is an example modal. You can put any content here, such as
          instructions, item details, or character information.
        </p>
        <div class="mt-4 flex justify-end gap-2">
          <Button variant="orange" @click="closeModal">Close</Button>
          <Button @click="closeModal">Save</Button>
        </div>
      </Modal>

      <Button @click="openModal">Open Modal</Button>

      <section class="flex flex-col gap-3">
        <p class="font-['Poppins:Bold',sans-serif] text-game-text text-[18px]">Item Cards</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ItemCard
            title="Scarecrow"
            duration="10 days"
            description="Crows are unpredictable"
            preview-color="#ee9448"
          />
          <ItemCard
            title="Iron Shield"
            duration="30 days"
            description="Blocks incoming damage from melee attacks"
            preview-color="#7ab8d4"
          />
          <ItemCard
            title="Healing Potion"
            duration="Instant"
            description="Restores 50 HP immediately on use"
            preview-color="#d47a9b"
          />
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <p class="font-['Poppins:Bold',sans-serif] text-game-text text-[18px]">Stat Displays</p>
        <div class="flex flex-wrap gap-3">
          <StatDisplay label="ATK" :value="42">
            <Sword :size="20" />
          </StatDisplay>
          <StatDisplay label="DEF" :value="28">
            <Shield :size="20" />
          </StatDisplay>
          <StatDisplay label="HP" :value="120">
            <Heart :size="20" />
          </StatDisplay>
          <StatDisplay label="SPD" :value="15">
            <Zap :size="20" />
          </StatDisplay>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <p class="font-['Poppins:Bold',sans-serif] text-game-text text-[18px]">Buttons</p>
        <div class="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button>Apply</Button>
          <Button size="lg">Large</Button>
          <Button variant="orange">Cancel</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <p class="font-['Poppins:Bold',sans-serif] text-game-text text-[18px]">
          Counter (uncontrolled)
        </p>
        <Counter :default-value="1" :min="0" :max="10" />
      </section>
    </div>
  </div>
</template>

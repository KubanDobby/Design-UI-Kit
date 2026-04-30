<script setup lang="ts">
import { ref } from "vue";
import {
  Button,
  Card,
  CardActions,
  CardDescription,
  CardField,
  CardInfo,
  CardPreview,
  CardTitle,
  Counter,
} from "@/index";

const props = defineProps<{
  title: string;
  duration: string;
  description: string;
  previewColor?: string;
}>();

const emit = defineEmits<{
  apply: [count: number];
}>();

const count = ref(1);
</script>

<template>
  <Card>
    <CardPreview :color="props.previewColor" />
    <CardTitle>{{ props.title }}</CardTitle>
    <CardInfo>
      <CardField label="Duration:" :value="props.duration" />
      <CardField label="Usage:" :value="count" />
    </CardInfo>
    <CardDescription>{{ props.description }}</CardDescription>
    <CardActions>
      <Counter v-model="count" :min="1" />
      <Button full-width class="flex-1" @click="emit('apply', count)"> Apply </Button>
    </CardActions>
  </Card>
</template>

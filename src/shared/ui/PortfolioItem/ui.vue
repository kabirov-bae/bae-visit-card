<script setup lang="ts">
import { defineProps } from "vue";
import { Heading } from "@/shared/ui/Heading";
interface CardProps {
  name: string;
  image: string;
  stack: string[];
}

const props = defineProps<CardProps>();

const { name, image, stack } = props;
</script>

<template>
  <div class="portfolio-item">
    <div class="portfolio-item__image">
      <img :src="img" alt="" />
    </div>
    <div class="portfolio-item__name">
      <Heading tag-name="h3">{{ name }}</Heading>
    </div>
    <div class="portfolio-item__stack">
      <slot>
        <span v-for="stackItem in stack" :key="stackItem">{{ stackItem }}</span>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.portfolio-item {
  padding: 1rem;
}

.portfolio-item__image {
  width: 100%;
  height: 3rem;
  background: var(--main-white);
}

.portfolio-item__name {
  font-weight: bold;
  font-size: 2rem;
}
.portfolio-item__stack {
  display: flex;
  gap: 0.5rem;
  font-size: 1.4rem;
}
</style>

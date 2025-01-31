<script setup lang="ts">
import { defineProps } from "vue";
import { Heading } from "@/shared/ui/Heading";
</script>

<template>
  <div class="portfolio-item">
    <div class="portfolio-item__image">
      <slot></slot>
    </div>
    <div class="portfolio-item__name">
      <Heading tag-name="h3"></Heading>
    </div>
    <div class="portfolio-item__stack">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.portfolio-item {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--main-white);
  border-radius: 1.3rem;
}

.portfolio-item__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--main-white);
  opacity: 0.5;
  border-radius: 0.6rem;
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

<script setup lang="ts">
import { Heading } from "@/shared/ui/Heading";
</script>

<template>
  <article class="portfolio-item">
    <div class="portfolio-item__image">
      <slot name="image"></slot>
    </div>
    <Heading tag-name="h3" class="portfolio-item__name">
      <slot name="title"></slot>
    </Heading>
    <p class="portfolio-item__descr">
      <slot name="descr"></slot>
    </p>
    <ul class="portfolio-item__stack">
      <slot name="stack"></slot>
    </ul>
  </article>
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
  overflow: hidden;
  border: 1px solid var(--main-white);
}

.portfolio-item__name {
  font-weight: bold;
  font-size: 2rem;
}
.portfolio-item__descr {
  font-size: 1.1rem;
  line-height: 100%;
}
.portfolio-item__stack {
  display: flex;
  gap: 0.5rem;
  font-size: 1.4rem;
}
</style>

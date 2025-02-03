<template>
  <section class="portfolio" id="portfolio">
    <Container>
      <Heading tag-name="h2" bold class="portfolio__title title"
        >Portfolio</Heading
      >
      <div class="portfolio__inner">
        <PortfolioItem v-for="Card in Cards" :key="Card.name">
          <!-- Image -->
          <template v-slot:image>
            <img :src="Card.image" :alt="Card.name" />
          </template>
          <!-- Title -->
          <template v-slot:title>
            {{ Card.name }}
          </template>
          <!-- Description -->
          <template v-slot:descr>
            {{ Card.descr }}
          </template>
          <!-- Stack -->
          <template v-slot:stack>
            <li v-for="stack in Card.stack" :key="stack" class="stack-element">
              {{ stack }}
            </li>
          </template>
        </PortfolioItem>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { Cards } from "@/entities/portfolio/model/store";
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
import { PortfolioItem } from "@/shared/ui/PortfolioItem";
</script>

<style scoped>
.portfolio {
  padding: 1rem 0;
}
.portfolio__title {
  margin-bottom: 2rem;
}
.portfolio__inner {
  display: grid;
  grid-template-columns: repeat(3, 30rem);
  justify-content: center;
  column-gap: 1.5rem;
}

.stack-element {
  padding: 0.3rem 1rem;
  background: var(--main-white);
  border-radius: 0.6rem;
  color: var(--main-black);
  text-transform: lowercase;
}
</style>

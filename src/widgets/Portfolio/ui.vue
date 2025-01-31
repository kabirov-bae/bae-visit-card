<template>
  <section class="portfolio" id="portfolio">
    <Container>
      <Heading tag-name="h2" bold class="portfolio__title title"
        >Portfolio</Heading
      >
      <div class="portfolio__inner">
        <PortfolioItem v-for="Card in Cards" :key="Card.name" ></PortfolioItem>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { Cards } from "@/entities/portfolio/model/store";
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
import { PortfolioItem } from "@/shared/ui/PortfolioItem";
import vueImg from "@/shared/ui/Assets/Images/vue.png";

console.log(Cards);
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
</style>

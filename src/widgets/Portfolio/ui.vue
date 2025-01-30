<template>
  <section class="portfolio" id="portfolio">
    <Container>
      <Heading tag-name="h2" bold class="title">Portfolio</Heading>
      <div class="portfolio__inner">
        <PortfolioItem name="Synergy Animation" :image="vueImg" />
        <PortfolioItem name="Example v1" />
        <PortfolioItem name="NTB" />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
import { PortfolioItem } from "@/shared/ui/PortfolioItem";
import vueImg from "@/shared/ui/Assets/Images/vue.png";
</script>

<style scoped>
.portfolio {
}
.portfolio__inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>

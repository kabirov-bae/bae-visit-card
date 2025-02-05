<script setup lang="ts">
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
import { Skill } from "@/widgets/Skills";
</script>

<template>
  <section class="skill" id="skill">
    <Container>
      <Heading tag-name="h2" bold class="title">Skills</Heading>
      <div class="skill__inner"></div>
    </Container>
  </section>
</template>

<style scoped>
.skill__inner {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
</style>

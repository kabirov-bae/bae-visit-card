<script setup lang="ts">
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
import { Icons } from "@/shared/ui/Icons";
</script>

<template>
  <section class="skill" id="skill">
    <Container>
      <Heading tag-name="h2" bold class="title">Skills</Heading>
      <div class="skill__inner">
        <Icons :custom-class="'skill__icon'" type="js" />
        <div class="skill-divider"></div>
        <Icons :custom-class="'skill__icon'" type="ts" />
        <div class="skill-divider"></div>
        <Icons :custom-class="'skill__icon'" type="jquery" />
        <div class="skill-divider"></div>
        <Icons :custom-class="'skill__icon'" type="vue" />
        <div class="skill-divider"></div>
        <Icons :custom-class="'skill__icon'" type="gulp" />
        <div class="skill-divider"></div>
        <Icons :custom-class="'skill__icon'" type="react" />
        <div class="skill-divider"></div>
        <Icons :custom-class="'skill__icon'" type="wordpress" />
      </div>
    </Container>
  </section>
</template>

<style>
.skill__inner {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.skill__icon {
  aspect-ratio: 1;
  width: 8rem !important;
  z-index: 2;
}

.skill-divider {
  height: 3rem;
  width: 1px;
  background: var(--main-white);
}

#skill-name {
  position: absolute;
  font-size: 2rem;
  z-index: 1;
}
</style>

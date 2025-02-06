<template>
  <section class="works" id="works">
    <Container>
      <Heading tag-name="h2" bold class="title">Work</Heading>
      <div class="works__text">
        <p>
          I&rsquo;ve been doing web development for 4&nbsp;years now. I&rsquo;ve
          been designing and redesigning multi-page and single-page websites,
          writing scripts and working with various libraries and frameworks (Vue
          remains my&nbsp;favorite). I&nbsp;had experience working with
          Wordpress.
        </p>
        <p>
          I&nbsp;like to&nbsp;create websites with interesting designs.
          My&nbsp;goal is&nbsp;to&nbsp;provide the user with
          a&nbsp;pleasant&nbsp;UX.
        </p>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
</script>

<style scoped>
.works {
}

.works__text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.works__text p {
  font-size: 1.4rem;
  max-width: 50%;
  text-align: center;
  padding: 1rem 0;
}
</style>

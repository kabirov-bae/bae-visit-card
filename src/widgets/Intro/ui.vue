<script setup lang="ts">
import { Avatar } from "@/shared/ui/Avatar";
import { Heading } from "@/shared/ui/Heading";
import { Container } from "@/shared/ui/Container";
</script>
<template>
  <section class="intro" id="intro">
    <Container>
      <div class="intro__inner">
        <Avatar :scale="true" :bg="true" />
        <div class="intro__text">
          <Heading tag-name="h1" bold> Hello, I'm Bae!</Heading>
          <Heading tag-name="h2" bold> I'm Junior Web-Developer. </Heading>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.intro {
}

.intro__inner {
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 2rem;
}

.intro__text {
  display: flex;
  flex-direction: column;
}
</style>

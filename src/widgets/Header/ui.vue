<script setup lang="ts">
import { Container } from "@/shared/ui/Container";
import { Icons } from "@/shared/ui/Icons";

const email: string = "talkingtom32203@mail.ru";
const cv: string = "";
</script>

<template>
  <header class="header" id="header">
    <Container>
      <div class="header__inner">
        <div class="header__links">
          <a class="link" :href="'mailto:' + email">{{ email }}</a>
          <a class="link" :href="cv">cv</a>
        </div>
        <div class="header__socials">
          <Icons v-bind="$attrs" class="header__icon" type="github" />
          <Icons v-bind="$attrs" class="header__icon" type="vk" />
          <Icons v-bind="$attrs" class="header__icon" type="telegram" />
          <Icons v-bind="$attrs" class="header__icon" type="instagram" />
        </div>
      </div>
    </Container>
  </header>
</template>

<style>
.header {
  padding: 3rem 0;
}
.header * {
  text-transform: lowercase;
}
.container {
}
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__links {
  font-size: 1.1rem;
  display: flex;
  gap: 2rem;
}
.header__socials {
  display: flex;
  gap: 0.5rem;
}
</style>

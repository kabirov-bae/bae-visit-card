<script setup lang="ts">
import { Container } from "@/shared/ui/Container";
import { Icons } from "@/shared/ui/Icons";

const email: string = "talkingtom32203@mail.ru";
const cv: string =
  "https://drive.google.com/file/d/17nQ7C9krw3P-dCUJOFxtWS4kqn9WMmPb/view?usp=sharing";
</script>

<template>
  <header class="header" id="header">
    <Container>
      <div class="header__inner">
        <div class="header__links">
          <a class="link" target="_blank" :href="'mailto:' + email">{{
            email
          }}</a>
          <a class="link" target="_blank" :href="cv">cv</a>
        </div>
        <div class="header__socials">
          <Icons :custom-class="'header__icon'" type="github" />
          <Icons :custom-class="'header__icon'" type="vk" />
          <Icons :custom-class="'header__icon'" type="telegram" />
          <Icons :custom-class="'header__icon'" type="instagram" />
        </div>
      </div>
    </Container>
  </header>
</template>

<style>
.header {
  padding: 3rem 0;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;
}

.header * {
  text-transform: lowercase;
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

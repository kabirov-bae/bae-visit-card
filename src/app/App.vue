<template>
  <Header :class="[isLoaded ? 'fade-in' : '', 'unshown']" />
  <Content>
    <Intro class="with-divider" />
    <Skill class="with-divider" />
    <Portfolio class="with-divider" />
    <Work class="with-divider" />
    <Anchors :class="[isLoaded ? 'fade-in' : '', 'unshown']" />
  </Content>
  <Footer />
</template>

<script lang="ts" setup>
import { Content } from "@/shared/ui/Content";
import { Header } from "@/widgets/Header";
import { Intro } from "@/widgets/Intro";
import { Work } from "@/widgets/Work";
import { Portfolio } from "@/widgets/Portfolio";
import { Footer } from "@/widgets/Footer";
import { Skill } from "@/widgets/Skills";
import { Anchors } from "@/widgets/Anchors";
import { ref } from "vue";

const isLoaded = ref(false);
setTimeout(() => {
  isLoaded.value = true;
}, 3000);
</script>

<style>
.unshown {
  opacity: 0;
  transition: opacity 0.5s;
}

.fade-in {
  opacity: 1;
}
</style>

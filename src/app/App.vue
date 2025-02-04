<template>
  <Header />
  <Content>
    <Intro class="with-divider"/>
    <Work class="with-divider" />
    <Portfolio class="with-divider" />
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
</script>

<style scoped></style>

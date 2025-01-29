<template>
  <Header />
  <Content>
    <Intro />
    <Work />
  </Content>
  <Footer />
</template>

<script lang="ts" setup>
import { Content } from "@/shared/ui/Content";
import { Header } from "@/widgets/Header";
import { Intro } from "@/widgets/Intro";
import { Work } from "@/widgets/Work";
import { Footer } from "@/widgets/Footer";
</script>

<style scoped></style>

<template>
  <Header />
  <Content>
    <Intro />
    <Divider />
    <Work />
    <Divider />
    <Portfolio />
    <Divider />
  </Content>
  <Footer />
</template>

<script lang="ts" setup>
import { Content } from "@/shared/ui/Content";
import { Divider } from "@/shared/ui/Divider";
import { Header } from "@/widgets/Header";
import { Intro } from "@/widgets/Intro";
import { Work } from "@/widgets/Work";
import { Portfolio } from "@/widgets/Portfolio";
import { Footer } from "@/widgets/Footer";
</script>

<style scoped></style>

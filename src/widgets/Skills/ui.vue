<script setup lang="ts">
import { Container } from "@/shared/ui/Container";
import { Heading } from "@/shared/ui/Heading";
import { Icons } from "@/shared/ui/Icons";
import { ref } from "vue";

let skillName = ref("");

window.addEventListener("mouseup", (e) => {
  const item = e.target.closest("div");
  const x = item as HTMLElement;
  console.log(x.clientLeft);

  if (item && item.hasAttribute("value")) {
    const v = item.getAttribute("value");
    skillName.value = v;
  } else {
    skillName.value = "";
  }
});
</script>

<template>
  <section class="skill" id="skill">
    <Container>
      <Heading tag-name="h2" bold class="title">Skills</Heading>
      <div class="skill__inner">
        <Icons :custom-class="'skill__icon'" type="js" />
        <Icons :custom-class="'skill__icon'" type="ts" />
        <Icons :custom-class="'skill__icon'" type="jquery" />
        <Icons :custom-class="'skill__icon'" type="vue" />
        <Icons :custom-class="'skill__icon'" type="gulp" />
        <Icons :custom-class="'skill__icon'" type="react" />
        <Icons :custom-class="'skill__icon'" type="wordpress" />
        <span v-if="skillName.length" id="skill-name">{{ skillName }}</span>
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

#skill-name {
  position: absolute;
  font-size: 2rem;
  z-index: 1;
}
</style>

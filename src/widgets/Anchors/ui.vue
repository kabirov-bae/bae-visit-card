<script setup lang="ts">
const sections: string[] = ["skill", "portfolio", "works"];
</script>

<template>
  <aside class="anchors">
    <ul class="anchors__list">
      <li v-for="section in sections" :key="section" class="anchors__item">
        <a :href="'#' + section"></a>
        <span>{{ section }}</span>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.anchors {
  position: fixed;
  left: 1.5rem;
  bottom: 1.5rem;
}
.anchors__list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.anchors__item {
  aspect-ratio: 1;
  width: 2.5rem;
  background: var(--main-white);
  border-radius: 0.4rem;
  transition: 0.3s;
  display: flex;
  position: relative;
}

.anchors__item a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.anchors__item span {
  position: absolute;
  display: inline-block;
  overflow: hidden;
  top: 50%;
  transform: translateY(-50%);
  left: calc(100% + 1rem);
  font-size: 0.8rem;
  text-transform: uppercase;
  transition: 0.3s;
}
.anchors__item:hover {
  cursor: pointer;
}

.anchors__item:hover span {
}
</style>

<template>
  <component :is="props.tagName" :class="['heading', bold ? 'bold' : '']">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
interface Props {
  tagName: "h1" | "h2" | "h3" | "h4" | "h5";
  bold?: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped>
h1 {
  font-size: 6.4rem;
}

h2 {
  font-size: 4.8rem;
}

h3 {
  font-size: 3.6rem;
}

h4 {
  font-size: 2.4rem;
}

h5 {
  font-size: 1.8rem;
}

.bold {
  font-weight: bold;
}
</style>

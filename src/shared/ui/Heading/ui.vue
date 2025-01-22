<template>
  <component :is="props.tagName" :class="['heading', bold ? 'bold' : '']">
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
  font-size: 64px;
}

h2 {
  font-size: 48px;
}

h3 {
  font-size: 36px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 18px;
}

.bold {
  font-weight: bold;
}
</style>

<template>
  <main class="main" id="main">
    <slot></slot>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>

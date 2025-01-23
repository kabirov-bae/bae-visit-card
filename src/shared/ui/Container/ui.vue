<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  padding: 0 24px;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 1400px) {
  .container {
    padding: 20px;
  }
}

@media (max-width: 900px) {
  .container {
    padding: 16px;
  }
}
</style>

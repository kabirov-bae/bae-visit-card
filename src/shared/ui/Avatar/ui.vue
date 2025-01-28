<script setup lang="ts">
import { defineProps } from "vue";

interface IAvatar {
  scale: boolean;
  bg: boolean;
}
interface IAvatarProps {
  scale?: boolean;
  bg?: boolean;
}

const props = defineProps<IAvatarProps>();

const { scale = true, bg = false } = props;
</script>

<template>
  <div
    :class="['avatar', scale ? `avatar--scale` : '', bg ? `avatar--bg` : '']"
  >
    <img src="/img/bae-1.png" alt="" />
  </div>
</template>

<style scoped>
.avatar {
  max-width: 20rem;
  border: 0.3rem solid var(--main-white);
  border-radius: 50%;
  overflow: hidden;
  transition: 0.2s;
}

.avatar img {
  transition: 0.2s;
  filter: brightness(1.5) contrast(0.9);
}

.avatar--bg:hover {
  background: var(--main-white);
}

.avatar--scale:hover img {
  scale: 1.2;
}
</style>

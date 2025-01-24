<template>
  <div class="avatar">
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
  filter: brightness(1.5) contrast(0.9);
}

.avatar:hover {
  background: var(--main-white);
}
</style>

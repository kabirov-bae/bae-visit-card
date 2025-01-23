<template>
  <div ref="cursor" class="cursor"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Cursor } from "@/shared/ui/Cursor";

const cursor = ref<HTMLElement | null>(null); // Создаем ref для курсора

const getCursorPosition = (event: MouseEvent): void => {
  if (cursor.value) {
    // Проверяем, существует ли элемент
    cursor.value.style.left = `${event.clientX}px`;
    cursor.value.style.top = `${event.clientY}px`;
  }
};

const cursorDown = (event: MouseEvent): void => {
  if (cursor.value) {
    cursor.value.style.width = ".2rem";
  }
};
const cursorUp = (event: MouseEvent): void => {
  if (cursor.value) {
    cursor.value.style.width = "3rem";
  }
};

onMounted(() => {
  window.addEventListener("mousemove", getCursorPosition);
  window.addEventListener("mousedown", cursorDown);
  window.addEventListener("mouseup", cursorUp);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", getCursorPosition);
});
</script>

<style scoped>
.cursor {
  position: absolute;
  display: block;
  aspect-ratio: 1;
  width: 3rem;
  translate: -50% -50%;
  border: 1px solid var(--main-white);
  border-radius: 50%;
  transition: width 0.1s;
  
}
</style>

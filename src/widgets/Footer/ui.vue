<script setup lang="ts">
import { Container } from "@/shared/ui/Container";
import { Icons } from "@/shared/ui/Icons";
</script>

<template>
  <footer class="footer" id="footer">
    <Container>
      <div class="footer__inner">
        <div class="footer__copyright">
          &copy;&nbsp;2025 All rights reserved.
        </div>
        <div class="footer__socials">
          <Icons type="github" />
          <Icons type="vk" />
          <Icons type="telegram" />
          <Icons type="instagram" />
        </div>
      </div>
    </Container>
  </footer>
</template>

<style>
.footer {
  padding: 3rem 0;
}
.footer * {
  text-transform: lowercase;
}
.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer__copyright {
  font-size: .8rem;
}
.footer__socials {
  display: flex;
  gap: 0.5rem;
}
</style>

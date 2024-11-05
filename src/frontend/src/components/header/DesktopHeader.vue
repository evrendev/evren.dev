<script setup>
import { TextLogo, MenuItems } from "./"
</script>

<template>
  <div class="page_header">
    <text-logo />
    <menu-items class="desktop-menu" />
  </div>
</template>

<style lang="scss" scoped>
.page_header {
  position: fixed;
  top: 0px;
  right: 70px;
  left: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 11;
  padding: 0px 60px;

  @media (max-width: 1024px) {
    display: none;
  }
}
</style>

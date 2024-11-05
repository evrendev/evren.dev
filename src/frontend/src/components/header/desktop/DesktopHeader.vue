<script setup>
import { TextLogo, MenuItems } from "../shared/"
</script>

<template>
  <div class="desktop-header">
    <text-logo />
    <menu-items class="desktop-menu-items" />
  </div>
</template>

<style lang="scss" scoped>
.desktop-header {
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

  @media (max-width: 1600px) {
    left: 55px;
    right: 55px;
    height: 55px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
}
</style>

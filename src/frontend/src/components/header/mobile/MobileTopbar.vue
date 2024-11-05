<script setup>
import { ref } from "vue"

import { TextLogo } from "../shared/"
import MobileMenuButton from "./MobileMenuButton.vue"

const isOpened = ref(false)

const toggleMenu = () => {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <div class="page_topbar">
    <div class="topbar_inner">
      <text-logo />
      <mobile-menu-button @click="toggleMenu" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page_topbar {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  background-color: #fff;
  z-index: 14;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }

  .topbar_inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }
}
</style>

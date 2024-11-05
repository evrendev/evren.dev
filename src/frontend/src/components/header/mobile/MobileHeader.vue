<script setup>
import { ref } from "vue"
import MobileTopbar from "./MobileTopbar.vue"
import MobileMenu from "./MobileMenu.vue"

const isOpened = ref(false)

const toggleMenu = () => {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <mobile-topbar :is-opened="isOpened" @toggle-menu="toggleMenu" />
  <mobile-menu :is-opened="isOpened" />
</template>

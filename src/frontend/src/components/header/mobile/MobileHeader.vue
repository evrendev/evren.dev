<script setup>
import { ref } from "vue"
import MobileTopbar from "./MobileTopbar.vue"
import MobileMenu from "./MobileMenu.vue"

const isOpened = ref(false)

const toggleMobileMenu = () => {
  isOpened.value = !isOpened.value
}

const closeMobileMenu = () => {
  isOpened.value = false
}
</script>

<template>
  <div class="mobile-header">
    <mobile-topbar :is-opened="isOpened" @toggle-menu="toggleMobileMenu" />
    <mobile-menu :is-opened="isOpened" @close-mobile-menu="closeMobileMenu" />
  </div>
</template>

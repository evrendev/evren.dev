<script setup>
import {
  Preloader,
  Borders,
  HeaderMenu,
  Content,
  MobileMenu,
} from "./components"
</script>

<template>
  <preloader />

  <div class="wrapper">
    <borders />

    <mobile-menu />

    <header-menu />

    <content />
  </div>
</template>

<style scoped></style>

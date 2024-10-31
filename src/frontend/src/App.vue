<script setup>
import {
  Preloader,
  Borders,
  HeaderMenu,
  Content,
  MobileMenu,
  FooterMenu,
} from "./components"
</script>

<template>
  <preloader />

  <div class="wrapper">
    <borders />

    <mobile-menu />

    <header-menu />

    <content />

    <footer-menu />
  </div>
</template>

<style scoped></style>

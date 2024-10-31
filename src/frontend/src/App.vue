<script setup>
import {
  Preloader,
  PageBorders,
  PageHeader,
  PageContent,
  MobileMenu,
} from "./components"
</script>

<template>
  <preloader />

  <div class="wrapper">
    <page-borders />

    <mobile-menu />

    <page-header />

    <page-content />
  </div>
</template>

<style scoped></style>

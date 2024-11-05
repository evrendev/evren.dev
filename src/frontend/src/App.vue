<script setup>
import {
  Preloader,
  PageBorders,
  MobileHeader,
  DesktopHeader,
  PageContent,
  PageFooter,
} from "./components"
</script>

<template>
  <preloader />

  <div class="wrapper">
    <page-borders />

    <mobile-header />

    <desktop-header />

    <page-content />

    <page-footer />
  </div>
</template>

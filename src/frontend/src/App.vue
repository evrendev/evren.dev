<script setup>
import { onErrorCaptured } from "vue"
import {
  Preloader,
  PageBorders,
  MobileHeader,
  DesktopHeader,
  PageContent,
  PageFooter,
} from "./components"

onErrorCaptured((error, instance, errorInfo) => {
  console.error("App Error:", error)
  return false
})
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

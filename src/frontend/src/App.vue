<script setup>
import { onMounted, onErrorCaptured } from "vue"
import {
  Preloader,
  PageBorders,
  MobileHeader,
  DesktopHeader,
  PageContent,
  PageFooter,
} from "./components"

onMounted(() => {
  console.log("📱 App.vue mounted successfully!")
})

onErrorCaptured((error, instance, errorInfo) => {
  console.error("❌ App Error Captured:", error)
  console.error("📍 Error Info:", errorInfo)
  return false // Propagate error
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

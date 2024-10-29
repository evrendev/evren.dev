<script setup>
import { RouterLink, RouterView } from "vue-router"
import PreloaderComponent from "./components/PreloaderComponent.vue"
</script>

<template>
  <preloader-component />

  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>

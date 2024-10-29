<script setup>
import { RouterView } from "vue-router"
import { Preloader, PageBorders, MobileMenu } from "./components"
</script>

<template>
  <preloader />

  <div class="wrapper">
    <page-borders />

    <mobile-menu />

    <div class="page_header">
      <div class="logo transition_link" data-type="image">
        <a href="#home">
          <h3>TRAMP</h3>
        </a>
      </div>
      <div class="menu">
        <ul class="transition_link">
          <li class="active"><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>

    <div class="main_content">
      <div class="main_content_inner">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

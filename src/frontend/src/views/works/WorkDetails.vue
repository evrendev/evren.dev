<script setup>
import { defineProps } from "vue"

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="details">
    <span class="category">
      <a href="#">
        {{ props.category }}
      </a>
    </span>
    <h3 class="title">
      <a href="#" class="portfolio-popup">
        {{ props.title }}
      </a>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.details {
  position: absolute;
  z-index: 1;
  bottom: 25px;
  left: 0px;
  background-color: #fff;
  padding: 15px 25px;
  transform: translateX(-100%);
  transition: all 0.3s ease;

  .category {
    a {
      font-size: 12px;
      color: var(--bc);
      font-style: italic;
    }
  }

  .title {
    font-size: 18px;

    a {
      color: #000;
    }
  }
}
</style>

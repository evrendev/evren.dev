<script setup>
import "vue3-carousel/dist/carousel.css"
import { DynamicImage } from "@/components/shared"
import { Carousel, Slide, Navigation } from "vue3-carousel"

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="preview-image">
    <carousel>
      <template #slides>
        <slide v-for="image in props.images" :key="image">
          <dynamic-image
            class="course-image"
            :file-name="image.fileName"
            :path="image.path"
            :alt="props.title"
          />
        </slide>
      </template>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<style lang="scss">
button {
  &.carousel {
    &__prev,
    &__next {
      background-color: rgba(0, 0, 0, 0.5);
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 1.5rem;
      height: 40px;
      line-height: 40px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      z-index: 2;

      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }
}
</style>

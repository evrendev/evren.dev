<script setup>
import { DynamicImage } from "@/components/shared"

const props = defineProps({
  image: {
    type: Object,
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
    <dynamic-image
      class="course-image"
      :file-name="image.fileName"
      :path="image.path"
      :alt="props.title"
    />
  </div>
</template>

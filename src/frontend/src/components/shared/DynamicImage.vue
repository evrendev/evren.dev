<script setup>
const props = defineProps({
  fileName: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
})

const src = new URL(
  `../../assets/images/${props.path}/${props.fileName}`,
  import.meta.url,
).href
</script>

<template>
  <img :src="src" :alt="alt" />
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
})
</script>

<template>
  <div class="page-title">
    <h3>
      <span>
        {{ props.title }}
      </span>
    </h3>
  </div>
</template>
<style lang="scss" scoped>
.page-title {
  width: 100%;

  h3 {
    font-size: 17px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  span {
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 50px;
  }
}
</style>

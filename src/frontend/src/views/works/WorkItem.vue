<script setup>
import { ref } from "vue"
import { defineProps } from "vue"
import { PreviewImage, WorkDetails, ModalBox } from "."

const props = defineProps({
  work: {
    type: Object,
    required: true,
  },
})

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}

const closeModal = () => {
  isModalOpened.value = false
}
</script>

<template>
  <article class="work-item">
    <preview-image :image="props.work.images[0]" :title="props.work.title" />

    <work-details
      :category="props.work.category"
      :title="props.work.title"
      @click.prevent="openModal"
    />

    <modal-box
      name="work-modal"
      :isOpen="isModalOpened"
      @modal-close="closeModal"
      :work="props.work"
    />
  </article>
</template>

<style lang="scss" scoped>
.work-item {
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &:hover {
    cursor: pointer;

    .details {
      transform: translateX(25px);
    }
  }
}
</style>

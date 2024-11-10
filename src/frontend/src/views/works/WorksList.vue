<script setup>
import { WorkItem } from "./"

const props = defineProps({
  works: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="works-list">
    <ul class="work-items">
      <li v-for="work in props.works" :key="work">
        <work-item :work="work" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.works-list {
  width: 100%;

  ul {
    &.work-items {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 15px;

      @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>

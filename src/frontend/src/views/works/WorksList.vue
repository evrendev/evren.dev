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
      <li class="modalbox" v-for="work in props.works" :key="work">
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
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 15px;

      li {
        width: 50%;

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
}
</style>

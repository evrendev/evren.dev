<script setup>
import { defineEmits } from "vue"
import { TextLogo } from "../shared/"
import MobileMenuButton from "./MobileMenuButton.vue"

const emit = defineEmits(["toggle-menu"])

const props = defineProps({
  isOpened: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div class="mobile-topbar">
    <div class="topbar-inner">
      <text-logo />
      <mobile-menu-button
        @click.prevent="emit('toggle-menu')"
        :is-opened="props.isOpened"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-topbar {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  background-color: #fff;
  z-index: 14;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }

  .topbar-inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }
}
</style>

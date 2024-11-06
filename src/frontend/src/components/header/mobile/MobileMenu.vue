<script setup>
import { defineEmits } from "vue"
import { MenuItems, LocaleSwitcher } from "../shared/"
import { EmailLink, SocialMediaAccounts } from "@/components/shared/"

const props = defineProps({
  isOpened: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(["close-mobile-menu"])
</script>

<template>
  <div class="mobile-menu" :class="{ opened: props.isOpened }">
    <menu-items
      class="mobile-menu-items"
      @close-mobile-menu="emit('close-mobile-menu')"
    />
    <div class="extra">
      <social-media-accounts style="margin-bottom: 5px" />
      <email-link />
      <div class="fixed-bottom">
        <locale-switcher />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  top: 50px;
  right: -200px;
  height: 100vh;
  width: 200px;
  z-index: 15;
  background-color: #fff;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &.opened {
    right: 0px;
  }

  .menu-items {
    width: 100%;
    height: auto;
    text-align: right;
    padding: 100px 20px 0px 20px;
  }

  .extra {
    width: 100%;
    text-align: right;
    padding: 0px 20px;
    margin-top: 50px;

    .fixed-bottom {
      position: fixed;
      bottom: 20px;
      right: 20px;
    }
  }
}
</style>

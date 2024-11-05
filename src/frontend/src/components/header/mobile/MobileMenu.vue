<script setup>
import { MenuItems } from "../shared/"
import { EMail, SocialMediaAccounts } from "@/components/shared/"

const props = defineProps({
  isOpened: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <div class="mobile-menu" :class="{ opened: props.isOpened }">
    <menu-items class="menu-items" />
    <div class="extra">
      <social-media-accounts style="margin-bottom: 5px" />
      <EMail />
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
  }
}
</style>

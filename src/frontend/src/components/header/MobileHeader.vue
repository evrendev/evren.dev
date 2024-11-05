<script setup>
import { ref } from "vue"
import { TextLogo, MenuItems, MobileMenuButton } from "./"
import { EMail, SocialMediaAccounts } from "../shared/"

const isOpened = ref(false)

const toggleMenu = () => {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <div class="page_topbar">
    <div class="topbar_inner">
      <text-logo />
      <mobile-menu-button @click="toggleMenu" />
    </div>
  </div>

  <div class="mobile-menu" :class="{ opened: isOpened }">
    <menu-items class="menu-items" />
    <div class="extra">
      <social-media-accounts style="margin-bottom: 5px" />
      <EMail />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page_topbar {
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

  .topbar_inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }

  .logo {
    h3 {
      font-family: "Montserrat";
      font-weight: 700;
      font-size: 25px;
      letter-spacing: 5px;
    }
  }
}

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

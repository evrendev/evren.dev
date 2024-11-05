<script setup>
import { EMail, SocialMediaAccounts } from "../shared/"
</script>

<template>
  <div class="page_footer">
    <EMail />
    <social-media-accounts />
  </div>
</template>

<style lang="scss" scoped>
.page_footer {
  position: fixed;
  z-index: 11;
  bottom: 0px;
  left: 55px;
  right: 55px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;

  @media (max-width: 1600px) {
    left: 55px;
    right: 55px;
    height: 55px;
  }

  @media (max-width: 1024px) {
    left: 0px;
    right: 0px;
    justify-content: center;
    gap: 20px;
  }
}
</style>

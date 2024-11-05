<script setup>
import { RouterView } from "vue-router"
</script>

<template>
  <div class="main_content">
    <div class="main_content_inner">
      <router-view v-slot="{ Component, route }">
        <transition
          :enter-active-class="route.meta.enterActiveClass"
          :enter-leave-class="route.meta.enterLeaveClass"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

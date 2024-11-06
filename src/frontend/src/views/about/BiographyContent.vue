<script setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>

<template>
  <div class="text">
    <p class="biography" v-text="t('page.about.biography.content')" />
  </div>
</template>

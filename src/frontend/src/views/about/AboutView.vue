<script setup>
import { useI18n } from "vue-i18n"
import { PageTitle } from "@/components/shared"
import { BiographyContent, DownloadCvButton } from "./"

const { t } = useI18n()
</script>

<template>
  <div class="section about">
    <div class="container">
      <div class="page">
        <page-title :title="t('page.about.biography.title')" />

        <biography-content />

        <download-cv-button />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  .container {
    width: 100% !important;
    height: 100% !important;

    .page {
      width: 100%;
      min-height: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      flex-direction: column;
      row-gap: 35px;

      @media screen and (max-width: 1024px) {
        padding: 100px 0;
      }
    }
  }
}
</style>

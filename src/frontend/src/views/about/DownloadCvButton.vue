<script setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n()

const pdfFileSrc = new URL(
  "@/assets/documents/Evren_Yeniev_CV.pdf",
  import.meta.url,
).href
</script>

<template>
  <div class="page-button">
    <a :href="pdfFileSrc" target="_blank" class="text_effect"
      ><span class="wrapper">
        <span class="before">{{ t("page.about.biography.download-cv") }}</span
        ><span class="after">{{
          t("page.about.biography.download-cv")
        }}</span></span
      ></a
    >
  </div>
</template>

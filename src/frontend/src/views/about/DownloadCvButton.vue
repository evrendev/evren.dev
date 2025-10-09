// DownloadButton.vue

<script setup>
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import { Fancybox } from "@fancyapps/ui"
import { computed, watch, onMounted } from "vue"
import { useI18n } from "vue-i18n"

import enPdf from "@/assets/documents/Evren_Yeniev_Resume_en.pdf"
import dePdf from "@/assets/documents/Evren_Yeniev_Resume_de.pdf"

const { t, locale } = useI18n()

const pdfFiles = {
  en: enPdf,
  de: dePdf,
}

const pdfFileSrc = computed(() => {
  return pdfFiles[locale.value] || pdfFiles.en
})

watch(
  () => locale.value,
  newLocale => {
    Fancybox.destroy()
    Fancybox.bind("[data-fancybox]", {
      l10n: newLocale,
    })
  },
  {},
)

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {
    l10n: locale.value,
  })
})
</script>

<template>
  <div class="page-button">
    <a :href="pdfFileSrc" class="text-effect" data-fancybox>
      <span class="wrapper">
        <span class="before">{{ t("page.about.biography.download-cv") }}</span>
        <span class="after">{{ t("page.about.biography.download-cv") }}</span>
      </span>
    </a>
  </div>
</template>

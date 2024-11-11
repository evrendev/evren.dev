<script setup>
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import { Fancybox } from "@fancyapps/ui"
import { ref, watch } from "vue"
import { useI18n } from "vue-i18n"
import { useRoute } from "vue-router"

const { t } = useI18n()

const route = useRoute()
const currentLanguage = ref(route.params.locale)
watch(
  () => route.params.locale,
  async value => (currentLanguage.value = value),
)

Fancybox.bind("[data-fancybox]", {
  l10n: currentLanguage.value,
})

const pdfFileSrc = new URL(
  "@/assets/documents/Evren_Yeniev_CV.pdf",
  import.meta.url,
).href
</script>

<template>
  <div class="page-button">
    <a :href="pdfFileSrc" class="text-effect" data-fancybox
      ><span class="wrapper">
        <span class="before">{{ t("page.about.biography.download-cv") }}</span
        ><span class="after">{{
          t("page.about.biography.download-cv")
        }}</span></span
      ></a
    >
  </div>
</template>

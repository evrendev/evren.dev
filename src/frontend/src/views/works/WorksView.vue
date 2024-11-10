<script setup>
import { reactive } from "vue"
import { useI18n } from "vue-i18n"
import { PageTitle } from "@/components/shared"
import { WorksList } from "./"

const { t } = useI18n()

const works = reactive([
  {
    title: t("page.works.some-projects.goztepe.title"),
    category: t("page.works.some-projects.goztepe.category"),
    description: t("page.works.some-projects.goztepe.description"),
    technologies: ["HTML", "CSS", "JavaScript"],
    client: t("page.works.some-projects.goztepe.client"),
    images: [
      {
        fileName: "1.png",
        path: "works/goztepe",
      },
      {
        fileName: "2.png",
        path: "works/goztepe",
      },
      {
        fileName: "3.png",
        path: "works/goztepe",
      },
      {
        fileName: "4.png",
        path: "works/goztepe",
      },
    ],
    url: "https://www.goztepe.org.tr/",
    sourceCode: null,
  },
])
</script>

<template>
  <div class="section works">
    <div class="container">
      <div class="page">
        <page-title :title="t('page.works.some-projects.title')" />

        <works-list :works="works" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.works {
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
      row-gap: 30px;

      @media screen and (max-width: 1024px) {
        padding: 100px 0;
      }
    }
  }
}
</style>

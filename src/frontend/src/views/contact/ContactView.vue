<script setup>
import { useI18n } from "vue-i18n"
import { PageTitle } from "@/components/shared"
import { InfoList, ContactForm } from "./"

const { t } = useI18n()
</script>

<template>
  <div class="section contact">
    <div class="container">
      <div class="page_contact">
        <page-title :title="t('page.contact.title')" />

        <info-list />

        <contact-form />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page_contact {
  width: 100%;
  padding: 100px 0px;
}
</style>

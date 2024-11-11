<script setup>
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>

<template>
  <div class="mailto">
    <p>
      <a
        href="#"
        rel="nofollow"
        class="line-effect"
        :onclick="`this.href='mailto:${t('page.contact.email.initial')}@${t(
          'page.contact.email.domain',
        )}'`"
        >{{ t("page.contact.email.text") }}</a
      >
    </p>
  </div>
</template>

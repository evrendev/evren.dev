<script setup>
import { useI18n } from "vue-i18n"
import { reactive, ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
import Tr from "@/plugins/i18n/translation"

const { t } = useI18n()

const supportedLocales = reactive(Tr.supportedLocales)
const currentLocal = ref(Tr.currentLocale)
const otherLanguage = ref(
  supportedLocales.find(locale => locale !== currentLocal.value),
)

const router = useRouter()

const switchLanguage = async value => {
  await Tr.switchLanguage(value)
  await router.push(`/${value}`)
}

const route = useRoute()

watch(
  () => route.params.locale,
  async value =>
    (otherLanguage.value = supportedLocales.find(locale => locale !== value)),
)
</script>

<template>
  <div class="locale-wrapper">
    <a href="#" @click.prevent="switchLanguage(otherLanguage)">
      {{ t(`locale.${otherLanguage}`) }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
.locale-wrapper {
  position: relative;
  padding-left: 30px;

  @media screen and (min-width: 1024px) {
    &::before {
      content: "";
      display: inline-flex;
      position: absolute;
      top: 5px;
      left: 0;
      width: 1px;
      height: 1rem;
      background-color: black;
    }
  }

  > a {
    color: var(--bc);
    transition: all 0.3s ease;

    &:hover {
      color: #000;
    }
  }
}
</style>

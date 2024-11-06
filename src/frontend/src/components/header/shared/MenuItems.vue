<script setup>
import { useI18n } from "vue-i18n"
import { defineEmits } from "vue"
import { LocaleSwitcher } from "."
const { t } = useI18n()

const emit = defineEmits(["close-mobile-menu"])
</script>

<template>
  <div>
    <ul>
      <li>
        <router-link
          :to="{ name: 'home' }"
          @click.prevent="emit('close-mobile-menu')"
        >
          {{ t("components.nav.home.text") }}
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'about' }"
          @click.prevent="emit('close-mobile-menu')"
        >
          {{ t("components.nav.about.text") }}
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'works' }"
          @click.prevent="emit('close-mobile-menu')"
        >
          {{ t("components.nav.works.text") }}
        </router-link>
      </li>
      <li>
        <router-link
          :to="{ name: 'contact' }"
          @click.prevent="emit('close-mobile-menu')"
        >
          {{ t("components.nav.contact.text") }}
        </router-link>
      </li>
      <li>
        <locale-switcher />
      </li>
    </ul>
  </div>
</template>

<style type="scss" scoped>
ul {
  display: flex;
  align-items: center;

  li {
    margin-right: 40px;

    @media (max-width: 1600px) {
      margin-right: 30px;
    }

    a {
      color: var(--bc);
      transition: all 0.3s ease;

      &.exact-active,
      &:hover {
        color: #000;
      }
    }

    &:last-child {
      margin-right: 0px;
    }
  }
}

.mobile-menu-items {
  width: 100%;
  height: auto;
  text-align: right;
  padding: 100px 20px 0px 20px;

  ul {
    display: block;
    margin: 0;
    list-style: none;

    li {
      margin: 0 0 7px 0;
    }
  }
}
</style>

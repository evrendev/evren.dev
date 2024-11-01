<script setup>
import "hamburgers/dist/hamburgers.min.css"
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { useI18n } from "vue-i18n"
import { EMail, SocialMediaAccounts } from "."

const isOpened = ref(false)
const { t } = useI18n()

const toggleMenu = () => {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <div class="page_topbar">
    <div class="topbar_inner">
      <div class="logo transition_link" data-type="text">
        <router-link :to="{ name: 'home' }">
          <h3>EVREN</h3>
        </router-link>
      </div>
      <div class="trigger">
        <div
          class="hamburger hamburger--slider"
          @click="toggleMenu"
          :class="{ 'is-active': isOpened }"
        >
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="page_mobile_menu" :class="{ opened: isOpened }">
    <div class="menu_list">
      <ul class="transition_link">
        <li>
          <router-link :to="{ name: 'home' }" @click="toggleMenu">
            {{ t("components.nav.home.text") }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }" @click="toggleMenu">
            {{ t("components.nav.about.text") }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'works' }" @click="toggleMenu">
            {{ t("components.nav.works.text") }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact' }" @click="toggleMenu">
            {{ t("components.nav.contact.text") }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="extra">
      <social-media-accounts style="margin-bottom: 5px" />
      <EMail />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page_topbar {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  background-color: #fff;
  z-index: 14;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }

  .topbar_inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }

  .logo {
    h3 {
      font-family: "Montserrat";
      font-weight: 700;
      font-size: 25px;
      letter-spacing: 5px;
    }
  }

  .trigger {
    position: relative;
    top: 5px;

    .hamburger {
      padding: 0px;
      .hamburger-box {
        width: 30px;

        .hamburger-inner,
        .hamburger-inner:after,
        .hamburger-inner:before {
          width: 30px;
          height: 2px;
        }
      }
    }
  }
}

.page_mobile_menu {
  position: fixed;
  top: 50px;
  right: -200px;
  height: 100vh;
  width: 200px;
  z-index: 15;
  background-color: #fff;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &.opened {
    right: 0px;
  }

  .menu_list {
    width: 100%;
    height: auto;
    text-align: right;
    padding: 100px 20px 0px 20px;

    ul {
      margin: 0px;
      list-style-type: none;

      li {
        margin: 0px 0px 7px 0px;

        a {
          color: var(--bc);
          transition: all 0.3s ease;

          &.exact-active {
            color: #000;
          }
        }
      }
    }
  }

  .extra {
    width: 100%;
    text-align: right;
    padding: 0px 20px;
    margin-top: 50px;
  }
}
</style>

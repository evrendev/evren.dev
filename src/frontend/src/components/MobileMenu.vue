<script setup>
import { RouterLink } from "vue-router"
import "hamburgers/dist/hamburgers.min.css"
import { ref } from "vue"

let isOpened = ref(false)

const toggleMenu = () => {
  isOpened.value = !isOpened.value
}
</script>

<template>
  <div class="page_topbar">
    <div class="topbar_inner">
      <div class="logo transition_link" data-type="text">
        <router-link :to="{ name: 'home' }">
          <h3 class="font-kanit w500">EVREN</h3>
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
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">About</router-link>
        </li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div class="extra">
      <div class="social">
        <ul>
          <li>
            <a href="#"><img class="svg" src="@/assets/icons/github.svg" /></a>
          </li>
          <li>
            <a href="#"
              ><img class="svg" src="@/assets/icons/leetcode.svg"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img class="svg" src="@/assets/icons/linkedin.svg"
            /></a>
          </li>
          <li>
            <a href="#"><img class="svg" src="@/assets/icons/twitter.svg" /></a>
          </li>
        </ul>
      </div>
      <div class="copyright">
        <p>&copy; 2024 Tramp. All rights are reserved</p>
      </div>
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
      font-size: 25px;
      letter-spacing: 4px;
    }

    &[data-type="image"] {
      img {
        display: inline-block;
      }

      h3 {
        display: none;
      }
    }

    &[data-type="text"] {
      img {
        display: none;
      }
      h3 {
        display: inline-block;
      }
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
          color: #000;
        }
      }
    }
  }

  .extra {
    width: 100%;
    text-align: right;
    padding: 0px 20px;
    margin-top: 50px;

    .social {
      width: 100%;
      margin-bottom: 5px;

      ul {
        display: flex;
        justify-content: flex-end;

        li {
          margin-right: 10px;

          &:last-child {
            margin-right: 0px;

            a {
              color: var(--bc);
              transition: all 0.3s ease;

              &:hover {
                color: #000;
              }
            }
          }
        }
      }
    }
  }
}
</style>

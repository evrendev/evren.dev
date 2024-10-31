<script setup></script>

<template>
  <div class="page_header">
    <div class="logo transition_link" data-type="text">
      <a href="#home">
        <h3>EVREN</h3>
      </a>
    </div>
    <div class="menu">
      <ul class="transition_link">
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">About</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'portfolio' }" @click="toggleMenu"
            >Portfolio</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'contact' }" @click="toggleMenu"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page_header {
  position: fixed;
  top: 0px;
  right: 70px;
  left: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 11;
  padding: 0px 60px;

  .logo {
    img {
      max-width: 130px;
    }

    h3 {
      font-family: "Montserrat";
      font-weight: 900;
      font-size: 31px;
      letter-spacing: 5px;
    }
  }
  .menu {
    ul {
      display: flex;
      align-items: center;

      li {
        margin-right: 40px;

        a {
          color: var(--bc);
          transition: all 0.3s ease;

          &.active,
          &:hover {
            color: #000;
          }
        }

        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>

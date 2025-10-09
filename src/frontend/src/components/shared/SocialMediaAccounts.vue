<script setup>
import SvgIcon from "./SvgIcon.vue"
</script>

<template>
  <div class="social">
    <ul>
      <li>
        <a href="https://github.com/evrendev" target="_blank">
          <svg-icon name="github" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/evrenyeniev/" target="_blank">
          <svg-icon name="linkedin" />
        </a>
      </li>
      <li>
        <a href="https://x.com/evrendev" target="_blank">
          <svg-icon name="twitter" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.social {
  ul {
    display: flex;
    gap: 10px;
    justify-content: flex-end;

    li {
      a {
        transition: all 0.3s ease;

        svg {
          fill: black;
        }
      }

      &:last-child {
        margin-right: 0px;
      }
    }
  }
}
</style>

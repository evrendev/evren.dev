<script setup>
const props = defineProps({
  isOpened: {
    type: Boolean,
    required: true,
  },
})
</script>
<template>
  <div class="trigger">
    <button class="hamburger-menu">
      <input type="checkbox" class="menu-checkbox" :checked="props.isOpened" />
      <label for="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.trigger {
  position: relative;
  top: 20px;

  .hamburger-menu {
    border: none;
    background-color: transparent;
    display: inline-block;
    margin: 0;

    label {
      position: relative;
      display: inline-block;
      width: 30px;
      height: 30px;
      transform: translateY(-50%);
      transition: 0.3s ease transform;
      cursor: pointer;

      div {
        width: 6px;
        height: 6px;
        background-color: #143240;
        margin-left: 0;
        margin-bottom: 6px;
        border-radius: 4px;
        transition:
          0.3s ease width,
          0.3s ease margin-left,
          0.3s ease margin-bottom,
          0.3s ease background-color;

        &:first-child {
          width: 22px;
        }

        &:nth-child(2) {
          width: 15px;
        }

        &:last-child {
          width: 30px;
          margin-bottom: 0;
        }
      }
    }
    input {
      &.menu-checkbox {
        display: none;

        &:checked + label {
          transform: translateY(-50%) rotateZ(-90deg);
        }

        &:checked + label div {
          width: 6px;
          margin-left: 12px;
          margin-bottom: 3px;
        }
      }
    }
  }
}
</style>

<script setup>
import { defineProps, defineEmits, ref } from "vue"
import { useI18n } from "vue-i18n"
import { onClickOutside } from "@vueuse/core"
import { SvgIcon, DynamicImage } from "@/components/shared"

const { t } = useI18n()

const props = defineProps({
  isOpen: Boolean,
  work: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(["modal-close"])

const target = ref(null)
onClickOutside(target, () => emit("modal-close"))
</script>

<template>
  <div v-if="props.isOpen" class="modal-window">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-close">
          <a href="#" @click.stop="emit('modal-close')">
            <svg-icon name="times" />
          </a>
        </div>
        <div class="modal-body">
          <div class="banner">
            <dynamic-image
              class="course-image"
              :file-name="props.work.images[0].fileName"
              :path="props.work.images[0].path"
              :alt="props.work.title"
            />
          </div>
          <div class="details">
            <h3 v-text="props.work.title" />
            <span>
              <a href="#" v-text="props.work.category" />
            </span>
          </div>
          <div class="main">
            <div class="textbox" v-html="props.work.description" />
            <div class="info">
              <ul>
                <li>
                  <span class="first" v-text="t('page.works.info.client')" />
                  <span v-text="props.work.client" />
                </li>
                <li>
                  <span class="first" v-text="t('page.works.info.category')" />
                  <span v-text="props.work.category" />
                </li>
                <li>
                  <span
                    class="first"
                    v-text="t('page.works.info.technologies')"
                  />
                  <span v-text="props.work.technologies.join(', ')" />
                </li>
                <li>
                  <span class="first">URL</span>
                  <a
                    :href="props.work.url"
                    v-text="props.work.url"
                    target="_blank"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="images">
            <ul>
              <li v-for="image in props.work.images.slice(1)" :key="image">
                <div class="inner">
                  <dynamic-image
                    :file-name="image.fileName"
                    :path="image.path"
                    :alt="props.work.title"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-window {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9998;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  .modal-wrapper {
    position: absolute;
    top: 70px;
    bottom: 70px;
    width: 968px;
    left: 50%;
    transform: translateX(-53%);
    background-color: #fff;
    opacity: 1;
    visibility: visible;
    transition-delay: 0.3s;
    transform: translateX(-50%);

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    @media screen and (max-width: 1024px) {
      width: 90%;
    }

    .modal-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 50px;
      overflow-y: scroll;
      scrollbar-width: thin;
      scrollbar-color: #bbb #fff;

      @media screen and (max-width: 1024px) {
        padding: 15px;
      }

      &:before {
        position: fixed;
        content: "";
        top: 0px;
        left: 0px;
        right: 0px;
        height: 50px;
        background-color: #fff;
        z-index: 5;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      &:after {
        position: fixed;
        content: "";
        bottom: 0px;
        left: 0px;
        right: 0px;
        height: 50px;
        background-color: #fff;
        z-index: 5;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }

      &::-webkit-scrollbar {
        width: 11px;
      }

      &:-webkit-scrollbar-track {
        background: #fff;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #bbb;
        border-radius: 10px;
        border: 3px solid #fff;
      }

      .modal-close {
        position: fixed;
        left: 100%;
        top: 0px;
        z-index: 10;

        @media screen and (max-width: 1024px) {
          left: 0;
          top: -40px;
        }

        a {
          display: block;
          width: 40px;
          height: 40px;
          text-decoration: none;
          color: #fff;
          border: 2px solid #fff;
          position: relative;

          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;

          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          &:hover {
            border-radius: 100%;
          }
        }
      }

      .banner {
        position: relative;
        overflow: hidden;
        margin-bottom: 30px;

        img {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        row-gap: 5px;

        h3 {
          font-size: 20px;
        }

        span {
          a {
            display: inline-block;
            color: var(--bc);

            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -ms-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
            font-style: italic;
            font-size: 12px;
          }
        }
      }

      .main {
        width: 100%;
        height: auto;
        display: flex;
        margin-bottom: 60px;

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }

        .textbox {
          width: 70%;
          text-align: justify;

          @media screen and (max-width: 768px) {
            width: 100%;
          }
        }

        .info {
          width: 30%;
          padding-left: 40px;

          @media screen and (max-width: 768px) {
            width: 100%;
            padding-left: 0px;
          }

          ul {
            margin: 0px;
            list-style-type: none;

            li {
              margin: 0px 0px 10px 0px;
              width: 100%;

              &:last-child {
                margin-bottom: 0px;
              }

              .first {
                font-weight: 600;
                display: block;
              }

              a {
                display: inline-block;
                color: var(--bc);

                -webkit-transition: all 0.3s ease;
                -moz-transition: all 0.3s ease;
                -ms-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;
                font-style: italic;
              }
            }
          }
        }
      }

      .images {
        width: 100%;
        height: auto;

        ul {
          list-style-type: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: auto;
          column-gap: 30px;
          row-gap: 60px;

          @media screen and (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            column-gap: unset;
          }

          li {
            &:first-child {
              grid-column: span 2;

              @media screen and (max-width: 768px) {
                grid-column: 1;
              }
            }

            img {
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
}
</style>

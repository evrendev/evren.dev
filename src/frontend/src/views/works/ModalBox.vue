<script setup>
import "vue3-carousel/dist/carousel.css"
import { defineProps, defineEmits, ref } from "vue"
import { useI18n } from "vue-i18n"
import { onClickOutside } from "@vueuse/core"
import { Carousel, Slide, Navigation } from "vue3-carousel"
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
          <div class="carousel-wrapper">
            <carousel>
              <template #slides>
                <slide v-for="image in props.work.images" :key="image">
                  <dynamic-image
                    class="course-image"
                    :file-name="image.fileName"
                    :path="image.path"
                    :alt="props.title"
                  />
                </slide>
              </template>

              <template #addons>
                <navigation />
              </template>
            </carousel>
          </div>
          <div class="details">
            <h3 v-text="props.work.title" />
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
                <li v-if="props.work.sourceCode">
                  <span
                    class="first"
                    v-text="t('page.works.info.source-code')"
                  />
                  <a
                    :href="props.work.sourceCode"
                    v-text="props.work.sourceCode"
                    target="_blank"
                  />
                </li>
              </ul>
            </div>
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

      .carousel-wrapper {
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
    }
  }
}
</style>

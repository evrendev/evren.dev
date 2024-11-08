<script setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>

<template>
  <div class="section home">
    <div class="container">
      <div class="page">
        <div class="left square">
          <div class="box">
            <div class="image">
              <img
                src="@/assets/images/about-me/evren-yeniev.webp"
                alt="Evren Yeniev"
              />
              <div class="main"></div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="name">
            <h3>
              <span class="stroke-text">Evren</span>
              Yeniev
            </h3>
          </div>
          <div class="text">
            <p v-text="t('page.home.description')" />
          </div>
          <div class="page-button">
            <router-link :to="{ name: 'contact' }" class="text_effect"
              ><span class="wrapper">
                <span class="before">{{ t("page.home.get-in-touch") }}</span
                ><span class="after">{{
                  t("page.home.get-in-touch")
                }}</span></span
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  .container {
    width: 100% !important;
    height: 100% !important;

    .page {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      @media (max-width: 1024px) {
        flex-direction: column;
      }

      .left {
        width: 50%;
        padding-right: 80px;

        @media (max-width: 1600px) {
          padding-right: 115px;
        }

        @media (max-width: 1024px) {
          max-width: 300px;
          padding: 0px 20px;
        }

        .box {
          @media (max-width: 1024px) {
            width: 100%;
            padding-right: 0px;
            margin-bottom: 50px;
          }

          .image {
            position: relative;

            img {
              opacity: 0;
              min-width: 100%;
            }

            .main {
              background-image: url("@/assets/images/about-me/evren-yeniev.webp");
              border-radius: 0px;

              position: absolute;
              top: 0px;
              bottom: 0px;
              left: 0px;
              right: 0px;
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;

              filter: grayscale(100%);
              transition: filter 1s ease;

              &:hover {
                filter: grayscale(0%);
              }

              &:before {
                border-radius: 0px;
                position: absolute;
                content: "";
                top: -20px;
                bottom: -20px;
                left: -20px;
                right: -20px;
                border: 1px solid rgba(0, 0, 0, 0.1);
              }
            }
          }
        }
      }

      .right {
        width: 50%;
        padding-left: 50px;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        @media (max-width: 1600px) {
          padding-left: 0px;
        }

        @media (max-width: 1024px) {
          width: 100%;
          padding-left: 0px;
        }

        .name {
          h3 {
            font-family: "Archivo Black";
            font-size: 48px;
            text-transform: uppercase;

            @media (max-width: 1600px) {
              font-size: 42px;
            }

            @media (max-width: 1024px) {
              font-size: 36px;
            }

            .stroke-text {
              -webkit-text-stroke: 1px #000;
              color: transparent;
            }
          }
        }

        text {
          margin-bottom: 31px;
        }
      }
    }
  }
}
</style>

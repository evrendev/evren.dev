<script setup>
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>

<template>
  <div class="infolist">
    <ul>
      <li>
        <div class="list_inner">
          <span>
            {{ t("page.contact.email.title") }}
          </span>
          <span>
            <a
              href="#"
              rel="nofollow"
              class="line_effect"
              :onclick="`this.href='mailto:${t('page.contact.email.initial')}@${t(
                'page.contact.email.domain',
              )}'`"
              >{{ t("page.contact.email.text") }}</a
            >
          </span>
        </div>
      </li>
      <li>
        <div class="list_inner">
          <span>
            {{ t("page.contact.form.phone.text") }}
          </span>
          <span>
            <a
              class="line_effect"
              :href="`tel:${t('page.contact.phone.plain')}`"
            >
              {{ t("page.contact.phone.formatted") }}
            </a>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.infolist {
  width: 100%;
  margin-top: 70px;

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;

    @media (max-width: 768px) {
      flex-direction: column;
      margin-left: 0px;
    }

    li {
      width: 50%;
      padding-left: 15px;
      margin-bottom: 40px;
      text-align: center;

      @media (max-width: 768px) {
        width: 100%;
        padding: 0px;
        margin-bottom: 15px;
      }

      .list_inner {
        width: 100%;
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 30px 10px;

        span {
          display: block;

          &:first-child {
            font-weight: 500;
            color: #000;
          }
        }
      }
    }
  }
}
</style>

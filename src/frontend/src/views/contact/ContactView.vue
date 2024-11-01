<script setup>
import { ref, reactive, computed } from "vue"
import { storeToRefs } from "pinia"
import { createToaster } from "@meforma/vue-toaster"
import { Form as VForm, Field as VField, ErrorMessage } from "vee-validate"
import { object, string } from "yup"
import { VueRecaptcha } from "vue-recaptcha"
import { useI18n } from "vue-i18n"
import { useMailStore } from "@/stores"

const { t, locale } = useI18n()

const mailStore = useMailStore()

const siteKey = computed(() => {
  return import.meta.env.VITE_GOOGLE_SITE_KEY
})

const handleCaptchaError = error => {
  toaster.error(error ?? "Captcha Error!")
}

const handleCaptchaSuccess = response => {
  message.response = response
}

const handleCaptchaRender = () => {
  googleRecaptcha.value.reset()
}

const googleRecaptcha = ref()

const { response } = storeToRefs(mailStore)

const schema = object().shape({
  name: string().required(t("page.contact.form.name.required")),
  email: string()
    .email(t("page.contact.form.email.invalid"))
    .required(t("page.contact.form.email.required")),
  subject: string().required(t("page.contact.form.subject.required")),
  message: string().required(t("page.contact.form.message.required")),
})

const initialFormValue = () => ({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  response: "",
})

const message = reactive(initialFormValue())

const resetFormValues = () => Object.assign(message, initialFormValue())

const toaster = createToaster({
  position: "top-right",
  duration: 3000,
  queue: true,
  pauseOnHover: true,
  useDefaultCss: true,
})

async function onSubmit(values, { resetForm }) {
  try {
    window.scrollTo({ top: 0, behavior: "smooth" })
    await mailStore.send(message)

    if (!response.value.error) {
      toaster.success(response.value.message)
      resetForm()
      resetFormValues()
    }
  } catch (error) {
    toaster.error(error)
  }
}

const onInvalidSubmit = ({ errors }) => {
  setTimeout(() => {
    const errorKeys = Object.entries(errors)
      .map(([key, value]) => ({ key, value }))
      .filter(error => error["value"].length)

    const firstErrorElement = document.querySelector(
      `[name="${errorKeys[0]["key"]}"]`,
    )

    firstErrorElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }, 100)
}
</script>

<template>
  <div class="section contact">
    <div class="container">
      <div class="page_contact">
        <div class="page_title">
          <h3>
            <span>
              {{ t("page.contact.get-in-touch") }}
            </span>
          </h3>
        </div>
        <div class="infolist">
          <ul>
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
          </ul>
        </div>
        <div class="form_wrapper">
          <v-form
            id="contact-form"
            autocomplete="off"
            @submit="onSubmit"
            @invalid-submit="onInvalidSubmit"
            :validation-schema="schema"
            :initial-values="message"
            v-slot="{ errors, isSubmitting }"
          >
            <ul>
              <li>
                <v-field
                  name="name"
                  v-model="message.name"
                  :placeholder="t('page.contact.form.name.placeholder')"
                  :class="{ 'is-invalid': errors.name }"
                />
                <error-message name="name" as="div" class="has-error" />
              </li>
              <li>
                <v-field
                  name="email"
                  id="email"
                  v-model="message.email"
                  :placeholder="t('page.contact.form.email.placeholder')"
                  :class="{ 'is-invalid': errors.email }"
                />
                <error-message name="email" as="div" class="has-error" />
              </li>
              <li>
                <v-field
                  name="phone"
                  id="phone"
                  v-model="message.phone"
                  :placeholder="t('page.contact.form.phone.placeholder')"
                  :class="{ 'is-invalid': errors.phone }"
                />
                <error-message name="phone" as="div" class="has-error" />
              </li>
              <li>
                <v-field
                  name="subject"
                  id="subject"
                  v-model="message.subject"
                  :placeholder="t('page.contact.form.subject.placeholder')"
                  :class="{ 'is-invalid': errors.subject }"
                />
                <error-message name="subject" as="div" class="has-error" />
              </li>
              <li>
                <v-field
                  as="textarea"
                  name="message"
                  id="message"
                  v-model="message.message"
                  :placeholder="t('page.contact.form.message.placeholder')"
                  :class="{ 'is-invalid': errors.message }"
                />
                <error-message name="message" as="div" class="has-error" />
              </li>
            </ul>
            <div class="page_captcha">
              <vue-recaptcha
                ref="googleRecaptcha"
                :language="locale"
                :sitekey="siteKey"
                :load-recaptcha-script="true"
                @render="handleCaptchaRender"
                @verify="handleCaptchaSuccess"
                @error="handleCaptchaError"
              ></vue-recaptcha>
            </div>
            <div class="page_button">
              <button
                type="submit"
                id="send_message"
                class="text_effect"
                href="#"
                :disabled="isSubmitting"
              >
                <span class="wrapper"
                  ><span class="before">{{ t("page.contact.form.send") }}</span
                  ><span class="after">{{
                    t("page.contact.form.send")
                  }}</span></span
                >
              </button>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page_contact {
  width: 100%;
  padding: 100px 0px;

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

  .form_wrapper {
    width: 100%;
    margin-bottom: 30px;

    form {
      &#contact-form {
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
            margin-bottom: 15px;

            @media (max-width: 768px) {
              width: 100%;
              padding-left: 0px;
            }

            input {
              width: 100%;
              height: 50px;
              padding: 5px 20px;
              background-color: transparent;
              font-family: var(--bff);
              color: var(--bc);
              border: 1px solid rgba(0, 0, 0, 0.1);
            }

            input,
            textarea {
              &::-webkit-outer-spin-button,
              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }

            input:focus,
            textarea:focus {
              outline: none;
            }

            &:last-child {
              width: 100%;
              margin-bottom: 9px;

              textarea {
                padding: 20px;
                height: 120px;
                width: 100%;
                background-color: transparent;
                resize: none;
                font-family: var(--bff);
                border: 1px solid rgba(0, 0, 0, 0.1);
              }
            }

            input,
            textarea {
              &.is-invalid {
                border-color: red;
                background-image: url("@/assets/icons/icon-error.svg");
                background-repeat: no-repeat;
                background-size: 24px 24px;
                background-position: right 8px center;

                @media (max-width: 50em) {
                  background-size: 16px 16px;
                  background-position: right 6px center;
                }
              }
            }

            .has-error {
              color: red;
              font-size: 12px;
              margin-top: 5px;
            }
          }
        }

        .page-captcha {
          width: 100%;
        }

        .page_button {
          display: inline-block;
          position: relative;
          overflow: hidden;
          margin-top: 15px;

          &:before {
            content: "";
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            background-color: #000;
            transform: translateY(100%);
            pointer-events: none;
            transition: all 0.3s ease;
          }

          &:hover:before {
            transform: translateY(0);
          }

          span {
            color: #fff;
            font-weight: 500;
            font-size: 13px;
            text-transform: uppercase;
          }

          button {
            display: block;
            padding: 15px 35px;
            background-color: #666;
          }
        }
      }
    }
  }
}
</style>

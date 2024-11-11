<script setup>
import { ref, reactive, computed } from "vue"
import { storeToRefs } from "pinia"
import { createToaster } from "@meforma/vue-toaster"
import { Form as VForm, Field as VField, ErrorMessage } from "vee-validate"
import { object, string } from "yup"
import { VueRecaptcha } from "vue-recaptcha"
import { useI18n } from "vue-i18n"
import { useMailStore, useAppStore } from "@/stores"

const { t, locale } = useI18n()

const mailStore = useMailStore()
const appStore = useAppStore()

const siteKey = computed(() => {
  return import.meta.env.VITE_RECAPTCHA_SITE_KEY_V2
})

const handleCaptchaVerify = response => {
  recapchaVerified.value = true
  message.response = response
}

const handleCaptchaExpired = () => {
  recapchaVerified.value = false
  toaster.error(t("page.contact.form.captcha.expired"))
}

const handleCaptchaRender = () => {
  recapchaVerified.value = false
  googleRecaptcha.value.reset()
}

const handleCaptchaError = error => {
  recapchaVerified.value = false
  toaster.error(error ?? "Captcha Error!")
}

const googleRecaptcha = ref()
const recapchaVerified = ref(false)

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
  if (!recapchaVerified.value) {
    toaster.error(t("page.contact.form.captcha.required"))
    return
  }

  appStore.togglePreloader()

  try {
    window.scrollTo({ top: 0, behavior: "smooth" })
    await mailStore.send(message)
    appStore.togglePreloader()
    if (!response.value.error) {
      toaster.success(response.value.message)
      resetForm()
      resetFormValues()
    }
  } catch (error) {
    appStore.togglePreloader()
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
      <div class="page-captcha">
        <vue-recaptcha
          ref="googleRecaptcha"
          :language="locale"
          :sitekey="siteKey"
          :load-recaptcha-script="true"
          @render="handleCaptchaRender"
          @verify="handleCaptchaVerify"
          @error="handleCaptchaError"
          @expired="handleCaptchaExpired"
        ></vue-recaptcha>
      </div>
      <div class="page-button">
        <button
          type="submit"
          id="send_message"
          class="text-effect"
          href="#"
          :disabled="isSubmitting"
        >
          <span class="wrapper"
            ><span class="before">{{ t("page.contact.form.send") }}</span
            ><span class="after">{{ t("page.contact.form.send") }}</span></span
          >
        </button>
      </div>
    </v-form>
  </div>
</template>

<style lang="scss" scoped>
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
        margin: 15px 0;
      }
    }
  }
}
</style>

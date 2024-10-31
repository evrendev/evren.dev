import { createI18n } from "vue-i18n"
import numberFormats from "./rules/numbers.js"
import datetimeFormats from "./rules/datetimes.js"
import en from "./locales/en.json"
import de from "./locales/de.json"

const locale =
  localStorage.getItem("lang") ||
  navigator.language.slice(0, 2) ||
  import.meta.env.VITE_DEFAULT_LOCALE

export default createI18n({
  locale,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { en, de },
  runtimeOnly: false,
  numberFormats,
  datetimeFormats,
})

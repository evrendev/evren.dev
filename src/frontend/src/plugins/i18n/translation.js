import { i18n } from "../"
import { nextTick } from "vue"

const Trans = {
  get defaultLocale() {
    return (
      localStorage.getItem("lang") ||
      navigator.language.slice(0, 2) ||
      import.meta.env.VITE_DEFAULT_LOCALE ||
      "en"
    )
  },

  get supportedLocales() {
    const locales = import.meta.env.VITE_SUPPORTED_LOCALES
    return locales ? locales.split(",") : ["de", "en"]
  },

  get currentLocale() {
    return i18n.global.locale.value
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale
  },

  async switchLanguage(newLocale) {
    await Trans.loadLocaleMessages(newLocale)
    Trans.currentLocale = newLocale
    document.querySelector("html").setAttribute("lang", newLocale)
    document.querySelector("meta").setAttribute("lang", newLocale)
    document
      .querySelector("meta[http-equiv='content-language']")
      .setAttribute("content", newLocale)

    localStorage.setItem("lang", newLocale)
  },

  async loadLocaleMessages(locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(
        /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
      )
      i18n.global.setLocaleMessage(locale, messages.default)
    }

    return nextTick()
  },

  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale)
  },

  getUserLocale() {
    const locale =
      window.navigator.language ||
      window.navigator.userLanguage ||
      Trans.defaultLocale

    return {
      locale: locale,
      localeNoRegion: locale.split("-")[0],
    }
  },

  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("lang")

    if (Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale
    } else {
      return null
    }
  },

  guessDefaultLocale() {
    const userPersistedLocale = Trans.getPersistedLocale()
    if (userPersistedLocale) {
      return userPersistedLocale
    }

    const userPreferredLocale = Trans.getUserLocale()

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion
    }

    return Trans.defaultLocale
  },

  async routeMiddleware(to, _from, next) {
    const paramLocale = to.params.locale

    if (!Trans.isLocaleSupported(paramLocale)) {
      return next(Trans.guessDefaultLocale())
    }

    await Trans.switchLanguage(paramLocale)

    return next()
  },

  i18nRoute(to) {
    return `/${Trans.currentLocale}/${to}`
  },
}

export default Trans

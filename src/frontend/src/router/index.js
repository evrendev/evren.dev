import { createRouter, createWebHistory } from "vue-router"
import { i18n } from "@/plugins"
import Tr from "@/plugins/i18n/translation"

const DEFAULT_TITLE = "Evren.Dev"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: "",
      redirect: `/${Tr.defaultLocale}`,
    },
    {
      path: "/:locale?",
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: "",
          name: "home",
          alias: ["home", "start-seite"],
          component: () =>
            import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
          meta: {
            title: "page.home.meta.title",
            description: "page.home.meta.description",
            keywords: "page.home.meta.keywords",
            image: "page.home.meta.image",
            enterActiveClass: "animate__animated animate__fadeInLeftBig",
            enterLeaveClass: "animate__animated animate__fadeOutRightBig",
          },
        },
        {
          path: "about",
          name: "about",
          alias: ["uber-mich"],
          component: () =>
            import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
          meta: {
            title: "page.about.title",
            enterActiveClass: "animate__animated animate__fadeInLeftBig",
            enterLeaveClass: "animate__animated animate__fadeOutRightBig",
          },
        },
        {
          path: "contact",
          name: "contact",
          alias: ["kontakt"],
          component: () =>
            import(/* webpackChunkName: "contact" */ "@/views/ContactView.vue"),
          meta: {
            title: "page.contact.title",
            enterActiveClass: "animate__animated animate__fadeInLeftBig",
            enterLeaveClass: "animate__animated animate__fadeOutRightBig",
          },
        },
        {
          path: "works",
          name: "works",
          alias: ["arbeiten"],
          component: () =>
            import(/* webpackChunkName: "works" */ "@/views/WorksView.vue"),
          meta: {
            title: "page.projects.title",
            enterActiveClass: "animate__animated animate__fadeInLeftBig",
            enterLeaveClass: "animate__animated animate__fadeOutRightBig",
          },
        },
      ],
    },
    {
      // This catch-all route will match any URL that wasn't matched by the previous routes
      path: "/:pathMatch(.*)",
      redirect: "/",
    },
  ],
  scrollBehavior() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  },
})

router.beforeEach(async to => {
  console.log("to", to)
  // const newLocale = !Tr.supportedLocales.includes(to.params.locale)
  //   ? Tr.defaultLocale
  //   : to.params.locale
  // const allLanguages = document.querySelectorAll("#locale-navigation > li");
  // allLanguages.forEach((el) => (el.style.display = null));
  // const currentLanguage = document.querySelector(`[data-code='${newLocale}']`);
  // currentLanguage.style.display = "none";
})

router.afterEach(to => {
  // const appStore = useAppStore();
  // appStore.closeAllMenu();

  const title = i18n.global.t(to.meta.title)
  const description = i18n.global.t(to.meta.description)
  const keywords = i18n.global.t(to.meta.keywords)

  // Page Title
  document.title = `${title} | ${DEFAULT_TITLE}`

  // Canonical Url
  const url = `${import.meta.env.VITE_SITE_URL}${to.fullPath}`
  const canonicalUrlTag = document.querySelector("link[rel='canonical']")
  canonicalUrlTag.setAttribute("href", url)
  const ogUrlTag = document.querySelector("meta[property='og:url']")
  ogUrlTag.setAttribute("content", url)

  // Twiiter Meta Tags
  const metaTitleTag = document.querySelector("meta[name='title']")
  metaTitleTag.setAttribute("content", title)
  const twitterTitleTag = document.querySelector("meta[name='twitter:title']")
  twitterTitleTag.setAttribute("content", title)
  const ogTitleTag = document.querySelector("meta[property='og:title']")
  ogTitleTag.setAttribute("content", title)

  const metaDescriptionTag = document.querySelector("meta[name='description']")
  metaDescriptionTag.setAttribute("content", description)
  const twitterDescriptionTag = document.querySelector(
    "meta[name='twitter:description']",
  )
  twitterDescriptionTag.setAttribute("content", description)
  const ogDescriptionTag = document.querySelector(
    "meta[property='og:description']",
  )
  ogDescriptionTag.setAttribute("content", description)

  const metaKeywordsTag = document.querySelector("meta[name='keywords']")
  metaKeywordsTag.setAttribute("content", keywords)
})

export default router

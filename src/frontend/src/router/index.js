import { createRouter, createWebHistory } from "vue-router"
import { i18n } from "@/plugins"
import Tr from "@/plugins/i18n/translation"
import HomeView from "@/views/home/HomeView.vue"

const DEFAULT_TITLE = "evren.dev"

const router = createRouter({
  history: createWebHistory("/"), // Explicit base URL
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
          component: HomeView,
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
          path: "about-me",
          name: "about",
          alias: ["uber-mich"],
          component: () =>
            import(
              /* webpackChunkName: "about" */ "@/views/about/AboutView.vue"
            ),
          meta: {
            title: "page.about.title",
            description: "page.about.meta.description",
            keywords: "page.about.meta.keywords",
            image: "page.about.meta.image",
            enterActiveClass: "animate__animated animate__fadeInLeftBig",
            enterLeaveClass: "animate__animated animate__fadeOutRightBig",
          },
        },
        {
          path: "works",
          name: "works",
          alias: ["projekte"],
          component: () =>
            import(
              /* webpackChunkName: "works" */ "@/views/works/WorksView.vue"
            ),
          meta: {
            title: "page.works.title",
            description: "page.works.meta.description",
            keywords: "page.works.meta.keywords",
            image: "page.works.meta.image",
            enterActiveClass: "animate__animated animate__fadeInLeftBig",
            enterLeaveClass: "animate__animated animate__fadeOutRightBig",
          },
        },
        {
          path: "contact",
          name: "contact",
          alias: ["kontakt"],
          component: () =>
            import(
              /* webpackChunkName: "contact" */ "@/views/contact/ContactView.vue"
            ),
          meta: {
            title: "page.contact.title",
            description: "page.contact.meta.description",
            keywords: "page.contact.meta.keywords",
            image: "page.contact.meta.image",
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

router.afterEach(to => {
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

  // Twitter Meta Tags
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

// Debug ve Error Handling
router.beforeEach((to, from, next) => {
  console.log("🧭 Navigating to:", to.path)
  console.log("🌐 Locale:", to.params.locale)
  next()
})

router.onError((error) => {
  console.error("❌ Router Error:", error)
})

export default router

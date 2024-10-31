import "@/assets/css/main.scss"

import { createApp } from "vue"
import { pinia, i18n } from "./plugins"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)
app.config.globalProperties.applicationName = "Evren.Dev"
app.use(router).use(pinia).use(i18n).mount("#app")

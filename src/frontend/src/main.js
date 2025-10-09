import "animate.css"
import "@/assets/css/main.scss"

import { createApp } from "vue"
import { pinia, i18n } from "./plugins"

import App from "./App.vue"
import router from "./router"

console.log("🚀 App starting...")
console.log("📍 Base URL:", import.meta.env.BASE_URL)
console.log("🌍 Mode:", import.meta.env.MODE)
console.log("🔗 Router ready:", router)

const app = createApp(App)
app.config.globalProperties.applicationName = "Evren.Dev"
app.use(router).use(pinia).use(i18n).mount("#app")

console.log("✅ App mounted successfully!")

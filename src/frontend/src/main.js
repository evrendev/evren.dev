import { createApp } from 'vue'
import { pinia  } from "./plugins";

import App from './App.vue'
import router from './router'

const app = createApp(App);
app.config.globalProperties.applicationName = "Onar.im";
app.use(router).use(pinia).mount("#app");

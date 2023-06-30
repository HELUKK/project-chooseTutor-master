import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import mock from "@/mock/index";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// import.meta.env.DEV && (await import('@/mock/index'))

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia).use(router).use(ElementPlus).mount("#app");

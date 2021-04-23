import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

createApp(App).use(PrimeVue, { ripple: true }).use(router).mount("#app");

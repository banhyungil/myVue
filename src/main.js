import { createApp } from "vue";
import App from "./cssVue/dragonLoading/DragonLoading.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

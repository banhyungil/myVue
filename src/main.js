import { createApp } from "vue";
import App from "./test/Login1.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

import { createApp } from "vue";
import "vant/lib/index.css";
import App from "./App.vue";

import "./assets/main.css";
const app = createApp(App);
app.mount("#app");
import { Locale } from "vant";
// 引入英文语言包
import enUS from "vant/es/locale/lang/en-US";
Locale.use("en-US", enUS);

import { createApp } from "vue";
import router from "./router";
import { store } from "./store";
import "vant/lib/index.css";
import App from "./App.vue";
import { ActionBar, ActionBarIcon, ActionBarButton } from "vant";
import "./assets/main.css";
const app = createApp(App);
app
  .use(ActionBar)
  .use(ActionBarIcon)
  .use(ActionBarButton)
  .use(store)
  .use(router)
  .mount("#app");
import { Locale } from "vant";
// 引入英文语言包
import enUS from "vant/es/locale/lang/en-US";
Locale.use("en-US", enUS);

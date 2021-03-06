import Vue from "vue";
import App from "./App.vue";
import Antd from "vue-antd-ui";
import router from "./router";
import store from "./store";
import "vue-antd-ui/dist/antd.css";

Vue.config.productionTip = false;
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

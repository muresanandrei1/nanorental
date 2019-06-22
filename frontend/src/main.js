import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMDCAdapter from "vue-mdc-adapter";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";

Vue.use(VueMDCAdapter);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

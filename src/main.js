import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
//Filter only 30 Chars for title
Vue.filter("title", (val) => {
  if (!val || typeof val != "string") return "";
  val = val.slice(0, 30);
  return val;
});
//Filter only 100 Chars for body
Vue.filter("body", (val) => {
  if (!val || typeof val != "string") return "";
  val = val.slice(0, 100);
  return val;
});
//Filter title to uppercase
Vue.filter("uppercase", (val) => {
  val = val.toUpperCase();
  return val;
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

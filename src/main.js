import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Users from "./pages/Users.vue";
import Home from "./pages/Home.vue";
import DoneTodos from "./pages/DoneTodos.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/users", component: Users },
  { path: "/", component: Home },
  { path: "/done", component: DoneTodos }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");

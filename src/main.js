import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Todo from "./pages/TodoPage.vue";
import DoneTodos from "./pages/DoneTodosPage.vue";
import About from "./pages/About.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    component: Todo
  },
  {
    path: "/done",
    component: DoneTodos
  },
  {
    path: "/about",
    component: About
  }
];

export const router = new VueRouter({
  routes: routes,
  mode: "history"
});

Vue.config.productionTip = false;

export const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");

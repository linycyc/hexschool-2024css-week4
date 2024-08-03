import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    component: () => import("./components/Layout.vue"),
    children: [
      {
        path: "",
        component: () => import("./components/Main.vue"),
      },
      {
        path: "product/optical",
        component: () => import("./components/OpticalGlassesStore.vue"),
      },
      {
        path: "product/sun",
        component: () => import("./components/SunGlassesStore.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Detail from "@/components/Detail.vue";
import Checkout from "@/components/Checkout.vue";
import Test from "@/components/Test.vue";

const router = createRouter({
  history: createWebHistory(), // history 模式
  routes: [
    {
      path: "/",
      redirect: "/home",
    },

    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: "home",
      },
    },

    {
      path: "/detail",
      name: "detail",
      component: Detail,
      meta: {
        title: "detail",
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
      meta: {
        title: "checkout",
      },
    },
    {
      path: "/test",
      name: "test",
      component: Test,
      meta: {
        title: "test",
      },
    },
  ],
});

export default router;

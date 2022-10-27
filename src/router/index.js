// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const router = createRouter({
  history: createWebHistory(), // history 模式
  routes: [
    {
      path: "/",
      name: "items",
      component: defineAsyncComponent(() => import(`/@/components/Items.vue`)),
      meta: {
        title: "items",
      },
    },
    {
      path: "/",
      name: "favourites",
      component: defineAsyncComponent(() =>
        import(`@/components/Favourites.vue`)
      ),
      meta: {
        title: "favourites",
      },
    },
    {
      path: "/",
      name: "cart",
      component: defineAsyncComponent(() => import(`@/components/Cart.vue`)),
      meta: {
        title: "cart",
      },
    },
    {
      path: "/",
      name: "personal",
      component: defineAsyncComponent(() =>
        import(`@/components/Personal.vue`)
      ),
      meta: {
        title: "personal",
      },
    },

    {
      path: "/*",
      redirect: "/items",
    },
  ],
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from) => {});

export default router;

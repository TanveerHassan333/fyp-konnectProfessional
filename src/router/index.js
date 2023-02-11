import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: 'Home',
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/register",
      name: 'Register',
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/sign-in",
      name: 'SignIn',
      component: () => import("../views/SignInView.vue"),
    },
    {
      path: "/article",
      name:'article',
      component: () => import("../views/ArticleView.vue"),
    },
    {
      path: "/feed",
      name:'feed',
      component: () => import("../views/FeedView.vue"),
    },
  ],
});

export default router;


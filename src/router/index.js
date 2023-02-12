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
        path: '/forgotPass',
        name: 'forgot-pass',
        component: () => import("../components/ForgotPass.vue") 
    },
    {
      path: "/article",
      name:'article',
      component: () => import("../views/ArticleView.vue"),
    },
    {
      path: "/articleShow",
      name:'articleShow',
      component: () => import("../views/ArticleShow.vue"),
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import ("../views/NotFound.vue") 
    },
  ],
});

export default router;


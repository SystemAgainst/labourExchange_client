import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import { useAuthStore } from '@/store/modules/auth.module.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'main',
        auth: true,
      }
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../views/User/AnalyticsViewUser.vue'),
      meta: {
        layout: 'main',
        auth: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: 'main',
        auth: true,
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../layouts/AuthLayout.vue'),
      meta: {
        layout: 'auth',
        auth: true,
      }
    },
    {
      path: '/more-info/:id',
      name: 'moreInfo',
      component: () => import('../views/User/VacancyDetailUser.vue'),
      meta: {
        layout: 'main',
        auth: true,
      }
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: () => import('../views/User/FavouritesUserView.vue'),
      meta: {
        layout: 'main',
        auth: true,
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  const requireAuth = to.meta.auth;
  const isAuthenticated = store.isAuthenticated;

  if (requireAuth && isAuthenticated) {
    next()
  } else if (!requireAuth && !isAuthenticated) {
    next(`/auth`);
  }
});

export default router;

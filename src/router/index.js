import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/odalarimiz',
      name: 'rooms',
      component: () => import('@/views/RoomsView.vue'),
    },
    {
      path: '/galeri',
      name: 'gallery',
      component: () => import('@/views/GalleryView.vue'),
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/NotFoundErrorView.vue'),
    },
  ],
});

export default router;

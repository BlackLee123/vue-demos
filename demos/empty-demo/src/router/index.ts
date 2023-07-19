import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home_index',
          component: () => import('@/views/HomeView.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: Layout,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      children: [
        {
          path: '',
          name: 'about_index',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    }
  ]
})

export default router

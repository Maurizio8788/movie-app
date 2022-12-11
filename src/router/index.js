import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/:media/:id',
      name: 'mediaDetail',
      component:() => import('@/views/MediaDetailView.vue')
    }
  ]
})

export default router

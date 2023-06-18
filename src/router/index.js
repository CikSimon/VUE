import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/deleted',
      name: 'deleted',
      component: () => import("../components/Deleted.vue")
      
    },
    {
      path: '/',
      name: 'main',
      component: () => import("../components/Main.vue")
      
    },

    
  ]
})

export default router

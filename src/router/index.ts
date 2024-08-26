import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BgLayouts from '@/layouts/BgLayouts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BgLayouts',
      component: BgLayouts,
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/Proyecto1',
          name: 'Proyecto1',
          component: () => import('../Proyects/InteresCalculator/InteresCalculator.vue')
        },
        // {
        //   path: '/Proyecto2',
        //   name: 'Proyecto2',
        //   component: () => import('../Proyects/Proyecto2/Proyecto2.vue')
        // },
      ]
    }
  ]
})

export default router

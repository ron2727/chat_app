import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth-layout',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../views/guess/LoginView.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/guess/RegisterView.vue')
        }
      ]
    }, 
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router' 
import GuessLayout from '@/layouts/GuessLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guess-layout',
      component: GuessLayout,
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
    {
      path: '/chat',
      name: 'auth-layout',
      component: AuthLayout,  
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/auth/HomeView.vue')
        },
        {
          path: 'room/:id',
          name: 'room',
          component: () => import('../views/auth/RoomView.vue')
        }
      ]
    }
  ],
})
 
export default router


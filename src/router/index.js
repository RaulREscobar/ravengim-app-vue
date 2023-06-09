// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import UsersView from '@/views/UsersView.vue'
import UserView from '@/views/UserView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ProfileView from '@/views/ProfileView.vue'
import AboutUsView from '@/views/AboutUsView.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path:'/profile',
        name:'profile',
        component: ProfileView,
      },
      {
        path: '/login',
        name: 'login',
        component: LoginView
      },
      {
        path: "/register",
        name: 'register',
        component: RegisterView
      },
      {
        path:'/contact',
        name:'contact',
        component: ContactView
      },
      {
        path:'/AboutUs',
        name:'aboutUs',
        component: AboutUsView
      },
      {
        path: '/users',
        name: 'users',
        component: UsersView
      },
      {
        path:'/users/:id',
        name: 'user',
        component: UserView
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

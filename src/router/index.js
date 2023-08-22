// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import UsersView from '@/views/UsersView.vue'
import UserView from '@/views/UserView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ProfileView from '@/views/ProfileView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import { auth } from '../firebase.js'
import { useAuthStore } from '@/store/authStore'


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
        meta: {
          requiereAuth: false,
          rol: null,
        }
      },
      {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        beforeEnter: (to, from, next) => {
          if (auth.currentUser === null) {
            next('login');
          } else {
            next();
          }
        },
        meta: {
          requiereAuth: true,
          rol: "user",
        }
      },
      {
        path: '/login',
        name: 'login',
        component: LoginView,
        beforeEnter: (to, from, next) => {
          if (auth.currentUser !== null) {
            next('profile');
          } else {
            next();
          }
        },
        meta: {
          requiereAuth: false,
          rol: null,
        }
      },
      {
        path: "/register",
        name: 'register',
        component: RegisterView,
        meta: {
          requiereAuth: true,
          rol: "admin",
        },
        beforeEnter: (to, from, next) => {
          const authStore = useAuthStore();
          if (to.meta.rol !== authStore.user.rol) {
            next('/')
          } else {
            next()
          }
        }
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        meta: {
          requiereAuth: false,
          rol: null,
        }
      },
      {
        path: '/AboutUs',
        name: 'aboutUs',
        component: AboutUsView,
        meta: {
          requiereAuth: false,
          rol: null,
        }
      },
      {
        path: '/users',
        name: 'users',
        component: UsersView,
        meta: {
          requiereAuth: true,
          rol: "user",
        }
      },
      {
        path: '/users/:id',
        name: 'user',
        component: UserView,
        meta: {
          requiereAuth: true,
          rol: "user",
        }
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (auth.currentUser == null && to.name == "register") {
    next('login')
  } else {
    next()
  }
})

export default router

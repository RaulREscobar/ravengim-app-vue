// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import UsersView from '@/views/UsersView.vue'
import UserView from '@/views/UserView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ProfileView from '@/views/ProfileView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import { auth } from '@/firebase.js'
import { useAuthStore } from '@/store/authStore'
import UserStatus from '@/views/UserStatus.vue'
import NewPay from '@/views/NewPay.vue'
import ChangePassView from '@/views/ChangePassView.vue'
import { getAuth } from 'firebase/auth'
import { ref } from 'vue'


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
        path: '/users/:id',
        name: 'user',
        component: UserView,
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
        },
      },
      {
        path: '/users/change-pass/:id',
        name: 'change-pass',
        component: ChangePassView,
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
        },
      },
      {
        path: '/newPay/:id',
        name: 'newPay',
        component: NewPay,
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
        },
      },

    ],
  },
  {
    path: '/status/:id',
    component: UserStatus,
    meta: {
      requiereAuth: true,
      rol: "admin",
    },
    beforeEnter: async (to, from) => {
      const authStore = useAuthStore();
      console.log(authStore.user.rol)
      if (to.meta.rol !== authStore.user.rol) {
        return { name: 'home' }
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
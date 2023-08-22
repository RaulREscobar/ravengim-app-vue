<template>
  <v-app-bar id="bar-nro2" density="compact">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title>Hola</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-account-circle">
    </v-btn>

    <v-btn @click="logout" icon="mdi-exit-to-app">
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item v-for="link in views" :key="link.title" :to="{ name: link.value }">
        {{ link.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'vue-router';


const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  signOut(auth).then(() => {
    authStore.logout()
    router.push({ name: 'home' })
  })
    .catch((error) => {
      console.log({
        msj: "Hubo un error al cerrar sessión",
        error: error,
      })
    })
}

const drawer = ref(false);
const views = [
  {
    title: "Inicio",
    value: "home",
    adminNeed: false,
  },
  {
    title: "Iniciar sesión",
    value: "login",
    adminNeed: false,
  },
  {
    title: "Contactanos",
    value: "contact",
    adminNeed: false,
  },
  {
    title: "Quienes somos",
    value: "aboutUs",
    adminNeed: false,
  },
  {
    title: "Registrar Ususario",
    value: "register",
    adminNeed: true,
  },
  //Agregar mas rutas AQUI
]
//
</script>

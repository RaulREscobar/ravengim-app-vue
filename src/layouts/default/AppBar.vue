<template>
  <BannerLogo />
  <v-app-bar density="compact">  
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item v-for="link in views" :key="link.title" :to="{ name: link.value }">
        {{ link.title }}
      </v-list-item>
      <v-list-item @click="logout">
        Salir
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import BannerLogo from '@/components/BannerLogo.vue';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';

const logout = () => {
  signOut(auth).then(() => {
    console.log(auth.currentUser)
  }).catch((error) => {
    console.log({
      msj: "Hubo un error al cerrar sessión",
      error: error,
    })
  })
 console.log(auth.currentUser)
}

const drawer = ref(false);
const views = [
  {
    title: "Inicio",
    value: "home",
  },
  {
    title: "Iniciar sesión",
    value: "login"
  },
  {
    title: "Contactanos",
    value: "contact"
  },
  {
    title: "Quienes somos",
    value: "aboutUs"
  },
  {
    title: "Registrar Ususario",
    value: "register"
  },
  //Agregar mas rutas AQUI
]
//
</script>

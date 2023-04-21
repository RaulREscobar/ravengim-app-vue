<template>
  <BannerLogo />
  <v-app-bar density="compact">  
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="center">
    <v-list>
      <v-list-item v-for="link in views" :key="link.title" :to="{ name: link.value }">
        {{ link.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import BannerLogo from '@/components/BannerLogo.vue';

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

<template>
  <BannerLogo />
  <v-app-bar>
    <v-app-bar-title>
      <v-icon icon="mdi-account-circle" />
      Hola!! Andres
    </v-app-bar-title>
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
    title: "Mis pagos",
    value: "home" //Modificar Ruta, ruta por defecto
  },
  {
    title: "Contactanos",
    value: "home"//Modificar Ruta, ruta por defecto
  },
  {
    title: "Quienes somos",
    value: "home"
  },
  {
    title: "Registrar Ususario",
    value: "register"
  },

  //Agregar mas rutas AQUI

  {
    title: "Salir",
    value: "home" // Crear ruta
  }
]
//
</script>

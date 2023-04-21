<template>
  <v-footer class="bg-grey-lighten-1 mt-10">
    <v-row justify="center" no-gutters>
      <router-link 
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
        :to="{name:link.routeName}"
      >
        {{ link.name }}
      </router-link >

      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>❤️Nets</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
const links = [
    {
      name: "Iniciar Sesión",
      routeName: "login"
    },
    {
      name: "Contactanos",
      routeName: "contact"
    },
    {
      name: "Quienes somos",
      routeName: "aboutUs"
    },
]
</script>
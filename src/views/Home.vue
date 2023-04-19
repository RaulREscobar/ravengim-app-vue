<template>
  <CarruselHome />
  <TitleSection title="¿YA ESTAS ENTRENANDO CON NOSOTROS?" />
  <div class="text-center">
    <v-btn width="300px" color="green" :to="{ name: 'login' }" class="ma-2"> SI, QUIERO LOGUEARME </v-btn>
    <v-btn width="300px" color="blue" :to="{ name: 'register' }" class="ma-2"> NO, QUIERO ARRANCAR A ENTRENAR</v-btn>
  </div>
  <v-parallax class="mt-5" height="250" src="https://i.blogs.es/64a82e/2560_3000/1366_2000.jpeg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <TitleSection title="ENTRENAMIENTO 100% PERSONALIZADO" />
      <p class="text-subtitle-1">
        ¡¡¡ Todos los días a tu lado !!!
      </p>
    </div>
  </v-parallax>
  <Ubication />
</template>

<script setup>
import CarruselHome from '@/components/CarruselHome.vue';
import TitleSection from '@/components/TitleSection.vue';
import Ubication from '@/components/Ubication.vue';


</script>

<template>
    <TitleSection title="¿YA ESTAS ENTRENANDO CON NOSOTROS?" />
    <div class="text-center">
        <v-btn width="300px" color="green" :to="{ name: 'login' }" class="ma-2"> SI, QUIERO LOGUEARME </v-btn>
        <v-btn width="300px" color="blue" :to="{ name: 'register' }" class="ma-2"> NO, QUIERO ARRANCAR A ENTRENAR</v-btn>
    </div>
</template>

<script setup>
import TitleSection from './TitleSection.vue';

</script>

<template>
    <v-container>
        <TitleSection title="¿YA ESTAS ENTRENANDO CON NOSOTROS?" />
        <div class="d-flex flex-column align-center">
            <v-btn width="300px" color="green" :to="{ name: 'login' }" class="ma-2"> SI, QUIERO LOGUEARME </v-btn>
            <v-btn width="300px" color="blue" :to="{ name: 'register' }" class="ma-2"> NO, QUIERO ARRANCAR A ENTRENAR</v-btn>
        </div>
    </v-container>
</template>

<script setup>
import TitleSection from './TitleSection.vue';

</script>

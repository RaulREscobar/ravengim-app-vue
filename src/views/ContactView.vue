<template>
    <v-container class="w-xl-75">
        <TitleView title="CONTACTANOS" class="d-flex flex-column align-center" />   
        <p class="mb-4 text-center ">
            Puedes Contactarnos por Whatsaap (
                <v-btn color="green" variant="text" icon="mdi-whatsapp" ></v-btn>
                ), nuestaras redes (
                <v-btn color="blue" variant="text" icon="mdi-facebook" ></v-btn>,
                <v-btn color="red" variant="text" icon="mdi-instagram" ></v-btn>
                ) o dejarnos un mensaje.
            <br />
            Algunos de nuestro equipo te contestara pronto.
        </p>
        <h4 class="text-h6 text-center mb-xs-2 mb-5">Dejanos tu mensaje</h4> 
        <FormContact />
        <SocialMedia />    
    </v-container>
</template>
<script setup>
import TitleView from '@/components/TitleView.vue';
import SocialMedia from '@/components/SocialMedia.vue'
import FormContact from '@/components/FormContact.vue'
</script>
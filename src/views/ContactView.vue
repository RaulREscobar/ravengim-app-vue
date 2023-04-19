<template>
    <v-container>
        <TitleView title="CONTACTANOS" />   
        <p class="mb-4">
            Puedes Contactarnos por Whatsaap (
                <v-btn color="green" variant="text" icon="mdi-whatsapp" size=""></v-btn>
                ), nuestaras redes (
                <v-btn color="blue" variant="text" icon="mdi-facebook" size=""></v-btn>,
                <v-btn color="red" variant="text" icon="mdi-instagram" size=""></v-btn>
                ) o dejarnos un mensaje.
            <br />
            Algunos de nuestro equipo te contestara pronto.
        </p>
        <h4 class="text-h6 mb-2">Dejanos tu mensaje</h4> 
        <FormContact />
        <br />
        <br />
        <br />
        <SocialMedia />    
    </v-container>
</template>
<script setup>
import TitleView from '@/components/TitleView.vue';
import SocialMedia from '@/components/SocialMedia.vue'
import FormContact from '@/components/FormContact.vue'
</script>
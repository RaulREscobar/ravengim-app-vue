
<template>
    <v-carousel show-arrows="hover" height="400px">
        <v-carousel-item 
        v-for="(img, i) in imgCarruselHome" 
        :key="i" 
        :src="img.src"
        cover
        >
        </v-carousel-item>

    </v-carousel>
</template>

<style scoped>
</style>

<script setup>

const imgCarruselHome = [
    {
        src: './src/assets/fotoGim1.png',
    },
    {
        src: './src/assets/fotoGim2.png',
    },
    {
        src: './src/assets/fotoGim3.png',
    },
    {
        src: './src/assets/fotoGim4.png',
    },
]
</script>
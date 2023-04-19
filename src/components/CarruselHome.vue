
<template>
    <v-carousel :show-arrows="false" height="300px">
        <v-carousel-item v-for="(item, i) in imgCarruselHome" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>
</template>

<script setup>

const imgCarruselHome = [
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
]
</script>
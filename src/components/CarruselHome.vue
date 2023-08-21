
<template>
    <v-carousel show-arrows="hover" height="400px">
        <v-carousel-item 
        v-for="(img, i) in imgCarruselHome" 
        :key="i" 
        :src=getImageUrl(img.name)
        cover
        >
        </v-carousel-item>

    </v-carousel>
</template>

<style scoped>
</style>

<script setup>

const getImageUrl = (name) => {
    return new URL(`../assets/${name}.png`, import.meta.url).href
}

const imgCarruselHome = [
    { name: "fotoGim1" },
    { name: "fotoGim2" }, 
    { name: "fotoGim3" }, 
    { name: "fotoGim4" }, 
]
</script>
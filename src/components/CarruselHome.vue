
<template>
    <v-carousel :show-arrows="false" height="300px">
        <v-carousel-item v-for="(item, i) in imgCarruselHome" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>
</template>

<script setup>

const imgCarruselHome = [
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Gym_Free-weights_Area.jpg/800px-Gym_Free-weights_Area.jpg',
    },
    {
        src: 'https://pr0.nicelocal.com.mx/a26amgsyBl1gkP968iCcRQ/587x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2edm-dQ4ssPaXAj9Du0eSpXjzoCvKPFaHx-mf_GipPoWzsrl4fn_StGCrvhGdkvnXA',
    },
    {
        src: 'https://cdns3.fitfit.fitness/es/media/items/540x280/5835-MAS-FITNESS-SPORT-fJ7IO.jpg',
    },
]
</script>
<template>
    <TitleSection title="COMO EMPEZAMOS"  class="pb-0"/>
    <v-container >
        <v-timeline side="end" align="start">
            <v-timeline-item v-for="item in items" :icon="item.icon" :key="item.id" :dot-color="item.color" size="small" density="compact">
                <v-alert :value="true" :color="item.color" >
                    {{ item.text }}
                </v-alert>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script setup>
import TitleSection from './TitleSection.vue';

const items = [
    {
        id: 1,
        color: 'info',
        icon: 'mdi-numeric-1',
        text: 'Encontramos tus objetivos',
    },
    {
        id: 2,
        color: 'error',
        icon: 'mdi-numeric-2',
        text: 'Charla con los couch',
    },
    {
        id: 3,
        color: 'info',
        icon: 'mdi-numeric-3',
        text: 'Arreglamos los dias y horarios',
    },
    {
        id: 4,
        color: 'error',
        icon: 'mdi-numeric-4',
        text: 'Empezamos a cumplirlos',
    },
];

</script>
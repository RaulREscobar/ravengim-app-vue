<template>
    <v-container>
        <h1 class="text-h5">Actualizar datos del socio {{ nroSocio }}/0</h1>
        <Suspense>
            <UserEdit :nroSocio="nroSocio"/>
        </Suspense>

    </v-container>
</template>

<script setup>

import UserEdit from '@/components/UserEdit.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const nroSocio = ref(route.params.id)


</script>
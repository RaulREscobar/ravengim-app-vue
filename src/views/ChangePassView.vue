<template>
    <v-container>
        <h1 class="text-h5">Cambiar contraseña</h1>
        <Suspense>
            <FormChangePass #default :nroSocio="nroSocio" />
            <template #fallback>
                <v-container>
                    <v-skeleton-loader type="heading@2, actions"></v-skeleton-loader>
                </v-container>
            </template>
        </Suspense>
    </v-container>
</template>

<script setup>
import FormChangePass from '@/components/FormChangePass.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const nroSocio = ref(route.params.id)

</script>
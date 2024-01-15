<template>
    <TitleView title="Registrar un nuevo pago de"  />
    <TitleView :title="route.params.id" />
    <Suspense>
        <FormNewPay  :nroSocio="route.params.id" #default/> 
        <template #fallback>
            <v-container>
                <v-skeleton-loader type="heading@2, actions"></v-skeleton-loader>
            </v-container>
        </template>       
    </Suspense>
</template>
<script setup>
import FormNewPay from '@/components/FormNewPay.vue';
import TitleView from '@/components/TitleView.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
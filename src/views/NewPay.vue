<template>
    <TitleView title="Registrar un nuevo pago de"  />
    <TitleView :title="route.params.id" />
    <Suspense>
        <FormNewPay :nroSocio="route.params.id" />        
    </Suspense>
</template>
<script setup>
import FormNewPay from '@/components/FormNewPay.vue';
import TitleView from '@/components/TitleView.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
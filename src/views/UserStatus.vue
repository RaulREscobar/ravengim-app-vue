<template>
    <h2 class="text-center">Socio Nro {{ nroSocio }}/0</h2>
    <Suspense>
        <Status :nroSocio="nroSocio" />
    </Suspense>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Status from "@/components/Status.vue";
const route = useRoute();
const nroSocio = ref(route.params.id);

</script>
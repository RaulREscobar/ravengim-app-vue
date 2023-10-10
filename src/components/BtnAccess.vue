<template>
    <div>
        <v-btn @click="dialog = true" color="red" icon="mdi-qrcode" class="btn-access"></v-btn>
        <v-dialog v-model="dialog" width="auto">
            <v-card>
                <v-card-title class="text-center"> Acceso al Gimnasio</v-card-title>
                <Suspense>
                    <QrcodeVue :value="props.nroSocio.slice(0, -2)" :size=250 :margin=1 level="H" />
                </Suspense>
            </v-card>
        </v-dialog>
    </div>
</template>
<style>
.btn-access {
    position: fixed;
    z-index: 9999999;
    top: 10px;
    right: 10px;
}
</style>
<script setup>
import QrcodeVue from 'qrcode.vue';
import { ref } from 'vue';

const dialog = ref(false);
const props = defineProps({
    nroSocio: String
});



</script>

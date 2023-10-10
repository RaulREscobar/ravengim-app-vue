<template>
    <div>
        <v-btn @click="dialog = true" color="red" icon="mdi-qrcode" class="btn-access"></v-btn>
        <v-dialog v-model="dialog" width="auto">
            <v-card>
                <v-card-title class="text-center"> Acceso al Gimnasio</v-card-title>
                <QrcodeVue :value=nroSocio :size=250 :margin=1 level="H" />
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

const dialog = ref(false)
const nroSocio = ref('22226666')

</script>

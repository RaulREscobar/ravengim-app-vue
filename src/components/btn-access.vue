<template>
    <div>
        <v-btn @click="dialog = true" color="" icon="mdi-qrcode" class="btn-access"></v-btn>
        <v-dialog v-model="dialog" width="auto">
            <v-card>
                <QrcodeVue :value=url :size=250 level="H" foreground="blue"/>
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
const url = ref('https://raven-gim.web.app')

</script>

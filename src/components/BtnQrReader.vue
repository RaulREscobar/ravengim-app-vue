<template>
    <div>
        <v-btn @click="dialog = true" color="blue" icon="mdi-qrcode-scan" class="btn-scan"></v-btn>
        <v-dialog v-model="dialog" width="auto">
            <v-card>
                <QrStream @detect="onDetect">
                </QrStream>
            </v-card>
        </v-dialog>
    </div>
</template>
<style>
.btn-scan {
    position: fixed;
    z-index: 999999;
    top: 10px;
    left: 10px;
}
</style>
<script setup>
import { QrStream } from 'vue3-qr-reader'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const dialog = ref(false)

const onDetect = async (detectedCode) => {
    const result = await detectedCode
    dialog.value = false;
    router.push(`/status/${result.content}`)
}

</script>

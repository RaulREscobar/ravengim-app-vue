<template>
    <v-sheet width="300" class="mx-auto mt-3">
        <v-form fast-fail @submit.prevent="changePassword">
            <v-container class="">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="newPass" label="Nueva contraseña" type="text" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="confirmPass" label="Confirmar contraseña" type="text"
                            required></v-text-field>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn @click.prevent="goToBack" class="mx-2">Cancelar</v-btn>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn @click.prevent="changePassword(newPass)" :loading="loading" type="submit"
                            class="mx-2">Cambiar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const goToBack = () => router.go(-1);

const loading = ref(false);
const newPass = ref('');
const confirmPass = ref('');


const changePassword = (newPass) => {
    loading.value = true;

}
</script>
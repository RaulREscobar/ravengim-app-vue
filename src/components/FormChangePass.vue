<template>
    <v-sheet width="300" class="mx-auto mt-3">
        <v-form fast-fail @submit.prevent="changePassword" ref="formChangePass">
            <v-container class="">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="newPass" label="Nueva contraseña" :rules=rules type="text"
                            required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="confirmPass" label="Confirmar contraseña" :rules=rules type="text"
                            required></v-text-field>
                        <v-alert v-show="alertEqual" color="error" text="Las contraseñas no coinciden"></v-alert>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn @click.prevent="goToBack" class="mx-2">Cancelar</v-btn>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn @click.prevent="openDialog()" type="submit" class="mx-2">Cambiar</v-btn>
                    </v-col>
                </v-row>
                <v-dialog v-model="confirm" width="auto">
                    <v-card>
                        <v-card-text>
                            Estas por cambiar tu contraseña
                            ¿ESTAS SEGURO?
                        </v-card-text>
                        <v-card-actions>
                            <v-col cols="6">
                                <v-btn color="primary" block @click="confirm = false">cancelar</v-btn>
                            </v-col>
                            <v-col cols="6">
                                <v-btn color="primary" block @click="confirm = changePassword(newPass)">cambiar</v-btn>
                            </v-col>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="success" width="auto">
                    <v-card>
                        <v-icon icon="mdi-check-circle-outline" color="green" class="text-h1"></v-icon>
                    </v-card>
                </v-dialog>
            </v-container>
        </v-form>
    </v-sheet>
</template>
<script setup>
import { auth } from '@/firebase';
import { updatePassword } from 'firebase/auth';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const goToBack = () => router.go(-1);

const rules = [
    value => !!value || 'Campo requerido.',
    value => (value && value.length >= 6) || 'Min 6 aracteres',
]

const alertEqual = ref(false)
const formChangePass = ref(null)
const success = ref(false)
const confirm = ref(false);
const newPass = ref('');
const confirmPass = ref('');


const openDialog = async () => {
    alertEqual.value = false;

    const { valid } = await formChangePass.value.validate()

    if (newPass.value === confirmPass.value && valid) {
        confirm.value = true
    } else {
        valid ? alertEqual.value = true : ''
    }
}
const changePassword = (newPass) => {
    const user = auth.currentUser

    updatePassword(user, newPass).then((res) => {
        confirm.value = false;
        success.value = true;
        setTimeout(() => (
            success.value = false ,
            router.push({name:'profile'})
        ), 3000);
    }).catch((error) => {
        console.log(error)
    })
}
</script>
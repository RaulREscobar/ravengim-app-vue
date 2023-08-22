<template>
    <v-sheet width="300" class="mx-auto mt-3">
        <v-form fast-fail @submit.prevent>
            <v-container class="">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="email" label="E-mail" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="password" label="Contraseña" type="password" required></v-text-field>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn :to="{ name: 'home' }" class="mx-2">CANCELAR</v-btn>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn @click.prevent="authUser" type="submit" class="mx-2">INGRESAR</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthStore } from '@/store/authStore';
import { useRoute, useRouter } from 'vue-router';


let email = ref("");
let password = ref("")
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();


const authUser = () => {
    signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
        authStore.login(auth.currentUser.uid)
        router.push({ name: 'home' })
    })
        .catch((error) => {
            alert("Error: " + error.message)
        })
}

</script>
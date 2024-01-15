<template>
    <v-container>
        <v-card>
            <v-card-title>
                Mis datos
                <BtnEditData :url=url />
            </v-card-title>
            <v-row>
                <v-col cols="6">
                    <v-card-item title="Nombre" :subtitle=name></v-card-item>
                    <v-card-item title="Dirección" :subtitle=adress></v-card-item>
                    <v-card-item title="Telefono" :subtitle=phone></v-card-item>

                </v-col>
                <v-col cols="6">
                    <v-card-item title="Apellido" :subtitle=lastName></v-card-item>
                    <v-card-item title="E-mail" :subtitle=email></v-card-item>
                    <v-card-item title="Socio Nro" :subtitle=nroSocio></v-card-item>
                    <v-btn @click="goToUrl()" class="text-caption" density="compact" variant="plain">Cambiar
                        Contraseña</v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script setup>
import { getDoc, doc } from 'firebase/firestore';
import BtnEditData from './BtnEditData.vue';
import { useAuthStore } from '@/store/authStore';
import { db } from '@/firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

//Vue-Router
const router = useRouter();

//Stores
const authStore = useAuthStore();

const docRef = doc(db, `users/${authStore.user.uid}`);
const userRef = await getDoc(docRef)

//Variables
const name = ref(userRef.data().name);
const lastName = ref(userRef.data().lastName);
const phone = ref(userRef.data().phone);
const adress = ref(userRef.data().adress);
const email = ref(userRef.data().email);
const nroSocio = ref(userRef.data().nroSocio);

//url a ir para la edición
const url = `users/${nroSocio.value.slice(0, -2)}`
const goToUrl = () => router.push(`users/change-pass/${nroSocio.value.slice(0, -2)}`);
</script>
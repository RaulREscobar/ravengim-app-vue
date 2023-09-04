<template>
    <v-container>
        <v-card>
            <v-row>
                <v-card-title>Mis datos</v-card-title>
                <v-spacer></v-spacer>
                <BtnEditData />
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-card-item title="Nombre" :subtitle=name></v-card-item>
                    <v-card-item title="Apellido" :subtitle=lastName></v-card-item>
                    <v-card-item title="Telefono" :subtitle=phone></v-card-item>

                </v-col>
                <v-col cols="6">
                    <v-card-item title="Dirección" :subtitle=adress></v-card-item>
                    <v-card-item title="E-mail" :subtitle=email></v-card-item>
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


</script>
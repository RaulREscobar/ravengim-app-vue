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
                        <v-btn @click.prevent="goToBack" class="mx-2">CANCELAR</v-btn>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn @click.prevent="authUser" :loading="loading" type="submit" class="mx-2">INGRESAR</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
import { auth, db } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'vue-router';
import { collection, query, where, getDocs } from 'firebase/firestore';

//instanciamos el store y router
const authStore = useAuthStore();
const router = useRouter();

//seteamos las variables.
let email = ref("");
let password = ref("");
const loading = ref(false);

//boton de cancelar
const goToBack = () => router.go(-1)

//pone en sesión al usuario
const authUser = async () => {
    loading.value = true;
    const userUid = await signInWithEmailAndPassword(auth, email.value, password.value)
        .then(async (user) => {

            //buscamos la coleccion users
            const usersRef = collection(db, 'users');
            //el usuario que coincida con el mail registrado
            const userQuery = query(usersRef, where("email", "==", email.value));
            const userRef = await getDocs(userQuery);
            //buscamos el rol del usuario en la BD
            userRef.forEach((doc) => {
                authStore.login({
                    uid: user.user.uid,
                    rol: doc.data().rol,
                    name: doc.data().name
                })
            })
            loading.value = false;
            //volvemos al home
            router.push({ name: 'home' });
        })
        .catch((error) => {
            alert("Error: " + error.message)
        });

}

</script>
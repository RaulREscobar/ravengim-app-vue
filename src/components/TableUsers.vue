<template>
    <v-container>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details></v-text-field>
    </v-container>
    <v-data-table-virtual :headers="headers" :items="dataUsers" :search="search" items-per-page="10"
        :sort-by="[{ key: 'name', order: 'asc' }]">
        <template v-slot:item.alDia="{ item }">
            <v-icon icon="mdi-check-circle" color="success" v-if="verificacionDePago(item)"></v-icon>
            <v-icon icon="mdi-close-circle" color="red" v-else></v-icon>
        </template>
        <template v-slot:item.edit="{ item }">
            <v-icon class="me-2" @click="goToEdit(item.nroSocio)">
                mdi-account-edit-outline
            </v-icon>
        </template>
        <template v-slot:item.pay="{ item }">
            <v-icon class="me-2" @click="goToPayment(item.nroSocio)">
                mdi-cash-check
            </v-icon>
        </template>
    </v-data-table-virtual>
</template>
<script setup>
import { db } from '@/firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { headers } from './headers';

const router = useRouter();

const dataUsers = ref([]);
const search = ref("");


//Datos de fechas
const now = ref(new Date());
const month = ref(now.value.getMonth());
const year = ref(now.value.getFullYear());

const firstDay = ref(new Date(year.value, month.value, 1))
const thenthDay = ref(new Date(year.value, month.value, 10))
// fin datos de Fechas

// funcion de verificacion de fecha de pago
const verificacionDePago = (item) => {
    if (item.payments[0].date.toDate() == now.value || item.payments[0].date.toDate() >= firstDay.value) {
        return true
    } else if (now.value > thenthDay.value) {
        return false
    } else {
        true
    }
}

//fin de funcion


const usersRef = collection(db, 'users');
const userQuery = query(usersRef);
const userRef = await getDocs(userQuery);
userRef.forEach((doc) => {
    dataUsers.value.push(doc.data())
});

const goToEdit = (nroSocio) => {
    router.push(`/users/${nroSocio.slice(0, -2)}`)

};

const goToPayment = (nroSocio) => {
    router.push(`/newPay/${nroSocio.slice(0, -2)}`)
};
</script>
<template>
    <v-container>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-container>
    <v-data-table-virtual :headers="headers" :items="dataUsers" :search="search" items-per-page="10"
        :sort-by="[{ key: 'name', order: 'asc' }]">
        <template v-slot:item.alDia="{ item }">
            <v-icon icon="mdi-check-circle" color="success"
                v-if="item.value.payments[0].date.toDate() == now || item.value.payments[0].date.toDate() >= firstDay"></v-icon>
            <v-icon icon="mdi-close-circle" color="red" v-else-if="now > thenthDay"></v-icon>
            <v-icon icon="mdi-check-circle" color="yellow" v-else></v-icon>
        </template>
        <template v-slot:item.edit="{ item }">
            <v-icon class="me-2" @click="goToEdit(item.value.nroSocio)">
                mdi-account-edit-outline
            </v-icon>
        </template>
        <template v-slot:item.pay="{ item }">
            <v-icon class="me-2" @click="goToPayment(item.value.nroSocio)">
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
import { VDataTable, VDataTableVirtual } from 'vuetify/labs/VDataTable'
import { headers } from './headers';

const router = useRouter();

const dataUsers = ref([]);
const search = ref("");


//Datos de fechas
const now = ref(new Date());
const month = ref(now.value.getMonth() + 1);
const year = ref(now.value.getFullYear());

const firstDay = ref(new Date(`${year.value}-${month.value}-01T00:00:00`));
const thenthDay = ref(new Date(`${year.value}-${month.value}-10T23:59:59`))
// fin datos de Fechas


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
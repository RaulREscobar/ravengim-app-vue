<template>
    <v-container>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-container>
    <v-data-table-virtual :headers="headers" :items="dataUsers" :search="search" items-per-page="10"
        :sort-by="[{ key: 'name', order: 'asc' }]">
        <template v-slot:item.actions="{ item }">
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
const search = ref("")

const usersRef = collection(db, 'users');
const userQuery = query(usersRef);
const userRef = await getDocs(userQuery)
userRef.forEach((doc) => {
    dataUsers.value.push(doc.data())
})

const goToEdit = (nroSocio) => {
    router.push(`/users/${nroSocio.slice(0, -2)}`)
}

const goToPayment = (nroSocio) => {
    router.push(`/newPay/${nroSocio.slice(0, -2)}`)
}
</script>
<template>
    <v-table fixed-header height="300px">
        <thead>
            <tr>
                <th class="text-left">
                    Socio Nro
                </th>
                <th class="text-left">
                    Nombre
                </th>
                <th class="text-left">
                    Al Día?
                </th>
                <th class="text-left">
                    Tel.
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in dataUsers" :key="user.name">
                <td>{{ user.lastName }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone }}</td>
            </tr>
        </tbody>
    </v-table>
</template>
<script setup>
import { db } from '@/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ref } from 'vue';

const dataUsers = ref([])

const usersRef = collection(db, 'users');
const userQuery = query(usersRef);
const userRef = await getDocs(userQuery)
userRef.forEach((doc) => {
    dataUsers.value.push(doc.data())
})

console.log(dataUsers.value)
const users = [
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
    {
        lastName:"PEEPE",
        name: "RAUL",
        email: "RAULKLDAS",
        phone: 1125878,
    },
]


</script>
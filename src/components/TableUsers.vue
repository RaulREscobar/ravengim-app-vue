<template>
    <v-table fixed-header height="100vw">
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
                <th class="text-left">
                    Rol
                </th>
                <th class="text-left">
                    Editar
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in dataUsers" :key="user.name">
                <td>{{ user.nroSocio }}</td>
                <td>{{ user.name + " " + user.lastName }}</td>
                <td>{{ user.email }}</td><!-- Cambiar este campo por el valor de al día -->
                <td>{{ user.phone }}</td>
                <td>{{ user.rol }}</td>
                <td><v-btn @click="goToEdit(user.nroSocio)" variant="flat" icon="mdi-account-edit-outline"></v-btn></td>
            </tr>
        </tbody>
    </v-table>
</template>
<script setup>
import { db } from '@/firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const dataUsers = ref([]);
const router = useRouter();



const usersRef = collection(db, 'users');
const userQuery = query(usersRef);
const userRef = await getDocs(userQuery)
userRef.forEach((doc) => {
    dataUsers.value.push(doc.data())
})

const goToEdit = (nroSocio) => {

router.push(`/users/${nroSocio.slice(0,-2)}`)
}
</script>
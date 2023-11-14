<template>
    <v-container>
        <v-card title="Mis pagos">
            <v-table fixed-header height="300px">
                <thead>
                    <tr>
                        <th class="text-left">
                            Fecha
                        </th>
                        <th class="text-left">
                            Monto
                        </th>
                        <th class="text-left">
                            Estado
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pay in payments" :key="pay.id">
                        <td>{{ pay.date.toDate().toLocaleString('es-ES') }}</td>
                        <td>{{ pay.value }}</td>
                        <td>{{ pay.value > 0 ? "Pago" : "Impago" }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>
    </v-container>
</template>
<script setup>
import { getDoc, doc } from 'firebase/firestore';
import { useAuthStore } from '@/store/authStore';
import { db } from '@/firebase';
import { ref } from 'vue';

//Stores
const authStore = useAuthStore();

const docRef = doc(db, `users/${authStore.user.uid}`);
const userRef = await getDoc(docRef);
const payments = ref(userRef.data().payments)

</script>
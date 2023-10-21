<template>
    <v-sheet width="300" class="mx-auto mt-3">
        <v-form fast-fail @submit.prevent="registerPayment">
            <v-container class="">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="value" label="valor" type="number" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="date" label="Fecha" type="date" required></v-text-field>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn @click.prevent="goToBack" class="mx-2">Cancelar</v-btn>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn @click.prevent="registerPayment(value, date)" :loading="loading" type="submit"
                            class="mx-2">Registrar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
</template>
<script setup>
import { db } from '@/firebase';
import { collection, getDocs, query, doc, updateDoc, where } from "firebase/firestore";
import { ref } from "vue";
import { useRouter } from 'vue-router';

const props = defineProps({
    nroSocio: String
});


const router = useRouter();
const goToBack = () => router.go(-1);


const value = ref('');
const date = ref('');
const loading = ref(false);
const payments = ref([]);

const usersRef = collection(db, 'users');
const userQuery = query(usersRef, where("nroSocio", "==", props.nroSocio + '/0'));
const userRef = await getDocs(userQuery)

const registerPayment = async (value, date) => {
    loading.value = true;

    const now = new Date();
    const hours = now.getHours();
    const min = now.getMinutes();

    userRef.forEach(async user => {
        payments.value.push({ date: new Date(`${date}T${hours}:${min}`), value: Number(value) })
        payments.value.push(...user.data().payments)

        const docRef = doc(db, `users/${user.id}`);
        await updateDoc(docRef, {
            payments: payments.value,
        })
            .then(() => {
                loading.value = false;
                goToBack();
            })
            .catch((err) => console.log(err));
    })
}

</script>
<template>
    <v-container class="text-center">
        <v-icon icon="mdi-check-circle" color="success" size="200" v-if="!latePayment"></v-icon>
        <v-icon icon="mdi-close-circle" color="red" size="200" v-else></v-icon>
        <h3>{{ name }}</h3>
        <h3>{{ lastName }}</h3>
        <h3>{{ phone }}</h3>
        <h3>{{ !latePayment }}</h3>
        <v-btn @click="goToHome" :color="latePayment ? 'red' : 'success'">Volver</v-btn>
    </v-container>
</template>
<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from '@/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

const route = useRoute();
const router = useRouter();
const props = defineProps({
    nroSocio: String
});

const name = ref("");
const lastName = ref("");
const phone = ref("");
const latePayment = ref(false);

//Logica para saber si esta al dia con los pagos
const now = new Date;
const month = now.getMonth() + 1;
const year = now.getFullYear();

const firstDay = new Date(`${year}-${month}-01T00:00:00`)
const thenthDay = new Date(`${year}-${month}-10T23:59:59`)

const goToHome = () => { router.push({ name: 'home' }) }

const usersRef = collection(db, 'users');
const userQuery = query(usersRef, where("nroSocio", "==", props.nroSocio + '/0'));
const userRef = await getDocs(userQuery)
userRef.forEach(user => {
    //Creo una variable para guardar la fecha del ultimo pago.
    const datePay = user.data().payments[0].date.toDate()
    //Si la fecha de pago es de este mes seteamos latePayment en false
    if (datePay < firstDay && now < thenthDay) {
        latePayment.value = false
    } else if (datePay > firstDay && now > thenthDay) {
        latePayment.value = true
    } else if (datePay > firstDay && now < thenthDay) {
        latePayment.value = false;
    } else {
        latePayment.value = true;
    }

    name.value = user.data().name;
    lastName.value = user.data().lastName;
    phone.value = user.data().phone;
})
</script>
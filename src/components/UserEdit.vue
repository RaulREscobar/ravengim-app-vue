<template>
    <v-sheet width="300" class="mx-auto mt-3">
        <v-form fast-fail @submit.prevent="editUser">
            <v-container class="">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="name" label="Nombre" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="lastName" label="Apellido" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="phone" label="Telefono" type="number" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="adress" label="Dirección" required></v-text-field>
                    </v-col>
                    <v-col cols="6" md="4">
                        <v-checkbox v-model="rol" label="user" value="user" required></v-checkbox>
                    </v-col>
                    <v-col cols="6" md="4">
                        <v-checkbox v-model="rol" label="admin" value="admin" required></v-checkbox>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn @click.prevent="goToBack" class="mx-2">Volver</v-btn>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <v-btn @click.prevent="editUser(name, lastName, phone, adress, rol)" :loading="loading"
                            type="submit" class="mx-2">Guardar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
</template>
  
<script setup>
import { auth, db } from '@/firebase';
import { collection, getDocs, query, doc, updateDoc, where } from "firebase/firestore";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    nroSocio: String
});
const router = useRouter();

//seteamos variables reactivas que utilizara el formulario
const name = ref(""),
    lastName = ref(""),
    phone = ref(""),
    rol = ref(""),
    adress = ref(""),
    loading = ref(false);

const usersRef = collection(db, 'users');
const userQuery = query(usersRef, where("nroSocio", "==", props.nroSocio + '/0'));
const userRef = await getDocs(userQuery)
userRef.forEach((user) => {
    name.value = user.data().name;
    lastName.value = user.data().lastName;
    phone.value = user.data().phone;
    rol.value = user.data().rol;
    adress.value = user.data().adress;
})

const goToBack = () => router.go(-1);

const editUser = (name, lastName, phone, adress, rol) => {
    loading.value = true;
    userRef.forEach(async (user) => {
        const docRef = doc(db, `users/${user.id}`);
        await updateDoc(docRef, {
            name,
            lastName,
            phone,
            adress,
            rol,
        })
            .then(() => {
                loading.value = false;
                goToBack();
            })
            .catch((err) => console.log(err));
    })
}

</script>
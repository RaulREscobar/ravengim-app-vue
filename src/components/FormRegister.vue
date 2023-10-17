<template>
  <v-sheet width="300" class="mx-auto mt-3">
    <v-form fast-fail @submit.prevent="registerUser">
      <v-container class="">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="name" label="Nombre" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="lastName" label="Apellido" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="dni" label="DNI" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="email" label="E-mail" type="email" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="phone" label="Telefono" type="number" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="adress" label="Dirección" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="password" label="Contraseña" type="password" required></v-text-field>
          </v-col>
          <v-col cols="6" class="text-center">
            <v-btn @click.prevent="goToBack" class="mx-2">CANCELAR</v-btn>
          </v-col>
          <v-col cols="6" class="text-center">
            <v-btn @click.prevent="registerUser(name, lastName, email, phone, adress, password, rol, payments)" :loading="loading"
              type="submit" class="mx-2">CREAR USUARIO</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { auth, db } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

//seteamos variables reactivas que utilizara el formulario
const name = ref(""),
  lastName = ref(""),
  email = ref(""),
  phone = ref(""),
  adress = ref(""),
  password = ref(""),
  dni = ref(""),
  rol = "user",
  payments= [{}],
  loading = ref(false);

const goToBack = () => router.go(-1);

const registerUser = async (name, lastName, email, phone, adress, password, rol = "user", payments) => {
  loading.value = true

  const infoUser = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).then((newUser) => newUser)
    .catch((error) => console.log(error));

  const docRef = doc(db, `users/${infoUser.user.uid}`);

  setDoc(docRef, {
    name,
    lastName,
    email,
    phone,
    adress,
    nroSocio: dni.value + '/0',
    rol,
    payments
  })
    .then(() => {
      loading.value = false;
      goToBack()
    })
    .catch((err) => console.log(err))
}

</script>
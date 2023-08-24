<template>
  <v-app-bar id="bar-nro2" density="compact">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-account-circle">
    </v-btn>

    <v-btn @click="goToLogin" prepend-icon="mdi-login" v-if="!isLoget">entrar</v-btn>
    <v-btn @click="logout" prepend-icon="mdi-logout-variant" v-else>salir</v-btn>

    <v-btn @click.stop="drawerAdmin = !drawerAdmin" icon="mdi-dots-vertical" v-if="rol == 'admin'"></v-btn>

  </v-app-bar>

  <v-navigation-drawer location="right" v-model="drawerAdmin">
    <v-list>
      <v-list-item v-for="link in viewsAdmin" :key="link.title" :to="{ name: link.value }">
        {{ link.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item v-for="link in views" :key="link.title" :to="{ name: link.value }">
        {{ link.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '@/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'vue-router';

//Store and Router
const authStore = useAuthStore();
const router = useRouter();

//variables para manejar que vera el usuario.

const drawer = ref(false);
const drawerAdmin = ref(false);
const rol = ref(null);
const name = ref("");
const avatar = ref("");
const isLoget = ref(false);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    isLoget.value = true;
    rol.value = await authStore.user.rol;
    name.value = await authStore.user.name;
  } else { isLoget.value = false }
});

const goToLogin = () => router.push('login');

const logout = () => {
  signOut(auth).then(() => {
    authStore.logout()
    router.push({ name: 'home' })
  })
    .catch((error) => {
      console.log({
        msj: "Hubo un error al cerrar sessión",
        error: error,
      })
    })
}

const viewsAdmin = [
  {
    title: "Registrar Ususario",
    value: "register",
  },
  {
    title: "Usuarios",
    value: "users",
  }
];

const views = [
  {
    title: "Inicio",
    value: "home",
  },
  {
    title: "Iniciar sesión",
    value: "login",
  },
  {
    title: "Contactanos",
    value: "contact",
  },
  {
    title: "Quienes somos",
    value: "aboutUs",
  },
  {
    title: "Mis Datos",
    value: "profile"
  }

  //Agregar mas rutas AQUI
]
//
</script>

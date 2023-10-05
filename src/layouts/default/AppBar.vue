<template>
  <v-app-bar id="bar-nro2" density="compact">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-account-circle">
    </v-btn>

    <v-btn @click="goToLogin" prepend-icon="mdi-login" v-if="!isLoget">entrar</v-btn>
    <v-btn @click="logout" prepend-icon="mdi-logout-variant" v-else>salir</v-btn>

    <v-btn @click.stop="drawerAdmin = !drawerAdmin" icon="mdi-dots-vertical" v-if="rol === 'admin'"></v-btn>

  </v-app-bar>
  <v-navigation-drawer location="right" v-model="drawerAdmin" v-if="rol === 'admin'">
    <v-list>
      <v-list-item v-for="link in viewsAdmin" :key="link.title" :to="{ name: link.value }">
        {{ link.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item :v-model="views" v-for="link in views" :key="link.title" :to="{ name: link.value }">
        {{ link.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <btn-access v-if="isLoget" />
</template>
<script setup>
import { ref, watch } from 'vue';
import { auth } from '@/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'vue-router';
import BtnAccess from '@/components/btn-access.vue';


//Store and Router
const authStore = useAuthStore();
const router = useRouter();

//variables para manejar que vera el usuario.

const drawer = ref(false);
const drawerAdmin = ref(false);
const rol = ref(authStore.user.rol);
const name = ref("");
const avatar = ref("");
const isLoget = ref(false);

//Si hay cambios en el store se actualizan los datos.
watch(useAuthStore(), () => {
  rol.value = authStore.user.rol;
  name.value = authStore.user.name;
})
// si el usuario esta logueado cambia la variable de entrar o salir.
onAuthStateChanged(auth, async (user) => {
  if (user) {
    isLoget.value = true;
  } else { isLoget.value = false }
});

//Función de ir al login
const goToLogin = () => router.push('login');
//Salir de sesión
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

//Rutas de administrador
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
//Rutas de usuarios
const views = ref([
  {
    title: "Inicio",
    value: "home",
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
    title: "Iniciar sesión",
    value: "login",
  },
  //Agregar mas rutas AQUI
])


//Si esta logueado se cambia el menu de navegación.
watch(isLoget, () => {
  if (isLoget.value) {
    views.value[3] = {
      title: "Mis Datos",
      value: "profile"
    }
  } else {
    views.value[3] = {
      title: "Iniciar sesión",
      value: "login",
    }
  }
})
</script>

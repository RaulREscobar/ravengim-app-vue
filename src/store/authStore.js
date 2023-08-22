import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore('AuthStore', () => {

    // instanciamos al usuario
    const user = ref({})
    console.log("creamos el user", user.value)

    //registramos al usuario
    function login(uid) {
        user.value = {
            uid: uid
        }
        console.log("Ahora el user esta logueado", user.value)
    }

    // reiniciamos usuario
    function logout() {
        user.value = {}
        console.log("Ahora el user NO esta logueado", user.value)
    }

    return {
        user,
        login,
        logout
    }

})
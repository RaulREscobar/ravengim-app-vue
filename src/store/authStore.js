import { auth, db } from "@/firebase";
import { defineStore } from "pinia";
import { ref } from "vue";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";

export const useAuthStore = defineStore('AuthStore', () => {
    // instanciamos al usuario
    const user = ref({})

    // si el usuario no cerro sesión  
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            //si esta logueado, buscamos su rol en la base de datos.
            const usersRef = collection(db, 'users');
            const userQuery = query(usersRef, where("email", "==", user.email));
            const userRef = await getDocs(userQuery)
            userRef.forEach((doc) => { login(user.uid, doc.data().rol) })
        } else {
            //si no esta logueado, no hacemos nada.
            console.log("No hay usuarios logueado")
        }
    })

    //registramos al usuario
    function login(uid, rol) {
        user.value = {
            uid: uid,
            rol: rol,
        }
    }

    // reiniciamos usuario
    function logout() {
        user.value = {}
    }

    return {
        user,
        login,
        logout
    }

})
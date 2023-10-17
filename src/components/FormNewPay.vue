<template>
    <v-sheet width="300" class="mx-auto mt-3">
        <v-form fast-fail @submit.prevent="registerUser">
            <v-container class="">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="name" label="Nombre" required></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
</template>
<script setup>


const props = defineProps({
    nroSocio: String
});

const usersRef = collection(db, 'users');
const userQuery = query(usersRef, where("nroSocio", "==", props.nroSocio + '/0'));
const userRef = await getDocs(userQuery)
userRef.forEach((user) => {
   console.log(user)
})

</script>
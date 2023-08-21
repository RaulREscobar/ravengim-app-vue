<template>
   <v-form>
        <v-row justify="center" class="d-flex flex-column align-center">
            <v-col cols="10" md="4">
                <v-text-field 
                variant="outlined"
                v-model="firstname"
                :rule="nameRules"
                :counter="3"
                label="Nombre"
                required
                ></v-text-field>
            </v-col>
            <v-col cols="10" md="4">
                <v-text-field 
                variant="outlined"
                v-model="email"
                :rule="emailRules"
                label="Email"
                required
                ></v-text-field>
            </v-col>
            <v-col cols="10" md="4">
                <v-textarea 
                rows="3"
                variant="outlined"
                type="text-area"
                v-model="textArea"
                :rule="emailTextArea"
                label="Tu Mensaje"
                required
                ></v-textarea>
            </v-col>
            <v-col cols="10" md="4" align="end">
                <v-btn>
                    ENVIAR
                </v-btn>
            </v-col>
        </v-row>
   </v-form>
</template>

<script setup>

const firstname ="nombre"
const email ="nombre"
const textArea ="nombre"

const nameRules = () => {}
const emailRules = () => {}
const emailTextArea = () => {}


</script>
<template>
    <v-sheet width="300" class="mx-auto mt-3">
        <v-form fast-fail @submit.prevent>
            <v-container class="">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field label="E-mail" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field label="Contraseña" type="password" required></v-text-field>
                    </v-col>
                    <v-col cols="6" class="text-center">
            <v-btn :to="{name:'home'}" class="mx-2">CANCELAR</v-btn>
          </v-col>
          <v-col cols="6" class="text-center">
            <v-btn :to="{name:'profile'}" type="submit" class="mx-2">INGRESAR</v-btn>
          </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
</template>

<script></script>
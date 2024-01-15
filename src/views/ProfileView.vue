<template>
    <Avatar />
    <Suspense>
        <FormData #default />
        <template #fallback>
            <v-container>
                <v-skeleton-loader type="sentences@4"></v-skeleton-loader>    
            </v-container>
        </template>
    </Suspense>
    <Suspense>
        <Payments #default />
        <template #fallback>
            <v-container>
                <v-skeleton-loader type="table-row-divider@3"></v-skeleton-loader>
            </v-container>
        </template>
    </Suspense>
</template>

<script setup>
import Avatar from '@/components/Avatar.vue';
import FormData from '@/components/FormData.vue';
import Payments from '@/components/Payments.vue';


</script>
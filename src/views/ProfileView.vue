<template>
    <Avatar />
    <Suspense>
        <FormData #default />
        <template #fallback>
           <!--  <v-skeleton-loader type="card"></v-skeleton-loader> -->
        </template>
    </Suspense>
    <Suspense>
        <Payments />
    </Suspense>
</template>

<script setup>
import Avatar from '@/components/Avatar.vue';
import FormData from '@/components/FormData.vue';
import Payments from '@/components/Payments.vue';


</script>
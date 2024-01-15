<template>
    <Suspense>
        <TableUsers #default />
        <template #fallback >
            <v-container>
                <v-skeleton-loader type="table"></v-skeleton-loader>
            </v-container>
        </template>
    </Suspense>
</template>

<script setup>
import TableUsers from '@/components/TableUsers.vue';
</script>
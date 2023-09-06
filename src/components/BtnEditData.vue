<template>
    <v-btn @click="goToUrl()" icon="mdi-pencil" variant="text"></v-btn>
</template>
<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();

const props = defineProps({
    url: String
});

const goToUrl = () => router.push(props.url);
</script>
<template>
    <h1>Usuario numero {{ userId }}</h1>
</template>

<script setup>

    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router'; 

    let userId = ref('')
    onMounted(() => {
            const route = useRoute();
            userId.value = route.params.id
        })

</script>
<template>
    <v-container class="pt-8">
        <h1 class="text-h6 text-center p-5">
            {{ title }}
        </h1>
    </v-container> 
</template>

<script>
export default{
    props:{
        title: String,
    }
}
</script>
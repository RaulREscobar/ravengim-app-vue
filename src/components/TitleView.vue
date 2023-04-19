<template>
    <v-container class="pt-8">
        <p class="text-h4 text-center p-3">
            {{ title }}
        </p>
    </v-container> 
</template>

<script>
export default{
    props:{
        title: String,
    }
}
</script>
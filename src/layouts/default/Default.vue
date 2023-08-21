<template>
  <v-app>
    <banner-logo />
    <default-bar />

    <default-view />

    <default-footer />  
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultFooter from './FooterBar.vue'
import BannerLogo from '@/components/BannerLogo.vue';
</script>

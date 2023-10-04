<template>
  <v-app>
    <banner-logo />
    <default-bar />
    <btn-access />
    
    <default-view />

    <default-footer />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import DefaultFooter from './FooterBar.vue'
import BannerLogo from '@/components/BannerLogo.vue';
import BtnAccess from '@/components/btn-access.vue';
</script>

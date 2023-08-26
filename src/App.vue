<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheHeader />
  <div class="container mx-auto">
    <RouterView />
  </div>
  <TheFooter />
</template>

<style scoped></style>

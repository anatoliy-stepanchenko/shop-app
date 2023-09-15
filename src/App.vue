<script setup>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import { Notivue, Notifications, pastelTheme } from 'notivue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <Notivue v-slot="item">
      <Notifications :item="item" :theme="pastelTheme" />
    </Notivue>
    <div class="container mx-auto flex-grow">
      <RouterView />
    </div>
    <TheFooter />
  </div>
</template>

<style scoped></style>

<template>
  <span>{{ orderQuantity }}</span>
</template>

<script setup>
import { useProductsStore } from '@/stores/index.js';
import { storeToRefs } from 'pinia';

const store = useProductsStore();

const { orderQuantity } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>

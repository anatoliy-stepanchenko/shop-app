<script setup>
import { onMounted } from 'vue';
import { useProductsStore } from '../stores';
import { storeToRefs } from 'pinia';

import BaseProductCard from '../components/BaseProductCard.vue';

const store = useProductsStore();

const { products } = storeToRefs(store);

onMounted(() => {
  store.getProducts();
  console.log(products);
});
</script>

<template>
  <div class="grid gap-4 grid-cols-3 justify-center">
    <BaseProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

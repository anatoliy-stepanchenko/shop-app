<template>
  <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    <BaseProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductsStore } from '@/stores';
import { storeToRefs } from 'pinia';

import BaseProductCard from '@/components/BaseProductCard.vue';

const store = useProductsStore();

const { products } = storeToRefs(store);

store.setOrderLocalStorage();

onMounted(() => {
  store.getProducts();
});
</script>

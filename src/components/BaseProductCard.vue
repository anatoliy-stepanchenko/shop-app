<template>
  <div class="border border-solid border-grey-500 border-radius rounded-md p-4 flex flex-col gap-4 justify-between">
    <div class="max-h-60">
      <img class="h-60 w-full object-cover" :src="props.product.image" :alt="props.product.title" />
    </div>
    <div>
      <router-link :to="{ name: 'product', params: { id: props.product.id } }">
        <h2 class="font-bold text-xl">{{ props.product.title }}</h2>
      </router-link>
    </div>
    <div>
      <p class="text-gray-400">{{ props.product.category }}</p>
    </div>

    <div class="flex justify-between items-center">
      <span class="text-amber-600 text-2xl">$ {{ props.product.price }}</span>
      <button class="bg-blue-200 border border-radius rounded-md p-2" @click="store.addProductToOrder(props.product)">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/index.js';
const store = useProductsStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>

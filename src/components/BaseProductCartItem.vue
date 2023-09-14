<template>
  <li class="flex py-6">
    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img class="h-full w-full object-cover object-center" :src="props.product.image" :alt="props.product.title" />
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">{{ props.product.title }}</a>
          </h3>
          <p class="ml-4">Total: ${{ totalProductPrice(props.product.price, props.product.quantity) }}</p>
        </div>
        <div class="flex justify-between">
          <p class="mt-1 text-sm text-gray-500">$ {{ props.product.price }}</p>
          <div class="flex">
            <button
              class="font-medium text-red-300 hover:text-red-200"
              @click="store.decreaseQuantity(props.product.id)"
              type="button"
            >
              -
            </button>
            <span class="mx-2">{{ props.product.quantity }}</span>
            <button
              class="font-medium text-green-300 hover:text-green-200"
              @click="store.increaseQuantity(props.product.id)"
              type="button"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <p class="text-gray-500">{{ props.product.category }}</p>

        <div class="flex">
          <button
            class="font-medium bg-red-300 border border-radius rounded-md p-2 hover:bg-red-400"
            type="button"
            @click="store.deletProductFromOrder(props.product.id)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { totalProductPrice } from '@/utils/helpers.js';
import { useProductsStore } from '@/stores';

const store = useProductsStore();

const props = defineProps({
  product: {
    type: Object,
    requared: true,
  },
});
</script>

<style lang="scss" scoped></style>

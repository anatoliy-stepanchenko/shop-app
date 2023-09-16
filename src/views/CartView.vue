<template>
  <div class="container bg-white p-6 rounded-lg shadow-lg">
    <div v-if="order.length">
      <div class="mt-8">
        <div class="flow-root">
          <ul class="-my-6 divide-y divide-gray-200" role="list">
            <BaseProductCartItem v-for="product in order" :product="product" :key="product.title" />
          </ul>
        </div>
      </div>

      <div class="mt-6 border-t border-gray-200 px-4 py-6 sm:px-6">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$ {{ totalOrderPrice }}</p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div class="mt-6">
          <a
            class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            href="#"
            >Checkout</a
          >
        </div>
        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <router-link to="/"
              ><button class="font-medium text-indigo-600 hover:text-indigo-500" type="button">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button></router-link
            >
          </p>
        </div>
      </div>
    </div>
    <p class="text-center" v-else>Cart is empty!</p>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useProductsStore } from '@/stores/index.js';
import BaseProductCartItem from '@/components/BaseProductCartItem.vue';

const store = useProductsStore();
const { order, totalOrderPrice } = storeToRefs(store);
store.setOrderLocalStorage();
</script>

<style lang="scss" scoped></style>

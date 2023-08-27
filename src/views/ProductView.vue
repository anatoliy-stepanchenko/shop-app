<template>
  <div class="flex justify-center items-center h-screen">
    <div class="container bg-white p-6 rounded-lg shadow-lg flex">
      <div class="mr-6">
        <img class="max-w-xs max-h-full" :src="singleProduct.image" alt="" />
      </div>
      <div class="flex flex-col justify-center">
        <h3 class="text-xl font-semibold">{{ singleProduct.title }}</h3>
        <p class="text-gray-600">{{ singleProduct.description }}</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-amber-600 text-lg font-semibold">$ {{ singleProduct.price }}</span>
          <button class="bg-blue-200 border rounded-md py-2 px-4">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getSingleProductQuery } from '../core/api';

const { id } = useRoute().params;
const router = useRouter();
const singleProduct = ref({
  id: null,
  title: '',
  price: null,
  description: '',
  category: '',
  image: '',
  rating: {},
});

const getSingleProduct = async (id) => {
  try {
    singleProduct.value = await getSingleProductQuery(id);
    if (!singleProduct.value) {
      router.push({
        name: 'NotFound',
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};
getSingleProduct(id);
</script>

<style lang="scss" scoped></style>

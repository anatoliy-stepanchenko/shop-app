import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getAllProductsQuery } from '../core/api';

export const useProductsStore = defineStore('', () => {
  const products = ref([]);

  const getProducts = async () => {
    products.value = await getAllProductsQuery();
  };

  return { products, getProducts };
});

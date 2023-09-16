import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { getAllProductsQuery } from '@/core/api';
import { totalProductPrice } from '@/utils/helpers.js';
import { push } from '@/main';

export const useProductsStore = defineStore('', () => {
  const products = ref([]);
  const order = ref([]);
  const BASE_QUANTIY = 1;
  const orderQuantity = computed(() => {
    return order.value ? order.value.reduce((total, product) => total + product.quantity, 0) : '0';
  });

  const getProducts = async () => {
    products.value = await getAllProductsQuery();
  };

  const addProductToOrder = (productToAdd) => {
    const productExist = order.value.find((product) => product.id === productToAdd.id);
    if (productExist) {
      productExist.quantity++;
      updateLocalStorage();
      push.success('Product added to cart!');
      return;
    }
    order.value.push({ quantity: BASE_QUANTIY, ...productToAdd });
    updateLocalStorage();
    push.success('Product added to cart!');
  };

  const totalOrderPrice = computed(() => {
    if (!order.value) {
      return '0.00';
    }
    const total = order.value.reduce(
      (total, product) => +total + +totalProductPrice(product.price, product.quantity),
      0
    );
    return total.toFixed(2);
  });

  const deletProductFromOrder = (id) => {
    order.value = order.value.filter((product) => product.id !== id);
    updateLocalStorage();
    push.error('Product deleted from cart!');
  };

  const increaseQuantity = (id) => {
    order.value.find((product) => product.id === id).quantity++;
    updateLocalStorage();
  };

  const decreaseQuantity = (id) => {
    const changeProduct = order.value.find((product) => product.id === id);
    if (changeProduct.quantity === 1) return;
    changeProduct.quantity--;
    updateLocalStorage();
  };

  const setOrderLocalStorage = () => {
    const curentOrderLocalStorage = JSON.parse(localStorage.getItem('order-local-storage'));
    if (!curentOrderLocalStorage) return;
    order.value = curentOrderLocalStorage;
  };

  const updateLocalStorage = () => {
    localStorage.setItem('order-local-storage', JSON.stringify(order.value));
  };

  return {
    products,
    order,
    getProducts,
    addProductToOrder,
    orderQuantity,
    totalOrderPrice,
    deletProductFromOrder,
    increaseQuantity,
    decreaseQuantity,
    setOrderLocalStorage,
    updateLocalStorage,
  };
});

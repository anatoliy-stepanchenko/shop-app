<template>
  <span class="badge">{{ orderQuantity }}</span>
</template>

<script setup>
import { useProductsStore } from '@/stores/index.js';
import { storeToRefs } from 'pinia';

const store = useProductsStore();

const { orderQuantity } = storeToRefs(store);
</script>

<style scoped>
.badge {
  width: 24px;
  height: 24px;
  background-color: yellow;
  border-radius: 50%;
  border: 2px solid;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-left: -50px;
  margin-top: -20px;
}
</style>

<template>
  <div>
    <div>404</div>
    <button class="bg-blue-200 border border-radius rounded-md p-2" @click="backToProducts">Back to products</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const backToProducts = () => {
  router.push({
    name: 'products',
  });
};
</script>

<style lang="scss" scoped></style>

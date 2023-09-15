<template>
  <div>
    <div class="error-404">404</div>
    <p class="text-center">Wrong URL!</p>
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

<style scoped>
.error-404 {
  font-size: xxx-large;
  text-align: center;
  color: lightpink;
  text-shadow: 1px 3px 4px red;
}
</style>

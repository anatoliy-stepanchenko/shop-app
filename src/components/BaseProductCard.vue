<template>
  <div class="border border-solid border-grey-500 border-radius rounded-md p-4 flex flex-col gap-4 justify-between">
    <div class="max-h-60">
      <img class="h-60 w-full object-cover" :src="props.product.image" :alt="props.product.title" />
    </div>
    <div>
      <h2 class="font-bold text-xl">{{ props.product.title }}</h2>
    </div>
    <div>
      <p class="text-gray-400">{{ props.product.category }}</p>
    </div>
    <div>
      <p class="max-h-40 min-h-40 overflow-hidden">{{ props.product.description }}</p>
    </div>
    <div class="flex justify-between">
      <span>$ {{ props.product.price }}</span>
      <button>add to cart</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>

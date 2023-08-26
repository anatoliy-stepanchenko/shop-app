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
    <!-- <div>
      <p class="max-h-40 min-h-40 overflow-hidden">{{ props.product.description }}</p>
    </div> -->
    <div class="flex justify-between items-center">
      <span class="text-amber-600 text-2xl">$ {{ props.product.price }}</span>
      <button class="bg-blue-200 border border-radius rounded-md p-2">Add to cart</button>
    </div>
  </div>

  <!-- <div>
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
    >
      <img
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
        :src="props.product.image"
        :alt="props.product.title"
      />
    </div>
    <div class="mt-4">
      <div class="flex justify-between">
        <h3 class="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true"></span>
            {{ props.product.title }}
          </a>
        </h3>

        <p class="text-sm font-medium text-gray-900">${{ props.product.price }}</p>
      </div>

      <p class="mt-1 text-sm text-gray-500">{{ props.product.category }}</p>
      <button class="bg-yellow-200 p-2">add to cart</button>
    </div>
  </div> -->
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

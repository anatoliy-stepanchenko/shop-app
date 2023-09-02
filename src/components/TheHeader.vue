<template>
  <header class="bg-gray-200 mb-2">
    <div class="container mx-auto">
      <nav class="flex max-w-9xl items-center justify-between py-4" aria-label="Global">
        <div class="flex lg:flex-1">
          <a class="-m-1.5 p-1.5" href="#">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" type="button">
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12 text-xl justify-between items-center">
          <a class="font-semibold leading-6 text-gray-900" href="#">Products</a>
          <router-link to="/cart"
            ><div class="flex justify-between items-center">
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <a class="m-2 font-semibold leading-6 text-gray-900" href="#">Cart</a>
            </div>
          </router-link>
          <BaseCartBadge />
        </div>
      </nav>
    </div>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a class="-m-1.5 p-1.5" href="#">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
          <button class="-m-2.5 rounded-md p-2.5 text-gray-700" type="button">
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                href="#"
                >Products</a
              >
              <a
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                href="#"
                >Cart</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- <header class="bg-white shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <div class="flex items-center">
        <img class="w-10 h-10 mr-2" src="logo.png" alt="Logo" />
        <h1 class="text-xl font-semibold">My Logo</h1>
      </div>
      <div class="flex items-center space-x-4">
        <a class="text-gray-600 hover:text-gray-900" href="#">Products</a>
        <a class="text-gray-600 hover:text-gray-900" href="#">Cart</a>
      </div>
    </div>
  </header> -->
</template>

<script setup>
import BaseCartBadge from '@/components/BaseCartBadge.vue';
</script>

<style lang="scss" scoped></style>

<template>
  <div class="container bg-white p-6 rounded-lg shadow-lg">
    <div class="mt-8">
      <div class="flow-root">
        <ul class="-my-6 divide-y divide-gray-200" role="list">
          <li class="flex py-6">
            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                class="h-full w-full object-cover object-center"
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
              />
            </div>

            <div class="ml-4 flex flex-1 flex-col">
              <div>
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href="#">Throwback Hip Bag</a>
                  </h3>
                  <p class="ml-4">$90.00</p>
                </div>
                <p class="mt-1 text-sm text-gray-500">Salmon</p>
              </div>
              <div class="flex flex-1 items-end justify-between text-sm">
                <p class="text-gray-500">Qty 1</p>

                <div class="flex">
                  <button class="font-medium text-indigo-600 hover:text-indigo-500" type="button">Remove</button>
                </div>
              </div>
            </div>
          </li>
          <li class="flex py-6">
            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                class="h-full w-full object-cover object-center"
                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
              />
            </div>

            <div class="ml-4 flex flex-1 flex-col">
              <div>
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href="#">Medium Stuff Satchel</a>
                  </h3>
                  <p class="ml-4">$32.00</p>
                </div>
                <p class="mt-1 text-sm text-gray-500">Blue</p>
              </div>
              <div class="flex flex-1 items-end justify-between text-sm">
                <p class="text-gray-500">Qty 1</p>

                <div class="flex">
                  <button class="font-medium text-indigo-600 hover:text-indigo-500" type="button">Remove</button>
                </div>
              </div>
            </div>
          </li>

          <!-- More products... -->
        </ul>
      </div>
    </div>

    <div class="mt-6 border-t border-gray-200 px-4 py-6 sm:px-6">
      <div class="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>$262.00</p>
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
</template>

<script setup></script>

<style lang="scss" scoped></style>

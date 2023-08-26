import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '@/views/ProductsView.vue';
import CartView from '@/views/CartView.vue';
import { document } from 'postcss';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductsView,
      meta: {
        title: 'Products',
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: {
        title: 'Cart',
      },
    },
  ],
});

router.beforeEach((to) => {
  document.title = `${to.meta.title} | shop-app`;
});

export default router;

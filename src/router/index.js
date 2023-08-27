import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '@/views/ProductsView.vue';
import CartView from '@/views/CartView.vue';
import NotFound from '@/views/NotFoundView.vue';
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
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: {
        title: 'NotFound',
      },
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
      meta: {
        title: 'Product',
      },
      props: true,
    },
  ],
});

router.beforeEach((to) => {
  document.title = `${to.meta.title} | shop-app`;
});

export default router;

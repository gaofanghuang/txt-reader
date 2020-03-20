import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'reader',
    children: [
      {
        path: 'bookshelf',
        name: 'bookshelf',
        component: () => import(/* webpackChunkName: "bookshelf" */ '../views/Bookshelf.vue'),
      },
      {
        path: 'reader',
        name: 'reader',
        component: () => import(/* webpackChunkName: "reader" */ '../views/Reader.vue'),
      },
      {
        path: 'set',
        name: 'set',
        component: () => import(/* webpackChunkName: "set" */ '../views/Set.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/pc/',
  routes,
});

export default router;

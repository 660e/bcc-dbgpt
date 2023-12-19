import { route } from 'quasar/wrappers';
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

export default route(() => {
  let createHistory;

  if (process.env.SERVER) {
    createHistory = createMemoryHistory;
  } else if (process.env.VUE_ROUTER_MODE === 'history') {
    createHistory = createWebHistory;
  } else {
    createHistory = createWebHashHistory;
  }

  return createRouter({
    history: createHistory(process.env.VUE_ROUTER_BASE),
    routes: [
      {
        path: '/',
        component: () => import('@/layouts/index.vue'),
        children: [
          {
            path: '',
            component: () => import('@/pages/index.vue')
          }
        ]
      }
    ],
    scrollBehavior: () => ({ left: 0, top: 0 })
  });
});

import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Callback from './views/Callback.vue';
import Login from './views/Login.vue';
import BookHotel from './views/BookHotel.vue';
import Stay from './views/Stay.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },
    {
      path: '/bookHotel/:id',
      name: 'bookHotel',
      component: BookHotel,
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/stay',
      name: 'stay',
      component: Stay,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === 'callback') {
    next();
  } else if (router.app.$auth.isAuthenticated()) {
    if (to.name === 'login') {
      next({
        path: '/',
        name: 'home',
      });
    } else {
      next();
    }
  } else if (to.name === 'login') {
    next();
  } else {
    next({
      path: '/login',
      name: 'login',
    });
  }
});

export default router;

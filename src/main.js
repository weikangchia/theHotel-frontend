import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App.vue';
import router from './router';
import store from './store';

import auth from './auth';

Vue.use(VueOnsen);
Vue.use(auth);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAP_API_KEY,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'

import store from './store/index';
import router from './router/index';

import * as momentFilters from './utils/momentFilters';

import './styles/app.scss';

Object.keys(momentFilters).forEach(key => {
  Vue.filter(key, momentFilters[key]);
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

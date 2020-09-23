import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store';
import {i18n} from './language/language';
import {router} from './router/router';

Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  store,
  i18n,
  router
}).$mount('#app')

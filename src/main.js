import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import utils from './mixin/utils'

Vue.config.productionTip = false

Vue.mixin(utils);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

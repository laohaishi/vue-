import Vue from 'vue'
// import App from './App.vue'
import App from './views/index.vue'
import Router from './router/router'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import axios from 'axios'
Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')

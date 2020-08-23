import Vue from 'vue'
import App from './App.vue'
// import App from './views/index.vue'
import router from './router/router'
//注意router 不能写成大写

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import axios from 'axios'
Vue.prototype.$axios=axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

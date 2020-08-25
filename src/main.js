import Vue from 'vue'
import App from './App.vue'
// import App from './views/index.vue'
import router from './router/router'
//注意router 不能写成大写
//路由拦截器,在路由跳转前进行拦截,只有通过next()放行函数才能往下执行
router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from);
  if(to.meta.needAuth){
    if(localStorage.getItem('token')){
      next();
    }else{
      router.push('/login')
    }
  }else{
    next()
  }
  
})
//引入组件跟它对应的样式并通过vue实例去使用它,这里用到的这个组件功能主要是弹框
import Vant  from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

import axios from 'axios'
Vue.prototype.$axios=axios
axios.defaults.baseURL='http://127.0.0.1:3000'
import {Toast} from 'vant';
axios.interceptors.response.use(res=>{
  const reg=/^4\d{2}$/
  if(reg.test(res.data.statusCode)){
    Toast.fail(res.data.message || '系统错误')
  }
  if(res.data.message=='用户信息验证错误'){
    router.replace('/login')
    return;
  }
  return res;
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

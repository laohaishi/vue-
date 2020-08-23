import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

 import Login from '../views/lr/login.vue'
 import Regist from '../views/lr/register.vue'
 import Personal from '../views/personal/index.vue'
 import Index from '../views/index.vue'
let router =new VueRouter({
    routes:[
        {
            name:'login',
            path:'/login',
            component:Login
        },
        {
            name:'register',
            path:'/register',
            component:Regist
        },
        {
            name:'personal',
            path:'/personal',
            component:Personal
        } ,    
        {
            name:'index',
            path:'/',
            component:Index
        }
    ]
})

export default router



















// 总结：配置路由分为以下几个步骤：
// 1、引入vue模块
// 2、引入下载好的vue-router模块
// 3、通过vue使用vue-router模块
// 4、引入路由要映射的组件页面
// 5、创建路由模块实例对象 
// 在里面通过routes属性（数组类型）配置一个个路由，每个路由配置都是一个对象，每引入一个映射的组件页面就要添加对应的路由配置
// 6、最后设置默认暴露这个路由
// 7、然后还要在入口文件中引入这个路由文件
// 8、最后在入口文件中的vue实例中挂载路由
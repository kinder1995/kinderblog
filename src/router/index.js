
// 加载组件跟模块

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Detail from '@/components/detail'   // 需要加载的组件

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/detail/:detail_id',  // 路由地址，以 : 开头的为动态
            name: 'Detail',  // 路由名称
            component: Detail
        }
    ]
})

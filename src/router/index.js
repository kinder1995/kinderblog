
// 加载组件跟模块

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Detail from '@/components/detail'
import Category from '@/components/category'

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
        },
        {
            path: '/categories/{id}/posts',
            name: 'Category',  // 路由名称
            component: Category
        }
    ]
})

// 从vue-router中按需引入所需要的功能
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 定义routes数组
const routes = [
    {
        path: '/',
        name: 'Home',  //命名路由
        component: Home,
    },
    {
        path: '/find',
        name: 'Find',
        component: () => import("../views/Find.vue"),  // 懒加载
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import("../views/Profile.vue"),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/Login.vue"),
    }
]

//通过createRouter创建路由实例router
const router = createRouter({
    history: createWebHashHistory(),//路由采用hash模式(带#的模式)
    routes,
})

// router抛出去，让main.js引用
export default router

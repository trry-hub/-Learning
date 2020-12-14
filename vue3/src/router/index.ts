/*
 * @Author: trry
 * @Date: 2020-11-29 21:27:08
 * @LastEditors: trry
 * @LastEditTime: 2020-11-29 22:11:27
 * @Description: file content
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/suspense',
        name: 'Suspense',
        component: () => import(/* webpackChunkName: "suspense" */ '../views/Suspense.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '../views/login/Login.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
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
    // {
    //     path: '',
    //     name: '404',
    //     component: () => import(/* webpackChunkName: "suspense" */ '../views/404.vue')
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import store from '@/store'

Vue.use(VueRouter)
const constantRoutes = [
    {
        path: '/reload',
        name: 'reload',
        component: () => import('@/views/reload')
    },
    {
        path: '*',
        name: '404',
        component: () => import(/* webpackChunkName: "base" */ '@/views/404.vue'),
        meta: {
            title: '404',
            sideBar: true,
            icon: 'index'
        }
    }
]

// 自动注册路由- page目录下的一级vue文件
const pageRoutes = []
require.context('@/page', true, /\.vue$/).keys().forEach(fileName => {
    const componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '')
    const temp = {
        path: `/${componentName}`,
        component: resolve => require([`@/page/${componentName}`], resolve)
    }
    pageRoutes.push(temp)
})

// 手动导入menu路由
import echart from './modules/echart'
import drag from './modules/drag'
let routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'Index',
                component: () => import('@/views/index'),
                meta: {
                    title: '首页',
                    sideBar: true,
                    icon: 'index'
                }
            },
            ...echart,
            ...drag
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    ...constantRoutes
]

routes = process.env.NODE_ENV === 'buildpage' ? [...pageRoutes] : [...routes, ...pageRoutes]

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

// // 全局前置守卫
// router.beforeEach((to, from, next) => {
//     next()
// })

// // 全局后置钩子
// router.afterEach((to, from) => {
//     to
//     from
// })

// 处理后的可用路由存到menu中
store.commit('menu/SETROUTES', router.options.routes)

export default router

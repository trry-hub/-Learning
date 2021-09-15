import Layout from '@/layout'
import EmptyLayout from '@/layout/empty'

export default [
    {
        path: '/pages_example/general',
        component: Layout,
        redirect: '/pages_example/general/permission',
        name: 'pagesExampleGeneral',
        meta: {
            title: '通用',
            icon: 'ri-function-line'
        },
        children: [
            {
                path: 'manager',
                name: 'pagesExampleGeneralManager',
                component: EmptyLayout,
                meta: {
                    title: '管理员管理'
                },
                children: [
                    {
                        path: '',
                        name: 'pagesExampleGeneralManagerList',
                        component: () => import(/* webpackChunkName: 'pages_example' */ '@/views/pages_example/manager/list'),
                        meta: {
                            title: '管理员列表',
                            sidebar: false,
                            breadcrumb: false
                        }
                    },
                    {
                        path: 'detail',
                        name: 'pagesExampleGeneralManagerCreate',
                        component: () => import(/* webpackChunkName: 'pages_example' */ '@/views/pages_example/manager/detail'),
                        meta: {
                            title: '新增管理员',
                            sidebar: false,
                            activeMenu: '/pages_example/general/manager'
                        }
                    },
                    {
                        path: 'detail/:id',
                        name: 'pagesExampleGeneralManagerEdit',
                        component: () => import(/* webpackChunkName: 'pages_example' */ '@/views/pages_example/manager/detail'),
                        meta: {
                            title: '编辑管理员',
                            sidebar: false,
                            activeMenu: '/pages_example/general/manager'
                        }
                    }
                ]
            },
            {
                path: 'permission',
                name: 'pagesExampleGeneralPermission',
                component: () => import(/* webpackChunkName: 'pages_example' */ '@/views/pages_example/permission'),
                meta: {
                    title: '权限'
                }
            }
        ]
    },
    {
        path: '/pages_example/shop',
        component: Layout,
        redirect: '/pages_example/shop/delivery',
        name: 'pagesExampleShop',
        meta: {
            title: '电商',
            icon: 'sidebar-shop'
        },
        children: [
            {
                path: 'delivery',
                name: 'pagesExampleShopDelivery',
                component: EmptyLayout,
                meta: {
                    title: '运费模版管理'
                },
                children: [
                    {
                        path: '',
                        name: 'pagesExampleShopDeliveryList',
                        component: () => import(/* webpackChunkName: 'pages_example' */ '@/views/pages_example/delivery/list'),
                        meta: {
                            title: '运费模版列表',
                            sidebar: false,
                            breadcrumb: false
                        }
                    },
                    {
                        path: 'detail',
                        name: 'pagesExampleShopDeliveryCreate',
                        component: () => import(/* webpackChunkName: 'pages_example' */ '@/views/pages_example/delivery/detail'),
                        meta: {
                            title: '新增运费模版',
                            sidebar: false,
                            activeMenu: '/pages_example/shop/delivery'
                        }
                    },
                    {
                        path: 'detail/:id',
                        name: 'pagesExampleShopDeliveryEdit',
                        component: () => import(/* webpackChunkName: 'pages_example' */ '@/views/pages_example/delivery/detail'),
                        meta: {
                            title: '编辑运费模版',
                            sidebar: false,
                            activeMenu: '/pages_example/shop/delivery'
                        }
                    }
                ]
            }
        ]
    }
]

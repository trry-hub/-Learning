import Layout from '@/layout'

export default [
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
                component: () => import(/* webpackChunkName: 'pages_example' */ '@/views/pages_example/delivery'),
                meta: {
                    title: '运费模版'
                }
            },
            {
                path: 'permission',
                name: 'pagesExampleShopPermission',
                component: () => import(/* webpackChunkName: 'pages_example' */ '@/views/pages_example/permission'),
                meta: {
                    title: '权限'
                }
            }
        ]
    }
]

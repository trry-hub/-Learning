import Layout from '@/layout'

export default {
    path: '/i18n_example',
    component: Layout,
    redirect: '/i18n_example/index',
    name: 'i18nExample',
    meta: {
        title: '国际化',
        i18n: 'route.i18n',
        icon: 'ri-earth-line',
        badge: 'NEW'
    },
    children: [
        {
            path: 'index',
            name: 'i18nExampleIndex',
            component: () => import(/* webpackChunkName: 'i18n_example' */ '@/views/i18n_example'),
            meta: {
                title: '国际化',
                i18n: 'route.i18n',
                sidebar: false,
                breadcrumb: false,
                activeMenu: '/i18n_example'
            }
        }
    ]
}

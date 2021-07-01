import Layout from '@/layout'

export default {
    path: '/print_example',
    component: Layout,
    redirect: '/print_example/index',
    name: 'printExample',
    meta: {
        title: '打印',
        icon: 'ri-printer-line'
    },
    children: [
        {
            path: 'index',
            name: 'printExampleIndex',
            component: () => import(/* webpackChunkName: 'print_example' */ '@/views/print_example'),
            meta: {
                title: '打印',
                sidebar: false,
                breadcrumb: false,
                activeMenu: '/print_example'
            }
        }
    ]
}

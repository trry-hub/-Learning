import Layout from '@/layout'

export default {
    path: '/bug_example',
    component: Layout,
    redirect: '/bug_example/index',
    name: 'bugExample',
    meta: {
        title: '错误日志',
        icon: 'ri-bug-line'
    },
    children: [
        {
            path: 'index',
            name: 'bugExampleIndex',
            component: () => import(/* webpackChunkName: 'bug_example' */ '@/views/bug_example'),
            meta: {
                title: '错误日志演示',
                sidebar: false,
                breadcrumb: false,
                activeMenu: '/bug_example'
            }
        }
    ]
}

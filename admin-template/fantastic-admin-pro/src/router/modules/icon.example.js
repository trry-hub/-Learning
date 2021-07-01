import Layout from '@/layout'

export default {
    path: '/icon_example',
    component: Layout,
    redirect: '/icon_example/remix',
    name: 'iconExample',
    meta: {
        title: '扩展图标',
        icon: 'sidebar-icon'
    },
    children: [
        {
            path: 'svg',
            name: 'iconExampleSvg',
            component: () => import(/* webpackChunkName: 'icon_example' */ '@/views/icon_example/svg'),
            meta: {
                title: 'SVG Icon'
            }
        },
        {
            path: 'remix',
            name: 'iconExampleRemix',
            component: () => import(/* webpackChunkName: 'icon_example' */ '@/views/icon_example/remix'),
            meta: {
                title: 'Remix Icon',
                paddingBottom: '100px'
            }
        }
    ]
}

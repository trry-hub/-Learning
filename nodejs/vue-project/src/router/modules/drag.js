import Empty from '@/layout/Empty'

export default [
    {
        path: '/drag',
        redirect: '/drag/index',
        name: 'DragEmpty',
        component: Empty,
        meta: {
            title: 'drag 示例',
            sideBar: true,
            icon: 'drag'
        },
        children: [
            {
                path: 'index',
                name: 'Drag',
                component: () => import(/* webpackChunkName: "Drag" */ '@/views/drag'),
                meta: {
                    title: 'echarts 示例',
                    sideBar: true
                }
            }
        ]
    }
]
import Empty from '@/layout/Empty'
export default [
    {
        path: '',
        redirect: '/echarts',
        name: 'Echarts',
        component: Empty,
        meta: {
            title: 'echarts 示例',
            sideBar: true,
            icon: 'eCharts'
        },
        children: [
            {
                path: 'echarts',
                name: 'Echarts',
                component: () => import('@/views/Echart'),
                meta: {
                    title: 'echarts 示例',
                    sideBar: true
                }
            },
            {
                path: 'line',
                name: 'Line',
                component: () => import('@/views/Echart/Line'),
                meta: {
                    sideBar: true,
                    title: '折线图'
                }
            }
        ]
    }
]

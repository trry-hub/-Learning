import Empty from '@/layout/Empty'
export default [
    {
        path: '/echarts',
        redirect: '/echarts/index',
        name: 'EchartsEmpty',
        component: Empty,
        meta: {
            title: 'echarts 示例',
            sideBar: true,
            icon: 'eCharts'
        },
        children: [
            {
                path: 'index',
                name: 'Echarts',
                component: () =>
                    import(/* webpackChunkName: "Echarts" */ '@/views/echart'),
                meta: {
                    title: 'echarts 示例',
                    sideBar: true
                }
            },
            {
                path: 'line',
                name: 'Line',
                component: () =>
                    import(
                        /* webpackChunkName: "Echarts" */ '@/views/echart/Line'
                    ),
                meta: {
                    sideBar: true,
                    title: '折线图'
                }
            }
        ]
    }
]

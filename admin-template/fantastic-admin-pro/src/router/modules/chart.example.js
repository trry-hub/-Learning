import Layout from '@/layout'

export default {
    path: '/chart_example',
    component: Layout,
    redirect: '/chart_example/echarts',
    name: 'chartExample',
    meta: {
        title: '可视化',
        icon: 'ri-bar-chart-2-line'
    },
    children: [
        {
            path: 'echarts',
            name: 'chartExampleEcharts',
            component: () => import(/* webpackChunkName: 'chart_example' */ '@/views/chart_example/echarts'),
            meta: {
                title: 'Echarts'
            }
        },
        {
            path: 'g2plot',
            name: 'chartExampleG2plot',
            component: () => import(/* webpackChunkName: 'chart_example' */ '@/views/chart_example/g2plot'),
            meta: {
                title: 'G2plot'
            }
        }
    ]
}

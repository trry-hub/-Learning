import Layout from '@/layout'

export default {
    path: '/animate_example',
    component: Layout,
    redirect: '/animate_example/index',
    name: 'animateExample',
    meta: {
        title: '动画',
        icon: 'ri-play-fill'
    },
    children: [
        {
            path: 'index',
            name: 'animateExampleIndex',
            component: () => import(/* webpackChunkName: 'animate_example' */ '@/views/animate_example'),
            meta: {
                title: '过渡动画'
            }
        },
        {
            path: 'spinkit',
            name: 'animateExampleSpinkit',
            component: () => import(/* webpackChunkName: 'animate_example' */ '@/views/animate_example/spinkit'),
            meta: {
                title: '加载动画'
            }
        },
        {
            path: 'svg',
            name: 'animateExampleSvg',
            component: () => import(/* webpackChunkName: 'animate_example' */ '@/views/animate_example/svg'),
            meta: {
                title: 'SVG 动画'
            }
        },
        {
            path: 'swiper',
            name: 'animateExampleSwiper',
            component: () => import(/* webpackChunkName: 'animate_example' */ '@/views/animate_example/swiper'),
            meta: {
                title: '轮播动画'
            }
        }
    ]
}

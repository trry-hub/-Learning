import Layout from '@/layout'
import IframeLayout from '@/layout/iframe'

export default {
    path: '/component_extend_example',
    component: Layout,
    redirect: '/component_extend_example/colorfulcard',
    name: 'componentExtendExample',
    meta: {
        title: '扩展组件',
        icon: 'sidebar-component'
    },
    children: [
        {
            path: 'colorfulcard',
            name: 'componentExtendExampleColorfulCard',
            component: () => import(/* webpackChunkName: 'component_extend_example' */ '@/views/component_extend_example/colorful.card'),
            meta: {
                title: '多彩渐变卡片'
            }
        },
        {
            path: 'editor',
            name: 'componentExtendExampleEditor',
            component: () => import(/* webpackChunkName: 'component_extend_example' */ '@/views/component_extend_example/editor'),
            meta: {
                title: '编辑器'
            }
        },
        {
            path: 'amap',
            name: 'componentExtendExampleAmap',
            component: () => import(/* webpackChunkName: 'component_extend_example' */ '@/views/component_extend_example/amap'),
            meta: {
                title: '高德地图点标记'
            }
        },
        {
            path: 'countto',
            name: 'componentExtendExampleCountTo',
            component: () => import(/* webpackChunkName: 'component_extend_example' */ '@/views/component_extend_example/count.to'),
            meta: {
                title: '计数器'
            }
        },
        {
            path: 'vue-sku-form',
            component: IframeLayout,
            name: 'componentExtendExampleVueSkuForm',
            meta: {
                title: 'vue-sku-form',
                link: 'https://hooray.github.io/vue-sku-form/',
                copyright: false
            }
        }
    ]
}

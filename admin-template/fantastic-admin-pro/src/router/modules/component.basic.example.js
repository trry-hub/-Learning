import Layout from '@/layout'

export default {
    path: '/component_basic_example',
    component: Layout,
    redirect: '/component_basic_example/pageheader',
    name: 'componentBasicExample',
    meta: {
        title: '基础组件',
        icon: 'sidebar-component'
    },
    children: [
        {
            path: 'pageheader',
            name: 'componentBasicExamplePageheader',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/pageheader'),
            meta: {
                title: '页头'
            }
        },
        {
            path: 'pagemain',
            name: 'componentBasicExamplePagemain',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/pagemain'),
            meta: {
                title: '内容块'
            }
        },
        {
            path: 'result',
            name: 'componentBasicExampleResult',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/result'),
            meta: {
                title: '处理结果'
            }
        },
        {
            path: 'actionbar',
            name: 'componentBasicExampleActionbar',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/actionbar'),
            meta: {
                title: '固定底部操作栏'
            }
        },
        {
            path: 'searchbar',
            name: 'componentBasicExampleSearchbar',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/searchbar'),
            meta: {
                title: '搜索面板'
            }
        },
        {
            path: 'batchactionbar',
            name: 'componentBasicExampleBatchactionbar',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/batchactionbar'),
            meta: {
                title: '批量操作栏'
            }
        },
        {
            path: 'tableautoheight',
            name: 'componentBasicExampleTableautoheight',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/table.autoheight'),
            meta: {
                title: '表格自适应'
            }
        },
        {
            path: 'upload',
            name: 'componentBasicExampleUpload',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/upload'),
            meta: {
                title: '上传'
            }
        },
        {
            path: 'imagepreview',
            name: 'componentBasicExampleImagePreview',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/image.preview'),
            meta: {
                title: '图片预览'
            }
        },
        {
            path: 'trend',
            name: 'componentBasicExampleTrend',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/trend'),
            meta: {
                title: '趋势标记'
            }
        },
        {
            path: 'area',
            name: 'componentBasicExampleArea',
            component: () => import(/* webpackChunkName: 'component_basic_example' */ '@/views/component_basic_example/area'),
            meta: {
                title: '省市区联动'
            }
        }
    ]
}

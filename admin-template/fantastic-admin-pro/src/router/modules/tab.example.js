import Layout from '@/layout'
// eslint-disable-next-line no-unused-vars
import Empty from '@/layout/empty'

export default {
    path: '/tab_example',
    component: Layout,
    redirect: '/tab_example/index',
    name: 'tabExample',
    meta: {
        title: '标签栏',
        icon: 'sidebar-tab',
        badge: 'NEW'
    },
    children: [
        {
            path: 'index',
            name: 'tabExampleIndex',
            component: () => import(/* webpackChunkName: 'tab_example' */ '@/views/tab_example'),
            meta: {
                title: '标签栏演示'
            }
        },
        {
            path: 'nested',
            name: 'tabExampleNested1',
            component: () => import(/* webpackChunkName: 'tab_example' */ '@/views/tab_example/nested/nested.vue'),
            meta: {
                title: '路由多级缓存 1'
            },
            children: [
                {
                    path: 'nested',
                    name: 'tabExampleNested2',
                    component: () => import(/* webpackChunkName: 'tab_example' */ '@/views/tab_example/nested/nested/nested.vue'),
                    meta: {
                        title: '路由多级缓存 1-1'
                    },
                    children: [
                        {
                            path: 'test',
                            name: 'tabExampleNestedTest',
                            component: () => import(/* webpackChunkName: 'tab_example' */ '@/views/tab_example/nested/nested/nested/index.vue'),
                            meta: {
                                title: '测试页面'
                            }
                        },
                        {
                            path: 'test2',
                            name: 'tabExampleNestedTest2',
                            component: () => import(/* webpackChunkName: 'tab_example' */ '@/views/tab_example/nested/nested/nested/index2.vue'),
                            meta: {
                                title: '测试页面2',
                                sidebar: false
                            }
                        }
                    ]
                }

            ]
        }
    ]
}

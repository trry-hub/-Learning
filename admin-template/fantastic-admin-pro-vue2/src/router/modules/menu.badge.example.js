import Layout from '@/layout'
import store from '@/store'

export default {
    path: '/menu_badge_example',
    component: Layout,
    redirect: '/menu_badge_example/dot',
    name: 'menuBadgeExample',
    meta: {
        title: '动态导航标记',
        icon: 'ri-notification-badge-line'
    },
    children: [
        {
            path: 'dot',
            name: 'menuBadgeExampleDot',
            component: () => import(/* webpackChunkName: 'menu_badge_example' */ '@/views/menu_badge_example/dot'),
            meta: {
                title: '点标记',
                badge: () => store.state.menuBadge.dot
            }
        },
        {
            path: 'number',
            name: 'menuBadgeExampleNumber',
            component: () => import(/* webpackChunkName: 'menu_badge_example' */ '@/views/menu_badge_example/number'),
            meta: {
                title: '数字标记',
                badge: () => store.state.menuBadge.number
            }
        },
        {
            path: 'text',
            name: 'menuBadgeExampleText',
            component: () => import(/* webpackChunkName: 'menu_badge_example' */ '@/views/menu_badge_example/text'),
            meta: {
                title: '文字标记',
                badge: () => store.state.menuBadge.text
            }
        }
    ]
}

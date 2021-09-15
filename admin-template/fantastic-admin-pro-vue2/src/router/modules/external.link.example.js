import Layout from '@/layout'
import IframeLayout from '@/layout/iframe'

export default {
    path: '/link',
    component: Layout,
    redirect: '/link/iframe',
    name: 'externalLinkExample',
    meta: {
        title: '官网',
        icon: 'ri-external-link-fill'
    },
    children: [
        {
            path: 'iframe',
            component: IframeLayout,
            name: 'linkExampleIframe',
            meta: {
                title: '内嵌网页',
                link: 'https://hooray.gitee.io/fantastic-admin',
                copyright: false
            }
        },
        {
            path: 'https://hooray.gitee.io/fantastic-admin',
            meta: {
                title: '新窗口打开'
            }
        }
    ]
}

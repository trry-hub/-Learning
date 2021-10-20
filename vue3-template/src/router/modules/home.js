const Layout = () => import('@/layout/index.vue')

export default {
  path: '/home',
  component: Layout,
  redirect: '/home/index',
  name: 'Home',
  meta: {
    title: '首页',
    icon: 'sidebar-home'
  },
  children: [
    {
      path: 'index',
      name: 'HomeIndex',
      component: () => import('@/views/home/index.vue'),
      meta: {
        title: '首页',
        icon: 'sidebar-home',
        sidebar: false,
        activeMenu: '/home',
        breadcrumb: false
      }
    }
  ]

}

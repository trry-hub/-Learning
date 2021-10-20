const Layout = () => import('@/layout/index.vue')

export default {
  path: '/course',
  component: Layout,
  redirect: '/course/index',
  name: 'Course',
  meta: {
    title: '课程管理',
    icon: 'sidebar-home'
  },
  children: [
    {
      path: 'index',
      name: 'CourseIndex',
      component: () => import('@/views/course/index.vue'),
      meta: {
        title: '课程管理',
        icon: 'sidebar-home',
        sidebar: false,
        activeMenu: '/course',
        breadcrumb: false
      }
    },
    {
      path: 'create',
      name: 'CourseCreate',
      component: () => import('@/views/course/create.vue'),
      meta: {
        title: '创建课程',
        sidebar: false,
        activeMenu: '/course'
      }
    }
  ]

}

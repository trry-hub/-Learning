/**
 * 结构
 * [
 * 		{
 * 			path: '页面跳转路径',
 * 			element: '当前组件',
 * 			children: [子组件列表],
 * 			redirect: '路由重定向',
 * 			exact: exact 是否为严格模式 默认true。注意：本次封装对于有子路由的，exact一律设置为false
 * 			meta:{
 * 				title: '页面名称（中文）',
 * 				icon: '图标',
 * 				nav: 是否展示到导航栏(boolean,默认 false),
 * 				entrance: 首页入口(boolean,默认 false),
 * 				type: 'layout 类型'
 * 			}
 * 		}
 * ]
 */

import { lazy } from 'react'
import { blog } from './blog'
import { treeFindID, treeFindPathID } from '@/utils'

import Error from '@/pages/Error'

const router = [
	{
		path: '/blog',
		element: lazy(() => import('@/layouts/Blog')),
		children: blog,
		meta: {
			title: 'Blog',
			icon: 'home',
			entrance: true
		}
	},
	{
		path: 'https://github.com/Name-Terry',
		meta: {
			title: 'GitHub',
			icon: 'github',
			entrance: true
		}
	},
	{
		path: 'tencent://message/?uin=2103438487&Site=qq&Menu=yes',
		meta: {
			title: 'QQ',
			icon: 'qq',
			entrance: true
		}
	},
	{
		path: '',
		meta: {
			title: 'Diary',
			icon: 'xin',
			entrance: true
		}
	},
	{
		path: 'https://www.youtube.com',
		meta: {
			title: 'YouTube',
			icon: 'youtube',
			entrance: true
		}
	},
	{
		path: '',
		meta: {
			title: 'FaceBook',
			icon: 'facebook',
			entrance: true
		}
	},
	{
		path: '*',
		element: Error,
		exact: false
	}
]

let navList = []
treeFindID(router, (item) => item.meta?.nav === true, navList)
navList = navList.map((item) => {
	let path = []
	treeFindPathID(router, (fnItem) => fnItem?.path === item?.path, path, 'path').filter(
		(item) => item?.indexOf('/') === 0
	)
	item.pathname = path.join('') + '/' + item.path
	return item
})

const entranceList = []
treeFindID(router, (item) => item.meta?.entrance === true, entranceList, '')

export { router, entranceList, navList }

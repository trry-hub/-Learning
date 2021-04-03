/**
 * 结构
 * [
 * 		{
 * 			path: '页面跳转路径',
 * 			component: '当前组件',
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

import { lazy } from "react";
import { blog } from "./blog";

const router = [
	{
		path: "/blog",
		component: lazy(() => import("@/layouts/Blog")),
		children: blog,
		meta: {
			title: "Blog",
			icon: "home",
			entrance: true,
		},
	},
	{
		path: "https://github.com/Name-Terry",
		meta: {
			title: "GitHub",
			icon: "github",
			entrance: true,
		},
	},
	{
		path: "tencent://message/?uin=2103438487&Site=qq&Menu=yes",
		meta: {
			title: "QQ",
			icon: "qq",
			entrance: true,
		},
	},
	{
		path: "",
		meta: {
			title: "Diary",
			icon: "xin",
			entrance: true,
		},
	},
	{
		path: "https://www.youtube.com",
		meta: {
			title: "YouTube",
			icon: "youtube",
			entrance: true,
		},
	},
	{
		path: "",
		meta: {
			title: "FaceBook",
			icon: "facebook",
			entrance: true,
		},
	},
	{
		path: "/404",
		component: lazy(() => import("@/pages/Error")),
		exact: true,
	},
];

function fn(route, callback, arr) {
	route.forEach((tmpRouter) => {
		if (callback(tmpRouter)) arr.push(tmpRouter);
		if (tmpRouter.children) fn(tmpRouter.children, callback, arr);
	});
}
const navList = [];
fn(router, (item) => item.meta?.nav === true, navList);

const entranceList = [];
fn(router, (item) => item.meta?.entrance === true, entranceList);

export { router, entranceList, navList };

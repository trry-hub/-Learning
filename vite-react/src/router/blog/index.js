import { lazy } from "react";

export const blog = [
	{
		path: "/blog/index",
		component: lazy(() => import("@/pages/blog/Index")),
		meta: {
			title: "首页",
			nav: true,
		},
	},
	{
		path: "/blog",
		redirect: "/blog/archive",
		exact: false,
		component: lazy(() => import("@/layouts/BlogList")),
		children: [
			{
				path: "/blog/archive",
				component: lazy(() => import("@/pages/blog/Archive")),
				meta: {
					title: "归档",
					type: "ListLayout",
					nav: true,
				},
			},
			{
				path: "/blog/classify",
				component: lazy(() => import("@/pages/blog/Classify")),
				meta: {
					title: "分类",
					type: "ListLayout",
					nav: true,
				},
			},
			{
				path: "/blog/tag",
				component: lazy(() => import("@/pages/blog/Tag")),
				meta: {
					title: "标签",
					type: "ListLayout",
					nav: true,
				},
			},
			{
				path: "/blog/readbook",
				component: lazy(() => import("@/pages/blog/Readbook")),
				meta: {
					title: "读书",
					type: "ListLayout",
					nav: true,
				},
			},
			{
				path: "/blog/resource",
				component: lazy(() => import("@/pages/blog/Resource")),
				meta: {
					title: "资源",
					type: "ListLayout",
					nav: true,
				},
			},
			{
				path:
					"https://blog.csdn.net/weixin_40637683?spm=1010.2135.3001.5343&type=blog",
				meta: {
					title: "CSDN",
					nav: true,
				},
			},
			{
				path: "https://juejin.cn/user/2620826707309208",
				meta: {
					title: "掘金",
					nav: true,
				},
			},
			{
				path: "/blog/course",
				component: lazy(() => import("@/pages/blog/Course")),
				meta: {
					title: "历程",
					type: "ListLayout",
					nav: true,
				},
			},
			{
				path: "/blog/track",
				component: lazy(() => import("@/pages/blog/Track")),
				meta: {
					title: "足迹",
					type: "ListLayout",
					nav: true,
				},
			},
			{
				path: "/blog/diary",
				component: lazy(() => import("@/pages/blog/Diary")),
				meta: {
					title: "日记",
					type: "ListLayout",
					nav: true,
				},
			},
			{
				path: "/blog/about",
				component: lazy(() => import("@/pages/blog/About")),
				meta: {
					title: "关于",
					type: "ListLayout",
					nav: true,
				},
			},
		],
	},
];

import { nanoid } from "nanoid";

const routes = [
	{
		id: nanoid(),
		name: "首页",
		pathname: "/index",
	},
	{
		id: nanoid(),
		name: "归档",
		pathname: "/archive",
		type: "ListLayout",
	},
	{
		id: nanoid(),
		name: "分类",
		pathname: "/classify",
		type: "ListLayout",
	},
	{
		id: nanoid(),
		name: "标签",
		pathname: "/tag",
		type: "ListLayout",
	},
	{
		id: nanoid(),
		name: "读书",
		pathname: "/readbook",
		type: "ListLayout",
	},
	{
		id: nanoid(),
		name: "资源",
		pathname: "/resource",
		type: "ListLayout",
	},
	{
		id: nanoid(),
		name: "CSDN",
		pathname:
			"https://blog.csdn.net/weixin_40637683?spm=1010.2135.3001.5343&type=blog",
	},
	{
		id: nanoid(),
		name: "掘金",
		pathname: "https://juejin.cn/user/2620826707309208",
	},
	{
		id: nanoid(),
		name: "历程",
		pathname: "/course",
		type: "ListLayout",
	},
	{
		id: nanoid(),
		name: "足迹",
		pathname: "/track",
		type: "ListLayout",
	},
	{
		id: nanoid(),
		name: "日记",
		pathname: "/diary",
		type: "ListLayout",
	},
	{
		id: nanoid(),
		name: "关于",
		pathname: "/about",
		type: "ListLayout",
	},
];

export default routes;

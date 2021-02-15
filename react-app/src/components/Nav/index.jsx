import nav from "./index.module.scss";

import React, { Component } from "react";

export default class Nav extends Component {
	state = {
		list: [
			{
				name: "trry",
				pathname: "/",
			},
			{
				name: "首页",
				pathname: "/index",
			},
			{
				name: "归档",
				pathname: "/archive",
			},
			{
				name: "分类",
				pathname: "/classify",
			},
			{
				name: "标签",
				pathname: "/tag",
			},
			{
				name: "读书",
				pathname: "/read",
			},
			{
				name: "资源",
				pathname: "/API",
			},
			{
				name: "CSDN",
				pathname: "/",
			},
			{
				name: "掘金",
				pathname: "",
			},
			{
				name: "历程",
				pathname: "/course",
			},
			{
				name: "足迹",
				pathname: "/track",
			},
			{
				name: "日记",
				pathname: "/diary",
			},
			{
				name: "关于",
				pathname: "/about",
			},
		],
	};
	render() {
		const { list } = this.state;

		console.log(list);

		return (
			<div className={nav["nav-wrap"]}>
				<div className={nav["left-grid"]}>
					{list.map((item, i) => {
						return (
							<div className={nav["item"]} key={i}>
								{item.name}
							</div>
						);
					})}
				</div>
				<div className={nav["right-grid"]}>123</div>
			</div>
		);
	}
}

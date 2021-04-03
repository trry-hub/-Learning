import css from "./index.module.scss";

import React, { Component } from "react";

import Item from "@/pages/blog/Index/components/Item";
import Inof from "@/pages/blog/Index/components/Info";
import Mooto from "@/pages/blog/Index/components/Mooto";
import Study from "@/pages/blog/Index/components/Study";

export default class Index extends Component {
	state = {
		list: [
			{
				title: "标题",
				path: "/",
				synopsis: "简介",
			},
			{
				title: "标题",
				path: "/",
				synopsis: "简介",
			},
			{
				title: "标题",
				path: "/",
				synopsis: "简介",
			},
			{
				title: "标题",
				path: "/",
				synopsis: "简介",
			},
			{
				title: "标题",
				path: "/",
				synopsis: "简介",
			},
			{
				title: "标题",
				path: "/",
				synopsis: "简介",
			},
		],
	};

	render() {
		const { list } = this.state;
		return (
			<div className={css["wrap"]}>
				<div className={css["list-wrap"]}>
					{list.map((item, index) => {
						return <Item key={index} {...item} />;
					})}
				</div>
				<div className={css["card-wrap"]}>
					<div className={css["item"]}>
						<Mooto />
					</div>
					<div className={css["item"]}>
						<Inof />
					</div>
					<div className={css["item"]}>
						<Study />
					</div>
				</div>
			</div>
		);
	}
}

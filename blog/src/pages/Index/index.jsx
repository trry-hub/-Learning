import css from "./index.module.scss";

import React, { Component } from "react";

import Item from "@/pages/Index/components/Item";
import Inof from "@/pages/Index/components/Info";
import Mooto from "@/pages/Index/components/Mooto";
import Study from "@/pages/Index/components/Study";


export default class Index extends Component {
	state = {
		list: [
			{
				title: "标题",
				synopsis: "简介",
			},
			{
				title: "标题",
				synopsis: "简介",
			},
			{
				title: "标题",
				synopsis: "简介",
			},
			{
				title: "标题",
				synopsis: "简介",
			},
			{
				title: "标题",
				synopsis: "简介",
			},
			{
				title: "标题",
				synopsis: "简介",
			},
		],
	};

	componentDidMount() {}
	render() {
		const { list } = this.state;
		return (
			<div className={css["wrap"]}>
				<div className={css["list-wrap"]}>
					{list.map((item,index) => {
						return <Item key={index} {...item} />
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
